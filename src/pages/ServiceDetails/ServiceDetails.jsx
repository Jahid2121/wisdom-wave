import { useLoaderData, useParams } from "react-router-dom";


const ServiceDetails = () => {
    const {id} = useParams()
    const idInt = parseInt(id)
    const services = useLoaderData()
    const service = services?.map(service => service)
    const event = service?.find(data => data.id === idInt )
    const { name, image, price, ShortDescription } = event
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};

export default ServiceDetails;