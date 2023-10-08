import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";


const ServiceDetails = () => {
    const {id} = useParams()
    const idInt = parseInt(id)
    const services = useLoaderData()
    const service = services?.map(service => service)
    const event = service?.find(data => data.id === idInt )
    const { name, image, price, DetailedDescription } = event
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center mb-4 font-bold text-3xl">{name}</h2>
            <img className="w-1/2 mx-auto" src={image} alt={name} />
            <h3 className="text-4xl my-6 font-bold">About Our {name}</h3>
            <p className="text-left">{DetailedDescription}</p>

            <h3 className="text-4xl my-4 font-medium text-left">Benifits</h3>
            <ul>
                <li>benifit</li>
                <li>2</li>
                <li>3</li>
            </ul>

            <h3 className="text-4xl my-4 font-medium text-left">Process</h3>
            <ol>
                <li>id 1</li>
                <li>id 2</li>
                <li>id 3</li>
                <li>id 4</li>
            </ol>

            <h2 className="text-4xl my-4 font-medium text-left">Client Testimonials</h2>
            <blockquote>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque quaerat nisi, sit minima repudiandae aut facilis iusto expedita quibusdam consequatur quia iure atque harum, ullam omnis neque fugiat aliquid laborum.
            </blockquote>

            <h className="text-4xl my-4 font-medium text-left">Pricing</h>
            <p>Contact us for pricing details and customized {name} option</p>
            <Link className="text-4xl my-4 font-medium text-left">Contact Us</Link>

        </div>
    );
};

export default ServiceDetails;