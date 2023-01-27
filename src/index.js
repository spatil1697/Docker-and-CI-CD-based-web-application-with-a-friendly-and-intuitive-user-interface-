import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CoffeeApp from "./CoffeeApp";
import { BrowserRouter } from 'react-router-dom'
import { StateProvider } from "./context/StateProvider";
import { Provider } from 'react-redux';
import  store from './redux/store';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

< BrowserRouter>
  <Provider store={store}>

    <CoffeeApp />

  </Provider>
</BrowserRouter>

);