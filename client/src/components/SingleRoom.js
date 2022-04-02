import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BookingCard from "./BookingCard";
import Navbar from "./Navbar";
import NewBookingForm from "./NewBookingForm";

function SingleRoom({ formatDate, bookings, setBookings }) {
  const [room, setRoom] = useState({});
  const params = useParams();

  useEffect(() => {
    fetch(`/api/meeting-rooms/${params.id}/bookings`)
      .then((r) => r.json())
      .then(setRoom);
  }, [params.id, bookings]);

  function handleAddBooking(newBooking) {
    setBookings({ ...bookings, newBooking });
  }

  return (
    <div className="page-container">
      <header className="page-indication">
        <h1>Single Meeting Room</h1>
      </header>
      <main className="navbar-body-container">
        <div className="app-nav-body-content">
          <Navbar />

          <header style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>
              <p>{room.name}</p>
            </strong>
            <p>Capacity: {room.capacity}</p>
            <p>Floor: {room.floor}</p>
          </header>

          <hr
            style={{
              height: "2px",
              borderWidth: "0",
              color: "gray",
              backgroundColor: "black",
            }}
          />

          <section>
            <NewBookingForm
              onAddBooking={handleAddBooking}
              formatDate={formatDate}
              id={params.id}
            />
          </section>
          <hr
            style={{
              height: "2px",
              borderWidth: "0",
              color: "gray",
              backgroundColor: "black",
            }}
          />
          <section>
            {room.bookings &&
              room.bookings.map((booking) => (
                <BookingCard
                  key={booking.id}
                  id={booking.id}
                  meetingName={booking.meeting_name}
                  formatDate={formatDate}
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
