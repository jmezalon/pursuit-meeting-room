import { Link, useParams } from "react-router-dom";

function BookingCard({
  meetingName,
  id,
  startDate,
  endDate,
  formatDate,
  meetingRoom,
}) {
  const params = useParams();

  return (
    <div className="bookcard-list-items">
      <Link to={`/bookings/${id}`}>
        <h3>{meetingName}</h3>
      </Link>
      {!params.id && (
        <strong>
          <p>{meetingRoom}</p>
        </strong>
      )}
      <section>
        <span>Start: {formatDate(startDate)}</span>
        <span>End: {formatDate(endDate)}</span>
      </section>
    </div>
  );
}

export default BookingCard;
