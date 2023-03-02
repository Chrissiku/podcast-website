Rails.application.routes.draw do
  root "episodes#index"
  resources :episodes
end
