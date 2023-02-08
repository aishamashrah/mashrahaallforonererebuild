

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {SayHello} from './component/sayhello'

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
export default function HomeComponet(){
    return (

        <div style={{ height: "100vh",
      backgroundImage:`url("https://images.pexels.com/photos/688660/pexels-photo-688660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")` 
    }}>
<header style={{
      backgroundColor: 'gray',color: 'white', padding: '10px',textAlign:'center' ,
    }}>
      
      <nav>
        <h1>All For One </h1>
      </nav>
    </header>
     <div style={{}}>
     <Button as={Link} to='SayHello'  style={{  width: "16%", height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Say Hello</Button>
     <Button as={Link} to='Greater' style={{  width: "16%", height: "45px", margin: "20px", backgroundColor:"light gray", color: "black"}}>Greater Than or Less</Button>
     <Button as={Link} to='ReverseIt '    style={{  width: "16%", height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Reverse It</Button>
   
     </div>

     <div style={{}}>
     <button style={{  width: "16%", height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Add 2 Numbers</button>
     <button style={{   width: "16%",  height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Mad Lib</button>
     <button style={{   width: "16%",  height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Student Directory</button>
     </div>

     <div style={{}}>
     <button style={{  width: "16%",  height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Asking Questions</button>
     <button style={{  width: "16%", height: "45px", margin: "20px", backgroundColor:"light gray", color: "black"}}>Odd or Even</button>
     <button style={{ width: "16%",  height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Restaurant Picker</button>
     </div>
    </div>
    );
}