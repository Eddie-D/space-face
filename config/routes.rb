SpaceFace::Application.routes.draw do

  root :to => "root#root"
  devise_for :users

  resources :feed_items

  
end
