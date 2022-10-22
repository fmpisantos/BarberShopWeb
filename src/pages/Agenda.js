import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar'
import Moment from "react-moment";

const Agenda = props =>{
    const oneMonthFromNow = new Date();
    oneMonthFromNow.setMonth(oneMonthFromNow.getMonth()+1);
    const [timesheet, setTimesheet] = useState([]);
    const [selectedHour, setSelectedHour] = useState(-1);
    const [day, setDay] = useState(Moment().format('YYYY-MM-DD'));

	const loadDay = (day, reset = true) => {
		setDay(day.dateString);
		let date = Moment(day.dateString)
		fetch(`${props.url}/barbershop/${1}/barber/${props.control.barber + 1}?datetime=${day.dateString}`)
			.then((response) => response.json())
			.then((json) => {
				setTimesheet(json);
			});
	};

	useEffect(() => {
		let d = Moment();
		loadDay(
			{
				dateString: d.format('YYYY-MM-DD'),
				hours: '',
				minutes: '',
				day: d.format('DD'),
				month: d.format('MM'),
				year: d.format('YYYY')
			}
		);
	}, []);

    return(
        <div className="row">
            <div className="col-2"/>
            <div className="col-6 wrapper center">
                <Calendar 
                    onClickDay={loadDay}
                    minDate={new Date()}
                    maxDate={oneMonthFromNow}
                    defaultActiveStartDate={day}
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