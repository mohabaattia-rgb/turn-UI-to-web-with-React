function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logo" src="/Icon@2x.png" alt="" />
        <h1>Nexcent</h1>
      </div>

      <ul className="list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Feature</a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">Testimonial</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
      </ul>

      <div>
        <button className="log-in">
            Login
            </button>
        <button className="sign-up">
          Sign Up 
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
