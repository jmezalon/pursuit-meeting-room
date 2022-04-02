class BookingSerializer < ActiveModel::Serializer
  attributes :id, :meeting_name, :start_date, :end_date
  belongs_to :meeting
end
