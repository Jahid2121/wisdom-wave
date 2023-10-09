import { useLoaderData } from "react-router-dom";
import Services from "../../components/Services/Services";
import Banner from "../../shared/Banner/Banner";
import Navbar from "../../shared/Navbar/Navbar";
import Faq from "../../components/Faq/Faq";
import Team from "../../components/Team/Team";

const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <Navbar services={services}></Navbar>
            <Banner></Banner>
            <Services services={services}></Services>
            <Faq></Faq>
            <Team></Team>
        </div>
    );
};

export default Home;