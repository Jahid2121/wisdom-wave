
const Faq = () => {
    return (
        <div className=" my-10">
            <h2 className="text-5xl ">FAQs</h2>
            <div className="bg-custom-Pink mt-2 h-2 w-52 mb-7  mx-auto ">
                
            </div>
            
            
            <div>
            <div>
   {/* FAQ Item 1 */}
  <div className="collapse collapse-arrow mb-3  bg-base-200">
    <input type="radio" name="my-accordion-2" checked="checked" /> 
    <div className="collapse-title text-xl font-medium">
      What types of events does your company manage?
    </div>
    <div className="collapse-content"> 
      <p>We specialize in organizing a wide range of events, including corporate conferences, seminars, product launches, weddings, birthday parties, and more. Our experienced team tailors each event to meet your specific requirements.</p>
    </div>
  </div>
  
   {/* FAQ Item 2 */}
  <div className="collapse collapse-arrow mb-3 bg-base-200">
    <input type="radio" name="my-accordion-2" /> 
    <div className="collapse-title text-xl font-medium">
      How can I register for your upcoming events?
    </div>
    <div className="collapse-content"> 
      <p>Registering for our events is easy! Simply visit our website's event registration page, select the event you're interested in, and follow the registration instructions. You can find detailed information and registration links in the event descriptions on our website.</p>
    </div>
  </div>
  
   {/* FAQ Item 3 */}
  <div className="collapse collapse-arrow mb-3 bg-base-200">
    <input type="radio" name="my-accordion-2" /> 
    <div className="collapse-title text-xl font-medium">
      Are there any discounts available for group bookings?
    </div>
    <div className="collapse-content"> 
      <p>Yes, we offer special discounts for group bookings. If you plan to attend our events with a group of colleagues, friends, or family members, please contact our support team or check the event details for information on group discounts and how to avail them.</p>
    </div>
  </div>

   {/* FAQ Item 4 */}
  <div className="collapse collapse-arrow mb-3 bg-base-200">
    <input type="radio" name="my-accordion-2" /> 
    <div className="collapse-title text-xl font-medium">
      What safety measures are in place at your events, especially considering the current global situation?
    </div>
    <div className="collapse-content"> 
      <p>The safety and well-being of our attendees are our top priorities. We strictly adhere to local health guidelines and protocols. Our events feature enhanced sanitation practices, social distancing measures, and options for virtual participation. Rest assured, we are committed to creating a safe and enjoyable event experience for everyone.</p>
    </div>
  </div>

   {/* FAQ Item 5 */}
  <div className="collapse collapse-arrow mb-3 bg-base-200">
    <input type="radio" name="my-accordion-2" /> 
    <div className="collapse-title text-xl font-medium">
      Can I sponsor one of your events?
    </div>
    <div className="collapse-content"> 
      <p>Absolutely! We welcome sponsorships from businesses and organizations looking to promote their products or services to our event attendees. For sponsorship opportunities, please reach out to our sponsorship team through the contact details provided on our website. We offer various sponsorship packages tailored to your marketing goals.</p>
    </div>
  </div>
</div>


            </div>
        </div>
    );
};

export default Faq;