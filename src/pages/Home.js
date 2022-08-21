import React from "react";

const Home = props =>{
  return(
      <div className="app">
        <center><img src={props.logo} alt={"Barber Shop"} width="200vw" height="200vw"/></center>
        {/* <h1>{`${props.name} Page`}</h1> */}
      </div>
  )
}
  
export default Home;