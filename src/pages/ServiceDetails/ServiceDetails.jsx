import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";

const ServiceDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const services = useLoaderData();
  const service = services?.find((data) => data.id === idInt);

  const {
    name,
    benefits,
    process,
    testimonials,
    image,
    price,
    DetailedDescription,
  } = service;

  const User = testimonials?.map((testimonial) => testimonial.user);
  const Quote = testimonials?.map((testimonial) => testimonial.comment);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="py-16">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-custom-primary font-semibold text-center mb-8">
            {name}
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div>
              <img
                src={image}
                alt={name}
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl text-custom-primary font-semibold mb-4">
                About Our {name}
              </h2>
              <p className="text-custom-secondary">{DetailedDescription}</p>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xl sm:text-2xl text-custom-primary font-semibold mb-4">
              Benefits
            </h2>
            <ul className="list-disc ml-4 text-custom-secondary">
              {benefits?.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-xl sm:text-2xl text-custom-primary font-semibold mb-4">
              Process
            </h2>
            <ol className="list-decimal ml-4 text-custom-secondary">
              {process?.map((singleProcess, idx) => (
                <li key={idx}>{singleProcess}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl text-custom-primary font-semibold mb-4">
              Client Testimonials
            </h2>
            <p className="text-custom-primary">{User}</p>
          </div>
          <blockquote className="text-lg sm:text-xl italic text-gray-600 mt-4">
            {Quote}
          </blockquote>
        </div>
      </div>

      <div className="py-12">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10">
          <h2 className="text-3xl sm:text-4xl text-custom-primary font-semibold text-left mb-4">
            Pricing
          </h2>
          <p className="text-custom-secondary">
            Contact us for pricing details and customized {name} options.
          </p>
          <Link
            to="/contact"
            className="block mt-4 text-lg sm:text-xl text-center text-custom-primary font-medium hover:underline"
          >
            Click here to Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
