import { Link } from "react-router-dom";

function Roomlist({ name, id, capacity, floor }) {
  return (
    <div className="single-list-items">
      <Link to={`/meetingrooms/${id}`}>
        <h3>{name}</h3>
      </Link>
      <section>
        <span>Floor: {floor}</span>
        <span>Capacity: {capacity}</span>
      </section>
    </div>
  );
}

export default Roomlist;
