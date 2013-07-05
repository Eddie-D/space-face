SpaceFace::Application.routes.draw do

  root :to => "root#root"
  devise_for :users
  resources :users, :only => [:index, :show] do
    resources :friends, :only => [:index]
    resources :photos, :only => [:index]
  end
  resources :feed_items
  resources :status_updates, :only => [:create]
  resources :photos, :only => [:create]

  
end
