function twoDigitDecimal(number){
    return Math.round(number*100)/100;
}

function timeToSeconds(time){
    const timeVals = time.split(":");
    let seconds = twoDigitDecimal(timeVals[0] * 60 + Number(timeVals[1]));
    return seconds;
}

function secondsToTime(seconds){
    const secVals = seconds.toString().split(".");
    let minutes = Math.floor(secVals[0]/60);
    let timeSeconds = secVals[0] % 60;
    let centiSeconds = secVals[1];
    let time = minutes + ":" + timeSeconds + "." +centiSeconds;
    return time;
}

function calculateRunTime(timeAlotted,timeRemaining){
    let runTime = twoDigitDecimal(timeAlotted - timeRemaining);
    return runTime;
}