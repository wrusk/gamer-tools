function twoDigitDecimal(number){
    return Math.round(number*100)/100;
}

function timeToSeconds(time){
    const timeVals = time.split(":");
    let seconds = twoDigitDecimal(timeVals[0] * 60 + Number(timeVals[1])).toFixed(2);
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

function calculateLastDigit(time,validDigits){
    let timeStr = time.toString();
    let lastDigit = timeStr.slice(-1);
    let digitInvalid = true;
    while (digitInvalid){
        if (validDigits.indexOf(lastDigit) != -1){
            digitInvalid = false;
        } else {
            lastDigit--;
        }
    }
    let fixedTime = timeStr.replace(/.$/,lastDigit);
    return fixedTime;
}

function calculateRunTime(timeAlotted,timeRemaining,validCentiseconds){
    let runTime = twoDigitDecimal(timeAlotted - timeRemaining);
    let lastDigit = runTime.toString().slice(-1);
    console.log ("last digit:"+ lastDigit);
    console.log(validCentiseconds);
    if (lastDigit === "0"){
        //special case for 0
        runTime -= .02
    } else {
        let lastDigitIndex = validCentiseconds.indexOf(lastDigit);
        let requiredDecrement = (Number(validCentiseconds[lastDigitIndex]) - Number(validCentiseconds[lastDigitIndex - 1]))/100;
        runTime -= requiredDecrement;
    }
    return runTime;
}