class Meeting < ApplicationRecord
    has_many :bookings
    
    validates :name, :capacity, :floor, presence: true
end
