import Service from "../Service/Service";

const Services = ({services}) => {
    return (
        <div>
            <h3 className="text-4xl text-custom-Pink  my-8  font-medium">Our <span className=" font-bold">Services</span></h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-1 ">
            {
                services?.map(service => <Service key={service.id} service={service}></Service> )
            }
            </div>
        </div>
    );
};

export default Services;