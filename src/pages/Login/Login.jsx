
import '../Login/Login.css'
const Login = () => {
    return (
        <div className='flex  justify-center mt-14 font-Lato'>

    
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h2 className='text-left text-3xl mt-8 ml-4 font-light'>Sign In</h2>
      <form className="card-body">
        <div className="form-control">
          <label className="label ">
            <span className="label-text font-bold">Email</span>
          </label>
          <input  type="email" placeholder="email" className="input bg-gray-100  text-gray-700 rounded-full" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input  type="password" placeholder="password" className="input bg-gray-100 text-gray-700 rounded-full" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn rounded-full bg-gradient-to-br from-[#FF3E00] to-[#FFBE30] text-white ">Login</button>
        </div>
      </form>
    </div>



        <div className="bg-img shadow-2xl bg-base-100 flex  text-center">
            <div className='mx-auto my-auto'>
            <h2 className='text-3xl mb-4 text-white font-bold'>Welcome to login</h2>
            <p className='text-base text-white mb-4'>Don't have an account?</p>
            <button className='bg-orange-400 border border-white hover:bg-white hover:text-black px-5 py-3 rounded-full text-white'>Sign Up</button>
            </div>
            </div>
        </div>
    );
};

export default Login;