import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
    <li><NavLink to="/" style={({ isActive, isPending }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isPending ? "red" : "black",
    };
  }}>Home</NavLink></li>
      <li tabIndex={0}>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
      <li><NavLink to="/workshops-and-webinars" >Workshops and Webinars</NavLink></li>
      <li><NavLink to="/career-development-seminar">Career Development Seminar</NavLink></li>
      <li><NavLink to="/digital-marketing-workshop">Digital Marketing Workshop</NavLink></li>
      <li><NavLink to="/language-learning-webinar">Language Learning Webinar</NavLink></li>
      <li><NavLink to="/entrepreneurship-conference">Entrepreneurship Conference</NavLink></li>
      <li><NavLink to="/photography-workshop">Photography Workshop</NavLink></li>
    </ul>
        </details>
      </li>
      <li><NavLink to="/blog">Blog</NavLink></li>
      <li><NavLink>Contact Us</NavLink></li>
      <li><NavLink>About Us</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
       {
        navLinks
       }


      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">WisdomWave</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        navLinks
      }
    </ul>
  </div>
  <div className="navbar-end">
  <div className="w-10 rounded-full">
          <img src="/" />
        </div>
  </div>
</div>
    );
};

export default Navbar;