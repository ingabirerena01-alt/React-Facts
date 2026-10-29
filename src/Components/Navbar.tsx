import reactLogo from "../assets/reactjs-icon.png";

function Navbar() {
  return (
    <header className="header">
      <nav className="logo">
        <img className="img" src={reactLogo} alt="React-logo" />
        <h2 className="React">ReactFacts</h2>
      </nav>
    </header>
  );
}

export default Navbar;
