import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import STORE from './STORE'
// import App from './App';
//import HelloWorld from "./state-drills/HelloWorld";
//import Bomb from "./state-drills/Bomb";
import RouletteGun  from "./state-drills/RouletteGun";

ReactDOM.render(
    <RouletteGun bulletInChamber={8}/>,
    document.getElementById('root'),
);
