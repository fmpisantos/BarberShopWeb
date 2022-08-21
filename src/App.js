import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'

import '@styles/App.css';
import Home from "@pages/Home";
import About from "@pages/About";
import Selection from "@pages/Selection";

import NavBar from "@components/NavBar";

import lang from "@langs/pt-pt"

import {
  changePage,
  reset,
  state as _state,
  setService,
  setBarber,
  clearService,
  clearBarber
} from '@redux/state/state';

const App = props =>{

  const [barbers, setBarbers] = useState([]);
  const [services, setServices] = useState([]);

  const state = useSelector(_state);
  const dispatch = useDispatch();
  const _reset = () => dispatch(reset());
  const _changePage = (amount) => {dispatch(changePage(amount))};
  const _setServices = (service) => dispatch(setService(service));
  const _clearServices = () => dispatch(clearService());
  const _setBarber = (barber) => dispatch(setBarber(barber));
  const _clearBarbers = () => dispatch(clearBarber());

  const choosePage = () => {
    switch(state.value){
      case 0: 
        return <Home {...props} pagination={state} name={lang.home.title} />;
      case 1:
        return <Selection {...props} text={lang.services} array={services} set={_setServices} clear={_clearServices}  active={state.service?.id} show={(item)=>true} />
      case 2:
        return <Selection {...props} text={lang.barbers} array={barbers} set={_setBarber} clear={_clearBarbers} active={state.barber?.id} service={state.service} show={(item) => {return item.services && item.services.length > 0 && item.services.find(it => it === state.service.id)}} />
      default:
        return <About {...props} name="About" />
    }
  }

  useEffect(() => {

    // const url = 'https://notalkfood.herokuapp.coxm';
    const localhost = 'localhost' // '192.168.1.29'
    const url = `http://${localhost}:8080`;

    const loadBarbers = () => {
      try {
          fetch(`${url}/barbershop/1/barbers`)
              .then((response) => response.json())
              .then((json) => {
                  for(let idx in json){
                    json[idx].services = JSON.parse(json[idx].services);
                  }
                  const barber = json.sort((a, b) => a.id > b.id);
                  setBarbers(barber);
              })
              .catch((err) => {
                  alert(err);
              });
      } catch {}
    }
  
    const loadServices = () => {
        try {
            fetch(`${url}/barbershop/1/services`)
                .then((response) => response.json())
                .then((json) => {
                  setServices(json);
                })
                .catch((err) => {
                    alert(err);
                });
        } catch {}
    }
    loadServices();
    loadBarbers();
  }, []);

  return(
    <div className="app">
      <NavBar changePage ={_changePage} reset={_reset} page={state.value} valid={state.valid}/>
      {choosePage()}
    </div>
  )
}

export default App;
