import { Link, useRouteMatch } from "react-router-dom";

function BookingCard({
  meetingName,
  id,
  startDate,
  endDate,
  formatDate,
  meetingRoom,
  floor,
}) {
  const { url } = useRouteMatch();
  const bottom = url !== "/bookings" ? "-32px" : "0";
  return (
    <div className="bookcard-list-items">
      <Link to={`/bookings/${id}`}>
        <h3>{meetingName}</h3>
      </Link>
      {url !== "/bookings/:id" && (
        <strong className="room-name">
          <p>{meetingRoom}</p>
        </strong>
      )}
      <section className="booking-details" style={{ bottom: `${bottom}` }}>
        <span>
          ⏲️ Start: <strong>{formatDate(startDate.slice(0, 16))}</strong>
        </span>
        <span>
          ⏲️ End: <strong>{formatDate(endDate.slice(0, 16))}</strong>
        </span>
        {url === "/bookings" && (
          <span>
            🏢 Floor: <strong>{floor}</strong>
          </span>
        )}
      </section>
    </div>
  );
}

export default BookingCard;
