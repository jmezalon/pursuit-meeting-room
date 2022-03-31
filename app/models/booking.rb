class Booking < ApplicationRecord
  belongs_to :meeting

  validates :meeting_name, :meeting_id, :start_date, :end_date, presence: true
end
