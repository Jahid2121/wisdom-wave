import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";

const ServiceDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const services = useLoaderData();
  const service = services?.map((service) => service);
  const event = service?.find((data) => data.id === idInt);
  const {
    name,
    benefits,
    process,
    testimonials,
    image,
    price,
    DetailedDescription,
  } = event;
  const User = testimonials?.map((testimonial) => testimonial.user);
  const Quote = testimonials?.map((testimonial) => testimonial.comment);

  return (
    <div className="mb-32">
      <Navbar></Navbar>
      <h2 className="text-center text-black mb-4 font-bold text-3xl">{name}</h2>
      <img className="w-1/2 mx-auto" src={image} alt={name} />
      <div className=" ml-32">
        <h3 className="text-4xl text-custom-primary my-6 font-bold">
          About Our {name}
        </h3>
        <p className="text-left text-custom-secondary">{DetailedDescription}</p>
      </div>

      <div className="md:flex flex-col">
        <div>
          <h3 className="text-4xl  my-4 font-medium text-left ml-32 text-custom-primary">
            Benefits
          </h3>
          <ul className="ml-32 text-custom-secondary">
            {benefits?.map((benefit, idx) => (
              <li key={idx}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-4xl my-4 font-medium text-custom-primary text-left ml-32">
            Process
          </h3>
          <ol className="text-custom-secondary ml-32">
            {process?.map((singleProcess, idx) => (
              <li key={idx}>{singleProcess}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-4xl my-4 font-medium text-center text-custom-primary">
            Client Testimonials
          </h2>
          <div className="text-center">
            <h3 className="text-3xl font-medium text-custom-primary">{User}</h3>
          </div>
          <blockquote className="text-center text-lg italic text-gray-600 mt-4">
            {Quote}
          </blockquote>
        </div>
      </div>

      <h className="text-4xl my-4 font-medium ml-32 text-custom-primary text-left">Pricing</h>
      <p></p>
      <Link to="contact" className="text-4xl ml-32 font-medium text-center">
      click here Contact us for pricing details and customized {name} option
      </Link>
    </div>
  );
};

export default ServiceDetails;
