import React from "react";
import "./navleft.css"

function NavLeft(){
    return(
        <div className="over-all-navbar">
            <div className="left-wrapper">
                <img className="brand-logo" src="https://play-lh.googleusercontent.com/_pZJxiFdWvzErmPqdDSK4_sEssd_tW2y7iias3NcS4VfDXF28Jd1AqrUZnNMGtm48w" />
                <div className="input-wrapper">
                <span className="material-symbols-outlined icon boom">search</span>
                <input type="text" className="form-control input" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
            </div>
        </div>
    )
}

export default NavLeft; 