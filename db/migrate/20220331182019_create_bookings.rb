class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.belongs_to :meeting, null: false, foreign_key: true
      t.string :meeting_name
      t.datetime :start_date
      t.datetime :end_date
      t.string :attendees

      t.timestamps
    end
  end
end
