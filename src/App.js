import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
//import {BrowserRouter, Routes,Route} from "react-router-dom";
import Login from './Login';
import Navbar from './Navbar';
import Favorites from './Favorites';
import Main from './Main';
function App() {
  let Component
    switch (window.location.pathname) {
      case '/':
        Component=<Main/>
        break;
      case '/Favorites':
        Component=<Favorites/>
        break;
      case '/Login':
        Component=<Login/>
        break;
      
    }
  return (
    <>
      <Navbar/>
      {Component}
    </>
    

   /* <BrowserRouter>
    <Routes>
      <Route path='/auth' element={<Auth/>}/>
    </Routes>
    </BrowserRouter>*/
    

    );
}


export default App;
