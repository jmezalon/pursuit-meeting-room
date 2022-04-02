function BookingCard({ meetingName, startDate, endDate, meetingRoom }) {
  return (
    <div className="bookcard-list-items">
      <h3>{meetingName}</h3>
      <strong>
        <p>{meetingRoom}</p>
      </strong>
      <section>
        <span>Start: {startDate}</span>
        <span>End: {endDate}</span>
      </section>
    </div>
  );
}

export default BookingCard;
