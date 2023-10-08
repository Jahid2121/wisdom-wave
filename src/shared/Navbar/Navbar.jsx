import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/icons8-education-100.png'
const Navbar = ({services}) => {
    const navLinks = <>
    <li className="mr-4 text-xl"><NavLink to="/" style={({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "orange" : "",
      textDecoration: isActive ? "underline" : "",
    };
  }}>Home</NavLink></li>
      <li className="mr-4 text-xl" tabIndex={0}>
        <details>
          <summary>Services</summary>
          <ul>
          {
            services?.map(service =>   
              <li className="hover:bg-yellow-400 mb-1" key={service.id}><NavLink to={`/service/${service.id}`} >{service.name}</NavLink></li>
            )
          }
          </ul>
          {/* <ul className="p-2">
      <li><NavLink to="/workshops-and-webinars" >Workshops and Webinars</NavLink></li>
      <li><NavLink to="/career-development-seminar">Career Development Seminar</NavLink></li>
      <li><NavLink to="/digital-marketing-workshop">Digital Marketing Workshop</NavLink></li>
      <li><NavLink to="/language-learning-webinar">Language Learning Webinar</NavLink></li>
      <li><NavLink to="/entrepreneurship-conference">Entrepreneurship Conference</NavLink></li>
      <li><NavLink to="/photography-workshop">Photography Workshop</NavLink></li>
    </ul> */}
        </details>
      </li>
      <li  className="mr-4 text-xl"><NavLink to="/blog" style={({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "orange" : "",
      textDecoration: isActive ? "underline" : "",
    };
  }}>Blog</NavLink></li>
      <li className="mr-4 text-xl"><NavLink to="/speaker" style={({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "orange" : "",
      textDecoration: isActive ? "underline" : "",
    };
  }}>Speaker</NavLink></li>
      <li className="mr-4 text-xl"><NavLink style={({ isActive, isPending }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      textDecoration: isActive ? "underline" : "",
      color: isPending ? "black" : "orange",
    };
  }}>Contact Us</NavLink></li>
      <li className="mr-4 text-xl"><NavLink style={({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "orange" : "",
      textDecoration: isActive ? "underline" : "",
    };
  }}>About Us</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu bg-orange-400 menu-sm dropdown-content mt-3 p-2  shadow bg-base-100 rounded-box w-52">
       {
        navLinks
       }


      </ul>
    </div>
    <img draggable={false} className="w-2/6" src={logo} alt="" /> 
    <a className="font-bold  normal-case text-xl">Wisdom<span className="text-custom-Pink">Wave</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu-horizontal px-1">
      {
        navLinks
      }
    </ul>
  </div>
  <div className="navbar-end">
  <Link to="/login"><button className="bg-orange-400 btn text-white">Login</button></Link>
  </div>
</div>
    );
};

export default Navbar;


{/* <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://i.ibb.co/bbPmhgG/My-Profile-Pic.png" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div> */}