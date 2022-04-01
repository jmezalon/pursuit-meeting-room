import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Booking from "./components/Booking";
import Newroom from "./components/Newroom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/bookings">
          <Booking />
        </Route>
        <Route exact path="/meetingrooms/new">
          <Newroom />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
