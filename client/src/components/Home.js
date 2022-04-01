import Navbar from "./Navbar";

function Home() {
  return (
    <div className="home-container">
      <header className="page-indication">
        <h1>Home</h1>
      </header>
      <main className="navbar-body-container">
        <Navbar />
      </main>
    </div>
  );
}

export default Home;
