import Navbar from "../../shared/Navbar/Navbar";
import SpeakerSlider from "./SpeakerSlider/SpeakerSlider";

const Speaker = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-3xl font-extrabold mb-5 text-orange-300">Our Speakers</h2>
            <div className="text-center">
            <SpeakerSlider></SpeakerSlider>
            </div>
        </div>
    );
};

export default Speaker;