import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BookingCard from "./BookingCard";
import Navbar from "./Navbar";

function SingleRoom() {
  const [bookings, setBookings] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/meeting-rooms/${params.id}/bookings`)
      .then((r) => r.json())
      .then(setBookings);
  }, [params.id]);

  return (
    <div className="page-container">
      <header className="page-indication">
        <h1>Single Meeting Room</h1>
      </header>
      <main className="navbar-body-container">
        <div className="app-nav-body-content">
          <Navbar />
          {bookings.map((r) => (
            <header
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <strong>
                <p>{r.meeting.name}</p>
              </strong>
              <p>Capacity: {r.meeting.capacity}</p>
              <p>Floor: {r.meeting.floor}</p>
            </header>
          ))}
          <hr
            style={{
              height: "2px",
              borderWidth: "0",
              color: "gray",
              backgroundColor: "black",
            }}
          />

          <section>{/* <BookingForm /> */}</section>
          <hr
            style={{
              height: "2px",
              borderWidth: "0",
              color: "gray",
              backgroundColor: "black",
            }}
          />
          <section>
            {bookings.map((booking) => (
              <BookingCard
                key={booking.id}
                id={booking.id}
                meetingName={booking.meeting_name}
                startDate={booking.start_date}
                endDate={booking.end_date}
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default SingleRoom;
