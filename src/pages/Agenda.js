import React from "react";
import Calendar from 'react-calendar'

const Agenda = props =>{
    const oneMonthFromNow = new Date();
    oneMonthFromNow.setMonth(oneMonthFromNow.getMonth()+1);
    return(
        <div className="row">
            <div className="col-2"/>
            <div className="col-6 wrapper center">
                <Calendar 
                    onClickDay={(date) => {console.log(date)}}
                    minDate={new Date()}
                    maxDate={oneMonthFromNow}
                />
                <div className="scrollableHorizontal vh-1">
                    {/* TODO: Get available dates from backend */}
                </div>
            </div>
            <div className="col-2" />
        </div>
    )
  }
  
  export default Agenda;