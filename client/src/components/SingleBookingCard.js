import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Navbar from "./Navbar";

function SingleBookingCard({ formatDate }) {
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
    }).then(setCancelClick(false), history.goBack());
  }

  return (
    <div className="page-container">
      <header className="page-indication">
        <h1>Single Meeting Room</h1>
      </header>
      <main className="navbar-body-container">
        <div className="app-nav-body-content">
          <Navbar />

          <div className="bookcard-list-items">
            <h3>{booking.meeting_name && booking.meeting_name}</h3>
            <strong>
              <p>{booking.meeting && booking.meeting.name}</p>
            </strong>
            <section>
              Start:{" "}
              <span>
                <strong>
                  {booking.start_date &&
                    formatDate(booking.start_date.slice(0, 16))}
                </strong>
              </span>
              End:{" "}
              <span>
                <strong>
                  {booking.end_date &&
                    formatDate(booking.end_date.slice(0, 16))}
                </strong>
              </span>
              <span>Floor: {booking.meeting && booking.meeting.floor}</span>
            </section>

            {!cancelClick ? (
              <button onClick={() => setCancelClick(true)}>Cancel</button>
            ) : (
              <>
                <p>Are you sure?</p>
                <button onClick={handleCancelBooking}>Yes</button>
                <button onClick={() => setCancelClick(false)}>No</button>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default SingleBookingCard;
