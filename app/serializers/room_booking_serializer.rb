class RoomBookingSerializer < ActiveModel::Serializer
  attributes :id, :name, :capacity, :floor
  has_many :bookings
end
