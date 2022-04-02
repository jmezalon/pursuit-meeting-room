import { Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import "./App.css";
import Booking from "./components/Booking";
import Newroom from "./components/Newroom";
import SingleRoom from "./components/SingleRoom";
import SingleBookingCard from "./components/SingleBookingCard";

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

  function handleCancelbooking(id) {
    setBookings(bookings.filter((b) => b.id !== id));
  }

  function formatDate(date) {
    let options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    let modifiedDate;
    if (date) {
      modifiedDate = new Date(date);
    }

    modifiedDate = new Intl.DateTimeFormat("en-US", options).format(
      modifiedDate
    );
    return modifiedDate;
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home meetingRooms={meetingRooms} />
        </Route>
        <Route exact path="/bookings">
          <Booking
            bookings={bookings}
            setBookings={setBookings}
            formatDate={formatDate}
          />
        </Route>
        <Route exact path="/bookings/:id">
          <SingleBookingCard
            formatDate={formatDate}
            onCancelMeeting={handleCancelbooking}
          />
        </Route>
        <Route exact path="/meetingrooms/new">
          <Newroom
            meetingRooms={meetingRooms}
            setMeetingRooms={setMeetingRooms}
            onAddRoom={handleNewRoom}
          />
        </Route>
        <Route exact path="/meetingrooms/:id">
          <SingleRoom formatDate={formatDate} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
