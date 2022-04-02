import { useState } from "react";
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";

function NewBookingForm({ onAddBooking, id }) {
  const minDate = new Date();
  const maxDate = new Date("12/31/2022 11:59 PM");
  const [errors, setErrors] = useState([]);
  const [formData, setFormData] = useState({
    meeting_name: "",
    start_date: "",
    end_date: "",
    attendees: "",
    meeting_id: parseInt(id),
  });

  function handleFormDataChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleBookingSubmit(e) {
    e.preventDefault();

    fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        meeting_name: formData.meeting_name,
        start_date: formData.start_date.toString().slice(0, 21),
        end_date: formData.end_date.toString().slice(0, 21),
        attendees: formData.attendees,
        meeting_id: parseInt(id),
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) =>
          onAddBooking({
            meeting_name: data.meeting_name,
            start_date: data.start_date.toString().slice(0, 16),
            end_date: data.end_date.toString().slice(0, 16),
            attendees: data.attendees,
            meeting_id: data.meeting.id,
          })
        );
        setErrors([]);
        setFormData({
          meeting_name: "",
          start_date: "",
          end_date: "",
          attendees: "",
          meeting_id: parseInt(id),
        });
      } else {
        r.json().then((err) => {
          setErrors(err.errors);
        });
      }
    });
  }

  return (
    <form
      className="submit-booking-form"
      action="submit-booking"
      onSubmit={handleBookingSubmit}
    >
      <label>
        <input
          aria-label="meeting-name"
          placeholder="Meeting Name"
          name="meeting_name"
          value={formData.meeting_name}
          onChange={handleFormDataChange}
          type="text"
        />
      </label>

      <label>
        <span>Start: </span>
        <DateTimePickerComponent
          name="start_date"
          placeholder="Start date and time"
          value={formData.start_date}
          onChange={handleFormDataChange}
          min={minDate}
          max={maxDate}
        />
      </label>

      <label>
        <span>End: </span>
        <DateTimePickerComponent
          name="end_date"
          placeholder="End date and time"
          value={formData.end_date}
          onChange={handleFormDataChange}
          min={minDate}
          max={maxDate}
        />
      </label>
      <label>attendees: </label>
      <input
        aria-label="attendees"
        placeholder="optional"
        name="attendees"
        value={formData.attendees}
        onChange={handleFormDataChange}
        type="text"
      />

      <button>Book</button>
      <>
        {errors.map((e) => (
          <p key={e} style={{ color: "red" }}>
            {e}
          </p>
        ))}
      </>
    </form>
  );
}

export default NewBookingForm;
