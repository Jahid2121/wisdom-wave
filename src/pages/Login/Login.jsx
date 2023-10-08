
import '../Login/Login.css'
const Login = () => {
    return (
        <div className='flex justify-center mt-5 font-Lato'>

    
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>



        <div className="bg-img shadow-2xl bg-base-100 flex text-center">
            <h2 className='text-3xl mx-auto my-auto text-white font-bold'>Welcome to login</h2>
            </div>
        </div>
    );
};

export default Login;