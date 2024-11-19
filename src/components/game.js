import {useState} from 'react';
import './style.css';
export default function Game(){
    const [count,setCount]=useState(Math.ceil(Math.random() * 10));
    const [input,setInput]=useState('');
    const [attempt, setAttempt]=useState(0);
    const check=()=>{
        const userInput=parseInt(input,10);
        setAttempt(attempt+1);

        if(userInput<count){
                alert('Too low');
        }
        else if(userInput>count){
            alert('Too high');
        }
        else if(userInput===count){
            alert('Correct');
            setCount(Math.ceil(Math.random()*10));
            setInput('');
            setAttempt(0);
        }
        else{
            alert('Please entet a number');
            setAttempt(attempt);

        }
    };

    const inputChange=(e)=>{
        setInput(e.target.value);
    };

    return(
        <div className='container'>
                <div className='main'>  
                <h1>Number finding game</h1>
                <h3>Guess the number between 1 to 10</h3>
                <input type='number' placeholder='Enter number' value={input} onChange={inputChange} />
                <h4>Attempts {attempt}</h4>
                <button onClick={check}><strong>Check</strong></button>
            </div>
        </div>
    );
}