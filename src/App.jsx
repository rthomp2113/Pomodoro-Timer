import './App.css';
import Timer from './components/Timer';
import React, { useState, useEffect } from 'react';
import bellSound from './bellSound.mp3';


function App() {
  const [time, setTime] = useState(1500);
  const [timerStart, setTimerStart] = useState(false);

    useEffect(() =>{
      const intervalId = setInterval(() => {
        if(timerStart === true){
          setTime(prev => prev -1)
        }
        if(time === 0 && timerStart === true){
          setTimerStart(false);
          setTime(0);
          playAlarm();
          setTimeout(() => alert("Time is up!!!"), 500)
        }
      }, 1000)
      return ()=> clearInterval(intervalId);
    }, [time, timerStart])

  const playAlarm = () => {
    new Audio(bellSound).play();
  }

  const handlePomodoroChange = () => {
    setTime(1500);
    setTimerStart(true);
  }

  const handleShortBreak = () => {
    setTime(300);
    setTimerStart(true);
  }

  const handleLongBreak = () => {
    setTime(600);
    setTimerStart(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Timer time={time}/>
        <div>
            <button onClick={handlePomodoroChange}>Pomodoro Timer</button>
            <button onClick={handleShortBreak}>Short Break</button>
            <button onClick={handleLongBreak}>Long Break</button>
        </div>
        <div>
            <button onClick={()=> setTimerStart(false)}>Pause</button>
            <button onClick={()=> setTimerStart(true)}>Start</button>
        </div>
      </header>
    </div>
  );
}

export default App;
