class Booking < ApplicationRecord
  belongs_to :meeting

  validates :meeting_name, :start_date, :end_date, presence: true
end
