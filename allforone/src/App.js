import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SayHello} from './component/SayHelloComponent'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeComponet from './component/HomeComponet';
import SayHelloComponent from './component/SayHelloComponent';
import GreaterThanorLessThan from './component/GreaterThanorLessThan'
import ReverseItcomponent from './component/ReverseItcomponent'
function App() {
  return (
//     <div style={{ height: "100vh",
//       backgroundImage:`url("https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")` 
//     }}>
// <header style={{
//       backgroundColor: 'gray',color: 'white', padding: '10px',textAlign:'center' ,
//     }}>
      
//       <nav>
//         <h1>All For One </h1>
//       </nav>
//     </header>
//      <div style={{}}>
//      <button style={{  width: "16%", height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Say Hello</button>
//      <button style={{  width: "16%", height: "45px", margin: "20px", backgroundColor:"light gray", color: "black"}}>Greater Than or Less</button>
//      <button style={{  width: "16%", height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Reverse It</button>
   
//      </div>

//      <div style={{}}>
//      <button style={{  width: "16%", height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Add 2 Numbers</button>
//      <button style={{   width: "16%",  height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Mad Lib</button>
//      <button style={{   width: "16%",  height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Student Directory</button>
//      </div>

//      <div style={{}}>
//      <button style={{  width: "16%",  height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Asking Questions</button>
//      <button style={{  width: "16%", height: "45px", margin: "20px", backgroundColor:"light gray", color: "black"}}>Odd or Even</button>
//      <button style={{ width: "16%",  height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Restaurant Picker</button>
//      </div>
//     </div>\






   <BrowserRouter>
     
   <Routes>
    <Route path='/' element={<HomeComponet/>}>  </Route>
    <Route path='SayHello' element={<SayHelloComponent/>}>  </Route>
    <Route path='Greater' element={<GreaterThanorLessThan/>}>  </Route>
    <Route path='ReverseIt' element={<ReverseItcomponent/>}>  </Route>
   </Routes>
   </BrowserRouter>

  );
}
export default App;

