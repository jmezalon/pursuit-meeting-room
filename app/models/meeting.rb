class Meeting < ApplicationRecord
    has_many :booking
    
    validates :meeting_name, :capacity, :floor, presense: true
end
