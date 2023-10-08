import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className=" max-w-5xl Roboto mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;