import Navbar from "./Navbar";
import { useEffect } from "react";
import BookingCard from "./BookingCard";

function Booking({ bookings, formatDate, setBookings }) {
  useEffect(() => {
    fetch("/api/bookings")
      .then((r) => r.json())
      .then(setBookings);
  }, [setBookings]);

  return (
    <div className="page-container">
      <header className="page-indication">
        <h1>Bookings</h1>
      </header>
      <main className="navbar-body-container">
        <div className="app-nav-body-content">
          <Navbar />
          <section>
            {bookings.map((book) => (
              <BookingCard
                key={book.id}
                id={book.id}
                meetingName={book.meeting_name}
                startDate={book.start_date}
                endDate={book.end_date}
                meetingRoom={book.meeting && book.meeting.name}
                floor={book.meeting && book.meeting.floor}
                formatDate={formatDate}
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default Booking;
