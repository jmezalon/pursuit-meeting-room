import { Link } from "react-router-dom";

function Roomlist({ name, id, capacity, floor }) {
  return (
    <div className="single-list-items">
      <Link to={`/meetingrooms/${id}`}>
        <h3>{name}</h3>
      </Link>
      <section className="rooms-details">
        <span>
          🏢 Floor: <strong>{floor}</strong>
        </span>
        <span>
          👥 Capacity: <strong>{capacity}</strong>
        </span>
      </section>
    </div>
  );
}

export default Roomlist;
