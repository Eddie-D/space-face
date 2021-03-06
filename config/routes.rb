SpaceFace::Application.routes.draw do

  root :to => "root#root"
  devise_for :users
  resources :users, :only => [:index, :show, :update] do
    resources :feed_items, :only => [:index]
    resources :friends, :only => [:index]
    resources :photos, :only => [:index]
    get "search", :on => :collection

  end
  resources :feed_items
  resources :status_updates, :only => [:create]
  resources :photos, :only => [:create]
  resource :friend_request, :only => [:create] do
    post "accept", :on => :member
    post "reject", :on => :member
  end
  resource :like, :only => [:create, :destroy]
  resource :comment, :only => [:create]

  
end
