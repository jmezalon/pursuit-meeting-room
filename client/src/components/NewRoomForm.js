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
      <label>
        <input
          aria-label="room name"
          placeholder="Room Name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        <input
          aria-label="floor"
          placeholder="Floor"
          type="text"
          name="floor"
          value={floor}
          onChange={(e) => setFloor(e.target.value)}
        />
      </label>
      <label>
        <input
          aria-label="capacity"
          placeholder="Capacity"
          type="number"
          name="capacity"
          value={capacity}
          onChange={(e) => setCapacity(e.target.value)}
        />
      </label>
      <button>Submit</button>
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
