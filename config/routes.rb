SpaceFace::Application.routes.draw do

  root :to => "root#root"
  devise_for :users
  resources :users, :only => [:index, :show] do
    resources :friends, :only => [:index]
  end
  resources :feed_items

  
end
