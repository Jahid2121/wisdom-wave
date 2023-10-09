import google from '../../assets/icons8-google-30.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Login/Login.css'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Navbar from '../../shared/Navbar/Navbar';
import { AiOutlineGoogle } from "react-icons/ai";



const Login = () => {
    <Navbar/>
  const location = useLocation()
      const navigate = useNavigate()
  const {googleSignIn, LogIn} = useContext(AuthContext)
    const handleSignIn = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log( email, password);

        LogIn(email, password)
        .then(result => {
          console.log(result.user);
        })
        .catch(error => {
          console.error(error);
        })
    }

    const handleGoogleSignIn = () => {
      
      googleSignIn()
      .then(result => {
        console.log(result.user);
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        console.error(error);
      })
    }
    return (
        <div className='flex  justify-center mt-14 font-Lato'>

    
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className='flex justify-between'>
        <h2 className='text-left text-4xl mt-8 ml-9 font-light'>Sign In</h2>
        <span onClick={handleGoogleSignIn}><button className='hover:bg-custom-yellow p-3 mt-8 mr-5 border text-2xl rounded-full'><AiOutlineGoogle/> </button></span>
        </div>
        
      <form onSubmit={handleSignIn} className="card-body">
        <div className="form-control">
          <label className="label ">
            <span className="label-text text-lg font-bold">Email</span>
          </label>
          <input  type="email" name='email' placeholder="email" className="input bg-gray-100 text-black  focus:text-gray-700 rounded-full" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-lg font-bold">Password</span>
          </label>
          <input  type="password" name='password' placeholder="password" className="input bg-gray-100 text-black focus:text-gray-700 rounded-full" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn rounded-full bg-gradient-to-br from-[#FF3E00] to-[#FFBE30] text-white ">Sign In</button>
          <div className='flex gap-4'>
          <label className="label">
            <a href="#" className="label-text-alt link text-lg link-hover">
              <input className='mr-1' type="checkbox" name="" id="" />
              Remember Me</a>
          </label>
          <label className="label">
            <a href="#" className="label-text-alt link text-lg link-hover">Forgot password?</a>
          </label>
          </div>
        </div>
      </form>
    </div>



        <div className="bg-img shadow-2xl bg-base-100 flex  text-center">
            <div className='mx-auto my-auto'>
            <h2 className='text-4xl mb-4 text-white font-bold'>Welcome to login</h2>
            <p className='text-lg text-white mb-4'>Don't have an account?</p>
            <Link to="/register"><button className='bg-orange-400 border border-white hover:bg-white hover:text-black px-5 py-3 rounded-full text-white'>Sign Up</button></Link>
            </div>
            </div>
        </div>
    );
};

export default Login;