import react from "react";
import { Outlet } from "react-router";

const MyContainer = ({className, children}) => {
     return (
        <div className={`${className} max-w-[1250px] mx-auto`}>
               {children}
        </div>
     )
};

export default MyContainer;