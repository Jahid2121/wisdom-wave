import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";

const Root = () => {
    return (
       <>
         <div className=" max-w-5xl font-Roboto mx-auto">
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
       </>
    );
};

export default Root;