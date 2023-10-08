import '../Register/Register.css'
const Register = () => {
    const handleRegistration = e => {
        e.preventDefault()
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
          <input  type="text" placeholder="Name" className="input bg-gray-100  text-gray-700 rounded-full" required />

          <label className="label ">
            <span className="label-text font-bold">Photo</span>
          </label>
          <input  type="text" placeholder="Photo URL" className="input bg-gray-100  text-gray-700 rounded-full" required />
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