import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/icons8-education-100.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Menus = ()  => {
  const links = ['home', 'events', 'contact', 'about']
  return (
    <>
    
    {
      links.map(link => <li key={link}>
        <NavLink className="mr-4"  style={({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "",
      color: isActive ? "orange" : "",
      textDecoration: isActive ? "underline" : "",
    };
  }} to={`/${link}`}>{link}</NavLink>
      </li>)
    }
    </>
  )
}


const Navbar = ({services}) => {
 



  const {user,name, email, logOut} = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
    .then(Result => {
    console.log(Result);
    })
    .catch(error => {
      console.error(error);
    })
  }



    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu bg-orange-400 menu-sm dropdown-content mt-3 p-2  shadow  rounded-box w-52">
       <Menus/>


      </ul>
    </div>
    <img draggable={false} className="w-2/12" src={logo} alt="" /> 
    <a className="font-bold  normal-case text-3xl">Wisdom<span className="text-custom-Pink">Wave</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className=" menu-horizontal px-1">
     <Menus />
    </ul>
  </div>
  {
    user ?  <div className="dropdown  pl-36 dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full ">
        <img className="" src="https://i.ibb.co/bbPmhgG/My-Profile-Pic.png" />
      </div>
    </label>
    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
      <p className="bg-custom-Pink text-xl text-white rounded-t-xl p-2">{name}</p>
      <li className="bg-custom-Pink-light text-white text-base font-medium  items-center  rounded-sm" onClick={handleLogOut}><button className="p-3">Logout</button></li>
    </ul>
  </div> 
  :
  <div className="navbar-end">
  <Link to="/login"><button className="bg-orange-400 btn text-white">Login</button></Link>
  </div>
  }
</div>
    );
};

export default Navbar;


