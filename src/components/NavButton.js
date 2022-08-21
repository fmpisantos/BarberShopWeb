import React from "react";

const NavButton = props =>{
    return(
        <div className={`nav-bar-button${props.active?" nav-active": ""}${props.disabled ? " nav-disabled": " pointer"}`} onClick={()=>{if(!props.disabled)props.setPage()}}>
            {props.children}
        </div>
    )
  }
  
  export default NavButton;