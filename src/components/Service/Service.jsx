
const Service = ({service}) => {
    const {name, image, price, description } = service
    return (
        <div className="border hover:border-yellow-500 bg-blend-overlay w-72">
            <img className="w-full h-56" src={image} alt="" />
            <div className="flex mt-4">
            <div className="bg-custom-yellow h-13 w-2  "></div>
            <div>
            <h3 className="font-bold pl-2 mb-2 text-xl text-left">{name}</h3>
            
            <p className="text-left pl-2 font-medium text-custom-yellow">Tickets from: {price}</p>
            </div>
            </div>
        </div>
    );
};

export default Service;