import React from "react";
import Navbar from "../../shared/Navbar/Navbar";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {


  const handleContact = () => {
    toast.success('Successfully sent !')
  }

  return (
   <>
    <Navbar/>
    <Toaster/>
    <div className="min-h-screen font-Lato bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 font-semibold">Name</label>
            <input
              type="text"
              className="w-full border rounded-md p-2 focus:outline-none focus:border-pink-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              className="w-full border rounded-md p-2 focus:outline-none focus:border-pink-500"
              placeholder="Your email address"
              required
            />
          </div>
          <div>
            
          </div>
          <div>
            <label className="block text-gray-600 font-semibold">Message</label>
            <textarea
              className="w-full border rounded-md p-2 focus:outline-none focus:border-pink-500"
              placeholder="Your Message"
              required
            />
          </div> 
          <label className="block text-left text-gray-600 font-semibold">10+6</label>
          <input
            type="email"
            className="w-full border rounded-md p-2 focus:outline-none focus:border-pink-500"
            placeholder="Type your answer here"
            required
          />
          <button onClick={handleContact}
            type="submit"
            className="w-full bg-pink-500 text-white p-2 rounded-md hover:bg-pink-500 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
   </>
  );
};

export default Contact;
