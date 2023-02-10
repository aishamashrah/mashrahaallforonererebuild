import { OddOrEven } from '../services/DataService';
import { Row, Col, Button} from 'react-bootstrap'
import { useState } from "react";


export default function OddorEvencomponent() {
   
    const [inputfield1, setInputfield1] = useState('');
    const [Result, setResult] = useState(' ');
    return (
      <div className='HeroImg'>
        <div className="bgimage text-center">
            <h1 className="title text">OddOrEven</h1>
            <div className="position">
                <p className="text-white text-center">Enter Your your Number</p>
                
                <input onChange={(e) => {setInputfield1(e.target.value)}}></input>
                <p>{inputfield1}</p>
                
                <Button onClick={async () => {
                    let res = await OddOrEven(inputfield1);
                    setResult(res)
                }} variant="primary">Click Answer</Button>{" "}


                <p>{Result}</p>
            </div>
        </div>
        </div>
    );
}



