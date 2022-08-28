import React from "react";
import SelectionItem from "@components/SelectionItem";

const Selection = props =>{
    return(
        <div className="row">
            <div className="col-2"/>
            <div className="col-6 wrapper center">
                {props.array.map((item,key)=>
                    props.show(item) &&
                        <SelectionItem key={key} {...item} idx={key} set={(obj = item)=>props.set(JSON.stringify(item))} clear={props.clear} active={props.active === item.id} logo={props}/>
                )}
            </div>
            <div className="col-2" />
        </div>
    )
  }
  
  export default Selection;