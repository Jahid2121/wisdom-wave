import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";


const ServiceDetails = () => {
    const {id} = useParams()
    const idInt = parseInt(id)
    const services = useLoaderData()
    const service = services?.map(service => service)
    const event = service?.find(data => data.id === idInt )
    const { name, benefits,process, testimonials,image, price, DetailedDescription } = event
    const User = testimonials?.map(testimonial => testimonial.user)
    const Quote = testimonials?.map(testimonial => testimonial.comment)

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center mb-4 font-bold text-3xl">{name}</h2>
            <img className="w-1/2 mx-auto" src={image} alt={name} />
            <h3 className="text-4xl my-6 font-bold">About Our {name}</h3>
            <p className="text-left">{DetailedDescription}</p>

            <h3 className="text-4xl bg-custom-Pink my-4 font-medium text-center">Benefits</h3>
            <ul>
                {
                    benefits?.map((benefit,idx) => <li key={idx}>{benefit}</li>)

                }
                
            </ul>

            <h3 className="text-4xl my-4 font-medium bg-custom-Pink text-center">Process</h3>
            <ol>
                {
                    process?.map((singleProcess, idx) => <li key={idx}>{singleProcess}</li>)
                }
            </ol>

            <h2 className="text-4xl my-4 font-medium text-center bg-custom-Pink">Client Testimonials</h2>
            <h3 className="text-3xl font-medium">{User}</h3>
            <blockquote className="font-bold">
               {Quote}
            </blockquote>

            <h className="text-4xl my-4 font-medium text-left">Pricing</h>
            <p>Contact us for pricing details and customized {name} option</p>
            <Link className="text-4xl my-4 font-medium text-left">Contact Us</Link>

        </div>
    );
};

export default ServiceDetails;