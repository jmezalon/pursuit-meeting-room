class Api::BookingsController < ApplicationController
    before_action :find_booking, only: [:show, :destroy]

    def index
        render json: Booking.all, status: :ok
    end

    def show
        render json: @booking, status: :ok
    end

    def create
        render json: Booking.create(booking_params), status: :created
    end

    def destroy 
        @booking.destroy
        head :no_content
    end

    private 

    def booking_params
        params.permit(:meeting_name, :meeting_id, :start_date, :end_date, :attendees)
    end

    def find_booking
        @booking = Booking.find(params[:id])
    end
end
