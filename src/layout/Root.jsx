import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import { useEffect } from "react";

const Root = () => {


    useEffect(() => {
        
    },[])

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