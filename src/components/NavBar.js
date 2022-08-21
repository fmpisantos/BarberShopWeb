import React, { useState } from "react";

// Icons
import HomeIcon from '@mui/icons-material/Home';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import EventIcon from '@mui/icons-material/Event';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

// Components
import NavButton from "./NavButton";

const NavBar = props =>{
    const [urls] = useState([
        {
            path: "",
            icon: <HomeIcon fontSize="large"/>
        },
        {
            path: "services",
            icon: <FaceRetouchingNaturalIcon fontSize="large"/>
        },
        {
            path: "barber",
            icon: <PersonAddAlt1Icon fontSize="large"/>
        },
        {
            path: "date",
            icon: <EventIcon fontSize="large"/>
        },
        {
            path: "finish",
            icon: <AssignmentTurnedInIcon fontSize="large"/>
        },
    ]);

    return(
        <div className="nav-bar-container">
            <div className="col1">
                <div className="nav-wrapper">
                    {urls.map((item,key) => {
                            return ( 
                                <NavButton active={ props.page === key } disabled={props.valid < key && key !== 1} path={item.path} key={key} setPage={()=>props.changePage(key)} >
                                    {item.icon}
                                </NavButton>
                            );
                        }
                    )}
                </div>
            </div>
        </div>
    )
  }
  
  export default NavBar;