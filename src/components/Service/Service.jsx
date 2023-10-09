import { Link, useNavigate } from "react-router-dom";

const Service = ({service}) => {
    const {id, name, image, price, ShortDescription } = service


    return (
        <div className="border shadow-xl hover:border-yellow-500 flex flex-col bg-blend-overlay w-[310px]">
            <img className="w-full h-56" src={image} alt="" />
            <div className="flex mt-4">
            <div className="bg-custom-yellow h-13 w-2  "></div>
            <div>
            <h3 className="font-bold pl-2 mb-2 text-xl text-left">{name}</h3>
            
            <p className="text-left pl-2 font-medium text-custom-yellow">Tickets from: {price}</p>
            </div>
            </div>
            <p className="text-left pl-3 flex-grow">{ShortDescription}</p>
            <Link to={`/service/${id}`}><button  className="btn flex mx-auto  my-3 hover:text-white text-gray-600  hover:bg-gradient-to-br from-[#FF3E00] to-[#FFBE30]">Click to see details</button></Link>
        </div>
    );
};

export default Service;