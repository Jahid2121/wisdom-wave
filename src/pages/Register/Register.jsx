import { useContext } from 'react';
import '../Register/Register.css'
import { AuthContext } from '../../Provider/AuthProvider';
const Register = () => {
    const {createUser} = useContext(AuthContext)


    const handleRegistration = e => {
        e.preventDefault()
        const displayName = e.target.displayName.value
        const photoURL = e.target.photoURL.value
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(displayName , email, password);

        createUser(displayName,photoURL, email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.error(error.message);
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
          <input  type="password" name='password' placeholder="password" className="input bg-gray-100 text-gray-700 rounded-full" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn rounded-full bg-orange-400 text-white ">Sign Up</button>
        </div>
      </form>
    </div>
       
    </div>
    );
};

export default Register;