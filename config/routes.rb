SpaceFace::Application.routes.draw do

  root :to => "root#root"
  devise_for :users
  resources :users, :only => [:index]
  resources :feed_items

  
end
