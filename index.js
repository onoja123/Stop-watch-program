const display = document.querySelector("#timeDisplay")
const start = document.querySelector("#startButton")
const pause = document.querySelector("#pauseButton")
const reset = document.querySelector("#resetButton")

let startTime = 0;
let ellapsedTime = 0;
let currentTime = 0;
let paused = true;
let invervalId;
let hrs = 0;
let min = 0;
let sec = 0;

start.addEventListener("click", ()=>{
    if(paused){
        paused = false;
        startTime = Date.now() - ellapsedTime;
        invervalId = setInterval(updateTime, 75)
    }
});

pause.addEventListener("click", () =>{
    if(!paused){
        paused = true;
        ellapsedTime = Date.now() - startTime;
        clearInterval(invervalId)
    }
});

reset.addEventListener("click", () =>{
    if(paused){
        paused = true;
     clearInterval(invervalId)   
    startTime = 0;
    ellapsedTime = 0;
    currentTime = 0;
     hrs = 0;
     min = 0;
     sec = 0;
     
     display.textContent = "00:00:00"
    }
});


function updateTime(){
    ellapsedTime = Date.now() - startTime;

    sec = Math.floor((ellapsedTime / 1000) % 60)
    min = Math.floor((ellapsedTime / (1000 * 60)) % 60)
    hrs = Math.floor((ellapsedTime / (1000 * 60 * 60)) % 60)



    sec = pad(sec)
    min = pad(min)  
    hrs = pad(hrs)

    display.textContent = '${hrs}:${min}:${sec}';

   function pad(unit){
    return(("0") + unit).length > 2 ? unit : "0";
   }

}
