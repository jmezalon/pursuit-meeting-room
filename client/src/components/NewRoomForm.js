function NewRoomForm({
  name,
  floor,
  capacity,
  setName,
  setFloor,
  setCapacity,
  handleSubmit,
  errors,
}) {
  return (
    <form
      className="submit-room-form"
      action="submit-new-room"
      onSubmit={handleSubmit}
    >
      <section id="new-room-input-fields">
        <label>
          <input
            id="new-room-name"
            aria-label="room name"
            placeholder="Room Name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Floor:{" "}
          <input
            className="floor-capacity-input"
            aria-label="floor"
            placeholder="1"
            type="text"
            name="floor"
            value={floor}
            onChange={(e) => setFloor(e.target.value)}
          />
        </label>
        <label>
          Capcity:{" "}
          <input
            className="floor-capacity-input"
            aria-label="capacity"
            type="number"
            name="capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </label>
      </section>
      <button className="book-meeting-button">Submit</button>
      <>
        {errors.map((err) => (
          <p key={err} style={{ color: "red" }}>
            {err}
          </p>
        ))}
      </>
    </form>
  );
}

export default NewRoomForm;
