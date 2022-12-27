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
    let time = minutes + ":" + String(timeSeconds).padStart(2,'0') + "." +centiSeconds.padEnd(2,'0');
    return time;
}

function calculateLastDigit(time,validDigits){
    let timeStr = time.toString();
    let lastDigit = timeStr.slice(-1);
    console.log("checking last digit " + lastDigit);
    let digitInvalid = true;
    while (digitInvalid){
        if (validDigits.indexOf(lastDigit.toString()) != -1){
            digitInvalid = false;
        } else {
            lastDigit--;
            console.log("rechecking with "+lastDigit);
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
        //special case for 0 as last digit will not be only digit affected
        runTime -= .02;
        console.log("last digit 0");
    } else {
        console.log("Need to decrement "+ runTime);
        let tempTime = calculateLastDigit(runTime,validCentiseconds);
        runTime = calculateLastDigit(twoDigitDecimal(tempTime - 0.01),validCentiseconds);
    }
    return runTime;
}