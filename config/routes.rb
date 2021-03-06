Rails.application.routes.draw do
  namespace :api do
    get "/meeting-rooms", to: "meetings#index"
    post "/meeting-rooms", to: "meetings#create"
    get "/meeting-rooms/:id", to: "meetings#show"
    get "/meeting-rooms/:id/bookings", to: "meetings#show_bookings"

    get "/bookings", to: "bookings#index"
    get "/bookings/:id", to: "bookings#show"
    post "/bookings", to: "bookings#create"
    delete "/bookings/:id", to: "bookings#destroy"
  end
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
