import { useParams } from "react-router-dom";

function BookingCard({ meetingName, startDate, endDate, meetingRoom }) {
  const params = useParams();

  return (
    <div className="bookcard-list-items">
      <h3>{meetingName}</h3>
      {!params.id && (
        <strong>
          <p>{meetingRoom}</p>
        </strong>
      )}
      <section>
        <span>Start: {startDate}</span>
        <span>End: {endDate}</span>
      </section>
    </div>
  );
}

export default BookingCard;
