class Api::MeetingsController < ApplicationController
    before_action :find_room, only: [:show, :show_bookings]

    def index
        render json: Meeting.all, status: :ok
    end

    def create
        meeting = Meeting.create!(meeting_params)
        render json: meeting, status: :created
    end

    def show
        render json: @room, status: :ok
    end

    def show_bookings
        render json: @room, serializer: RoomBookingSerializer, status: :ok
        # .bookings.where("start_date >= ?", Date.today), 
        
    end

    private  

    def meeting_params 
        params.permit(:name, :capacity, :floor)
    end

    def find_room
        @room = Meeting.find(params[:id])
    end
end
