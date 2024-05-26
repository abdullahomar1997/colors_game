import { useEffect, useState } from 'react';

const useTimer = (initialSeconds, status, onTimeUp) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    
    useEffect(() => {
        
        let timer;
        
        if (status === null) {
            timer = setInterval(() => {
                if (seconds === 0) {
                    onTimeUp();
                } else if (seconds > 0) {
                    setSeconds((prevSeconds) => prevSeconds - 1);
                }
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [seconds, status, onTimeUp]);
    return [seconds,setSeconds];
};

export default useTimer;