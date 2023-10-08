import { useLoaderData } from "react-router-dom";
import Services from "../../components/Services/Services";
import Banner from "../../shared/Banner/Banner";
import Navbar from "../../shared/Navbar/Navbar";
import Faq from "../../components/Faq/Faq";

const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <Navbar services={services}></Navbar>
            <Banner></Banner>
            <Services services={services}></Services>
            <Faq></Faq>
        </div>
    );
};

export default Home;