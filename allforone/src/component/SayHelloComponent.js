import "../App.css"
import { } from 'react-bootstrap'
import { useState } from 'react';
import { SayHello } from '../services/DataService';
// import {ClassName } from 'bootstrap'
let answer;


export default function SayHelloComponent() {
    const [savedInput, setUserInput] = useState('');
    const [displayname,SetDisplayName]=useState('our input is here');
    const handleUserinput = async () =>{
    let response = await SayHello(savedInput)
    SetDisplayName(response);
    sayhelloData = await SayHello(answer);
}  
    let sayhelloData;
    return (
        //background img 
        <div className='HeroImg'><div>
                <header className="header">
                    <nav>
                        <h1 className='header2'>say hello Challenge </h1>
                    </nav>
                </header>
                <div>
                    <input className="input" onChange={({ target: { value } }) => {
                        console.log(value);
                        answer = value
                        setUserInput(value)
                        console.log(sayhelloData);
                      }}></input>
                    <p>{savedInput}</p>

                    <button onClick={handleUserinput} className="button1" >get data</button>
                 <h1 className="">{displayname}</h1>
                </div>


            </div>
        </div>
    );
}
