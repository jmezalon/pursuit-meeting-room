import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Navbar from "./Navbar";

function SingleBookingCard({ formatDate, bookings, setBookings }) {
  const [booking, setBooking] = useState({});
  const [cancelClick, setCancelClick] = useState(false);
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    fetch(`/api/bookings/${params.id}`)
      .then((r) => r.json())
      .then(setBooking);
  }, [params.id]);

  function handleCancelBooking() {
    fetch(`/api/bookings/${params.id}`, {
      method: "DELETE",
    }).then(
      () => setBookings(bookings.filter((b) => b.id !== params.id)),
      setCancelClick(false),
      history.goBack()
    );
  }

  return (
    <div className="page-container">
      <header className="page-indication">
        <h1>Single Booking</h1>
      </header>
      <main className="navbar-body-container">
        <div className="app-nav-body-content">
          <Navbar />

          <div className="single-booking-item">
            <h3 id="single-meeting-name">
              {booking.meeting_name && booking.meeting_name}
            </h3>
            <strong className="room-name">
              <p>{booking.meeting && booking.meeting.name}</p>
            </strong>
            <section className="booking-details">
              <span>
                ⏲️ Start:{" "}
                <strong>
                  {booking.start_date &&
                    formatDate(booking.start_date.slice(0, 16))}
                </strong>
              </span>
              <span>
                ⏲️ End:{" "}
                <strong>
                  {booking.end_date &&
                    formatDate(booking.end_date.slice(0, 16))}
                </strong>
              </span>
              <span>
                🏢 Floor:{" "}
                <strong>{booking.meeting && booking.meeting.floor}</strong>
              </span>
            </section>
          </div>
          {!cancelClick ? (
            <button
              id="cancel-meeting-button"
              onClick={() => setCancelClick(true)}
            >
              Cancel
            </button>
          ) : (
            <div id="cancel-confirmation">
              <p>Are you sure?</p>
              <div id="options">
                <button id="yes-button" onClick={handleCancelBooking}>
                  Yes
                </button>
                <button id="no-button" onClick={() => setCancelClick(false)}>
                  No
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default SingleBookingCard;
