import React from "react";
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

const SelectionItem = props =>{
    return(
        <div key={props.idx}className="containerCenter padding5">
            <div className={`buttonBorder pointer${props.active ? " active": ""}`} onClick={()=>{if(props.active) props.clear(); else props.set()}}>
                <center>
                    {props.url ? (
                        <img src={props.url} alt={props.name} width="40vh" height="40vh"/>
                    ) : (
                        <PersonAddAlt1Icon fontSize="large"/>
                    )}
                </center>
                <h5 className="padding0 margin0">{`${props.name}${props.price?` - ${props.price}€`: ""}`}</h5>
            </div>
        </div>
    )
  }
  
  export default SelectionItem;