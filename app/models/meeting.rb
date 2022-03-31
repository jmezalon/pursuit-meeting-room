class Meeting < ApplicationRecord
    has_many :booking
    
    validates :name, :capacity, :floor, presence: true
end
