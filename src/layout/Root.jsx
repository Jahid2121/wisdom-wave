import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import { useEffect } from "react";

const Root = () => {
    const location = useLocation()


    useEffect(() => {
        if(location.pathname === '/'){
            document.title = `WisdomWave`
        }
        else{
            document.title = `${location.pathname.replace('/', '')}`
        }
    },[location.pathname])

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