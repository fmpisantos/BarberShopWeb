import React from "react";
import SelectionItem from "@components/SelectionItem";

const Selection = props =>{
    return(
        <div className="app col-8">
            <center><img src={props.logo} alt={"Barber Shop"} width="200vw" height="200vw"/></center>
            <h1 className="title">{props.text.title}</h1>
            <h5 className="subtitle">{props.text.subTitle}</h5>
            <div className="verticalSpacing"/>
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
        </div>
    )
  }
  
  export default Selection;