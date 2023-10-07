import Service from "../Service/Service";

const Services = ({services}) => {
    return (
        <div>
            <h3 className="text-4xl font-bold my-8 ">Our Services</h3>
            {
                services?.map(service => <Service key={service.id} service={service}></Service> )
            }
        </div>
    );
};

export default Services;