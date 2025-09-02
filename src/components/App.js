
import React,{useState,useEffect,useRef} from "react";
import './../styles/App.css';

const App = () => {
  const [time,setTime]=useState(0);
  // const [isRunning,setisRunning]=useState(false);
  const intervalRef=useRef(null);
  const[laps,setLaps]=useState([]);
   const handleStart=()=>{
      intervalRef.current=setInterval(()=>{
        setTime(prev=>prev+1);
      },10);

   }

   const handleStop=()=>{
     intervalRef.current=clearInterval(intervalRef.current);
      //  setisRunning(false);
   }

    const handleReset=()=>{
      intervalRef.current=clearInterval(intervalRef.current);
      setTime(0);
      setLaps([]);
    //  setisRunning(false);
    }

    const handleLap=()=>{
      
      setLaps(prevLaps => [...prevLaps, time]);
    
    }
     const formatTime=(centisecs)=>{
    const minutes = Math.floor(centisecs / 6000);
    const seconds = Math.floor((centisecs % 6000) / 100);
    const centiseconds = centisecs % 100;
    return `${pad(minutes)}:${pad(seconds)}:${pad(centiseconds)}`;

     } 
  const pad = (num) => num.toString().padStart(2, '0');

  return (
    <div>
       <div className="timer-display">{formatTime(time)}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleLap}>Lap</button>
      <button onClick={handleReset}>Reset</button>
      {laps.length>0 && (
      <div>
        <h1>All Laps</h1>
        <ul>
      {laps.map((item)=>
        <li> {formatTime(item)}</li>
      )}
      </ul>
       </div>)
      }
    </div>
  )
}

export default App
