

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {SayHello} from './component/sayhello'

import React from 'react';
import { Link } from 'react-router-dom';
import { Button,header } from 'react-bootstrap';
export default function HomeComponet(){
    return (

        <div className='HeroImg' 

    >
<header className="header">
      
      <nav>
        <h1 className='header2'>All For One Challenges </h1>
      </nav>
    </header>

<br>
</br>
<br>
</br>
<br>
</br>
     <div className='row1'>
     <Button as={Link} to='SayHello'  style={{  width: "16%", height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Say Hello</Button>
     <Button as={Link} to='Greater' style={{  width: "16%", height: "45px", margin: "20px", backgroundColor:"light gray", color: "black"}}>Greater Than or Less</Button>
     <Button as={Link} to='ReverseIt '    style={{  width: "16%", height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Reverse It</Button>
   
     </div>

     <div  className='row1'>
     <Button as={Link} to='Add2Numbers' style={{  width: "16%", height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Add 2 Numbers</Button>
     <Button as={Link} to='MadLib' style={{   width: "16%",  height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Mad Lib</Button>
     <Button as={Link} to='StudentDirectory' style={{   width: "16%",  height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Student Directory</Button>
     </div>

     <div className='row1'>
     <Button as={Link} to='AskingQuestions'  style={{  width: "16%",  height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Asking Questions</Button>
     <Button as={Link} to='OddorEven' style={{  width: "16%", height: "45px", margin: "20px", backgroundColor:"light gray", color: "black"}}>Odd or Even</Button>
     <Button as={Link} to='RestaurantPicker' style={{ width: "16%",  height: "45px", margin: "20px", backgroundColor: "light gray", color: "black"}}>Restaurant Picker</Button>
     </div>
    </div>
    );
}