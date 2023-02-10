import {AskingQuestions} from '../services/DataService'
import { useState } from 'react';
import {Button} from 'react-bootstrap';
import {Link, Route, Routes} from 'react-router-dom'
let answr;

let answr2;
let ch2;
export  default function AskingQuestionscompnent(){
    const [userInput, setUserInput] = useState(' Your input is here');
    return (
      <>
             <Button as={Link} to="/">Return</Button>
             <div></div>

             <input onChange={({target: {value}})=> {
      answr = value
     }}></input>


        <div></div>
        <input onChange={({target: {value}})=> {
      answr2 = value
     }}></input>


 <button onClick={async () => {
      ch2 =  await AskingQuestions(answr, answr2);
      setUserInput(answr)
      console.log(ch2);
     }} > click to get data</button>
     <h1>{ch2}</h1>
      </>
    );
  }






