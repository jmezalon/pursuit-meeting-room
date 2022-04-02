import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import "./App.css";
import Booking from "./components/Booking";
import Newroom from "./components/Newroom";

function App() {
  const [meetingRooms, setMeetingRooms] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("/api/meeting-rooms")
      .then((r) => r.json())
      .then(setMeetingRooms);
  }, []);

  function handleNewRoom(newRoom) {
    setMeetingRooms([...meetingRooms, newRoom]);
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home meetingRooms={meetingRooms} />
        </Route>
        <Route exact path="/bookings">
          <Booking bookings={bookings} setBookings={setBookings} />
        </Route>
        <Route exact path="/meetingrooms/new">
          <Newroom
            meetingRooms={meetingRooms}
            setMeetingRooms={setMeetingRooms}
            onAddRoom={handleNewRoom}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
