
import './App.css';

import Navigation from './Navigationbar';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Crousel from './Crousel';
import Mycard from './Mycard2';

 




function App() {
  return (
    
<div>
  <Router>
  <Navigation></Navigation>
  <center >  <h>MOTIVATION SPEAKERS</h>  </center>
 <center> <Crousel></Crousel></center>
 <center><h1>  AUTHORS  </h1></center>
< Mycard></Mycard>
 <Routes>
  <Route path="/home" element={<Home/>}></Route>
  <Route path="/Mylink" element={<link/>}></Route>

</Routes>
</Router>
 
 
    </div>
    );
   
}

export default App;
