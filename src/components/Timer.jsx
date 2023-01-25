import React from 'react';

const Timer = (props) => {
    const { time } = props;
    const minutes = Math.floor(time/60);
    const seconds = time - minutes * 60;
    const showZero = seconds < 10 && 0; //shows zero when seconds are less than zero
    
    return (
        <div>
            <h1>Pomodoro Timer</h1>
            <h1>{minutes}:{showZero}{seconds}</h1>
        </div>
        
    )
}

export default Timer;