import { useLoaderData } from "react-router-dom";
import Services from "../../components/Services/Services";
import Banner from "../../shared/Banner/Banner";
import Navbar from "../../shared/Navbar/Navbar";

const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services services={services}></Services>
        </div>
    );
};

export default Home;