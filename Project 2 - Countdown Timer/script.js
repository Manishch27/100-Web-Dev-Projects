let newYears = "Jan 1 2024";

let dayE1  = document.querySelector('.days').firstElementChild;
let hourE1  = document.querySelector('.hour').firstElementChild;
let minuteE1  = document.querySelector('.minutes').firstElementChild;
let secondsE1  = document.querySelector('.seconds').firstElementChild;

let countdown = ()=>{

    let newYearsDate = new Date(newYears);
    let currentDate = new Date();
    return newYearsDate - currentDate;
}

setInterval(()=>{
    let totalSeconds = countdown()/1000;
    // console.log(totalSeconds);
    let day = Math.floor(totalSeconds/3600/24);
    let hours = Math.floor(totalSeconds/3600)%24;
    let minute = Math.floor(totalSeconds/60)%60;
    let seconds = Math.floor(totalSeconds%60);

    let totalTime = [day, hours, minute, seconds];

    dayE1.textContent = formatTime(day);
    hourE1.textContent = formatTime(hours);
    minuteE1.textContent = formatTime(minute);
    secondsE1.textContent = formatTime(seconds);

    function formatTime(time){
        return time<10? `0 ${time}` : time;
    }

},1000);