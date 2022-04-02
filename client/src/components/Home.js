import Navbar from "./Navbar";

import Roomlist from "./Roomlist";

function Home({ meetingRooms }) {
  return (
    <div className="page-container">
      <header className="page-indication">
        <h1>Home</h1>
      </header>
      <main className="navbar-body-container">
        <div className="app-nav-body-content">
          <Navbar />
          <section>
            <p>extra credit find room will be here</p>
          </section>
          <hr
            style={{
              height: "2px",
              borderWidth: "0",
              color: "gray",
              backgroundColor: "black",
            }}
          />
          <section>
            {meetingRooms.map((room) => (
              <Roomlist
                key={room.id}
                name={room.name}
                capacity={room.capacity}
                floor={room.floor}
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default Home;
