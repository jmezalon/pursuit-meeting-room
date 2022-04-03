import { Link, useRouteMatch } from "react-router-dom";

function BookingCard({
  meetingName,
  id,
  startDate,
  endDate,
  formatDate,
  meetingRoom,
}) {
  const { url } = useRouteMatch();

  return (
    <div className="bookcard-list-items">
      <Link to={`/bookings/${id}`}>
        <h3>{meetingName}</h3>
      </Link>
      {url !== "/bookings/:id" && (
        <strong>
          <p>{meetingRoom}</p>
        </strong>
      )}
      <section>
        <span>Start: {formatDate(startDate.slice(0, 16))}</span>
        <span>End: {formatDate(endDate.slice(0, 16))}</span>
      </section>
    </div>
  );
}

export default BookingCard;
