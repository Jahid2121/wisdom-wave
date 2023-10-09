import { useLoaderData } from "react-router-dom";
import Slider from "./SpeakerSlider/Slider";
import Navbar from "../../shared/Navbar/Navbar";

const Events = () => {
    const events = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
           <Slider events={events}></Slider>
        </div>
    );
};

export default Events;