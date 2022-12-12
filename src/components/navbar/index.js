import React from "react";
import { Mycontext } from "../../App";
import "./index.css"
import NavLeft from "./nav-left";
import NavbarRight from "./navbarRight";

function Navbar(){
    let obj = React.useContext(Mycontext)
    return(
        <div className="global-nav">
                <div className="over-all-navbar">
                    <NavLeft/>
                    <NavbarRight/>
                </div>
          
        </div>
    )
}

export default Navbar;