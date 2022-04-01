function Roomlist({ name, capacity, floor }) {
  return (
    <div className="single-list-items">
      <h3>{name}</h3>
      <section>
        <span>Floor: {floor}</span>
        <span>Capacity: {capacity}</span>
      </section>
    </div>
  );
}

export default Roomlist;
