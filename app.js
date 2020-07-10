var hour = 0;
var minute = 0;
var second = 0;
var milisecond = 0
var interval;
var scrHour = 0;
var scrSecond = 0;
var scrMinute = 0;
var scrMiliSecond = 0;
var status = "stoped"
function stopWatch() {
    milisecond++;
    if (milisecond / 100 === 1) {
        milisecond = 0;
        second++;
        if (second / 60 === 1) {
            second = 0;
            minute++;
            if (minute / 60 === 1) {
                minute = 0;
                hour++;
            }
        }
    }
    if (milisecond < 10) {
        scrMiliSecond = "0" + milisecond.toString();
    }
    else {
        scrMiliSecond = milisecond;
    }
    if (second < 10) {
        scrSecond = "0" + second.toString();
    } else {
        scrSecond = second;
    }
    if (minute < 10) {
        scrMinute = "0" + minute.toString();
    } else {
        scrMinute = minute;
    }
    if (hour < 10) {
        scrHour = "0" + hour.toString();
    } else {
        scrHour = hour;
    }
    document.getElementById('reading').innerHTML = scrHour + ':' + scrMinute + ':' + scrSecond + ':' + scrMiliSecond;
}


function startAndStop() {
    if (status === "stoped") {
        document.getElementById("startandstop").innerHTML = "Stop";
        interval = setInterval(stopWatch, 10);
        status = "started";
    }

    else {
        document.getElementById("startandstop").innerHTML = "Start";
        clearInterval(interval);
        status = "stoped";
    }
}
function reset(){
    clearInterval(interval);
    hour=0;
    minute=0;
    second=0;
    milisecond=0;
    document.getElementById('reading').innerHTML="00:00:00:00";
    document.getElementById('startandstop').innerHTML="Start";
}