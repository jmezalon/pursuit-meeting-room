import Navbar from "./Navbar";

function Booking() {
  return (
    <div className="page-container">
      <header className="page-indication">
        <h1>Bookings</h1>
      </header>
      <main className="navbar-body-container">
        <div className="app-nav-body-content">
          <Navbar />
        </div>
      </main>
    </div>
  );
}

export default Booking;
