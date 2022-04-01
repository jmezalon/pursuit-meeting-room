import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar-container">
      <NavLink exact to="/">
        Meeting Rooms
      </NavLink>
      <div className="vl"></div>
      <NavLink exact to="/bookings">
        Bookings
      </NavLink>
      <div className="vl"></div>
      <NavLink exact to="/meetingrooms/new">
        New Room
      </NavLink>
    </nav>
  );
}

export default Navbar;
