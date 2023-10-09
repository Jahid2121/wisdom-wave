import { useContext, useState } from 'react';
import '../Register/Register.css'
import { AuthContext } from '../../Provider/AuthProvider';
import { FaEye,FaExclamationCircle, FaEyeSlash } from "react-icons/fa";
import { updateProfile } from 'firebase/auth';
const Register = () => {
    const {createUser} = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [ShowPassword, setShowPassword] = useState(false)
    console.log(error);


    const handleRegistration = e => {
        e.preventDefault()
        const displayName = e.target.displayName.value
        const photoURL = e.target.photoURL.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(displayName , email, password);


        setError('')
        setSuccess('')

        if(password.length < 6){
          setError('password must be at least 6 characters')
        return
        }
        else if(!/[A-Z]/.test(password)){
          setError('Your password should have at least one Uppercase letter')
          return
        }


        createUser( email, password)
        .then(result => {
            console.log(result.user);
            setSuccess('User Created Successfully')

            updateProfile(result.user, {
              displayName: displayName,
              photoURL: photoURL
            })
        })
        .catch(error => {
            console.error(error.message);
            setError(error.message)
        })
    }
    return (
        <div className='register-bg lg:min-h-screen p-3' style={{minHeight: 'calc(100vh - 64px)'}}>
            <div className="card field-bg  flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
        <h2 className='text-3xl   text-white font-bold '>Sign Up</h2>
      <form onSubmit={handleRegistration} className="card-body">
        <div className="form-control">

          <label className="label ">
            <span className="label-text font-bold">Name</span>
          </label>
          <input  type="text" name='displayName' placeholder="Name" className="input bg-gray-100  text-gray-700 rounded-full" required />

          <label className="label ">
            <span className="label-text font-bold">Photo</span>
          </label>
          <input  type="text" name='photoURL' placeholder="Photo URL" className="input bg-gray-100  text-gray-700 rounded-full" required />
          <label className="label ">
            <span className="label-text font-bold">Email</span>
          </label>
          <input  type="email" name='email' placeholder="email" className="input bg-gray-100  text-gray-700 rounded-full" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <div className='flex static'>
          <input   type={ShowPassword ? 'text' : "password"} name='password' placeholder="password" className="input bg-gray-100 text-gray-700 pr-14 rounded-full" required />
          <span className='relative -ml-9 mt-4'  onClick={() => setShowPassword(!ShowPassword)}>
            {
              ShowPassword ? <FaEye />  : <FaEyeSlash/>
            }
          </span>
          </div>
          
        </div>
        {
        error && <p className='text-red-950 flex items-center'><FaExclamationCircle/>{error}</p>
      }
      {
        success && <p className='text-green-800'>{success}</p>
      }
        <div className="form-control mt-6">
          <button className="btn rounded-full bg-orange-400 text-white ">Sign Up</button>
        </div>
      </form>
      
    </div>
       
    </div>
    );
};

export default Register;