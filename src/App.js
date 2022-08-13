import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

import '@styles/App.css';
import Home from "@pages/Home"
import About from "@pages/About"


import {
  increment,
  incrementByAmount,
  state
} from '@redux/counter';

const App = props =>{
  const counter = useSelector(state);
  const dispatch = useDispatch();
  const _increment = () => dispatch(increment())
  const _incrementByAmount = (amount) => {dispatch(incrementByAmount(amount))}
  return(
  <Router>
    <div className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
    <Routes>
      <Route path="/" element={<Home {...props} counter={counter} increment ={_increment} incrementByAmount={_incrementByAmount} name="Home"/>}/>
      <Route path="/about" element={<About {...props} name="About"/>}/>
    </Routes>
  </Router>
  )
}

export default App;
