import React from "react";

const Header = props =>{
    return(
        <div className="app col-8">
            <center><img src={props.logo} alt={"Barber Shop"} width="200vw" height="200vw"/></center>
            <h1 className="title">{props.text.title}</h1>
            <h5 className="subtitle">{props.text.subTitle}</h5>
            <div className="verticalSpacing"/>
            <div className="row">
                {props.children}
            </div>
        </div>
    )
  }
  
  export default Header;