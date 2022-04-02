import Navbar from "./Navbar";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import NewRoomForm from "./NewRoomForm";

function Newroom({ onAddRoom }) {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState([]);
  const [floor, setFloor] = useState("");
  const [capacity, setCapacity] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/api/meeting-rooms", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify({ name, floor, capacity }),
    }).then((r) => {
      if (r.ok) {
        r.json().then(onAddRoom);
        setErrors([]);
        setCapacity("");
        setFloor("");
        setName("");
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="page-container">
      <header className="page-indication">
        <h1>New Room</h1>
      </header>
      <main className="navbar-body-container">
        <div className="app-nav-body-content">
          <Navbar />
          <h3>Create a Room</h3>
          <NewRoomForm
            name={name}
            floor={floor}
            capacity={capacity}
            setCapacity={setCapacity}
            setFloor={setFloor}
            setName={setName}
            handleSubmit={handleSubmit}
            errors={errors}
          />
          <hr
            style={{
              height: "2px",
              borderWidth: "0",
              color: "gray",
              backgroundColor: "black",
            }}
          />
        </div>
      </main>
    </div>
  );
}

export default Newroom;
