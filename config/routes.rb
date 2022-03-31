Rails.application.routes.draw do
  namespace :api do
    get "/meeting-rooms", to: "meetings#index"
    post "/meeting-rooms", to: "meetings#create"
    get "/meeting-rooms/:id", to: "meetings#show"
    post "/meeting-rooms/:id/bookings", to: "meetings#show_bookings"

    get "/bookings", to: "bookings#index"
    get "/bookings/:id", to: "bookings#show"
    post "/bookings", to: "bookings#create"
    delete "/bookings/:id", to: "booking#destroy"
  end
end
