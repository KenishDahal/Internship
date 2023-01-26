const main = document.getElementById("main");

const container = document.createElement("div");
container.setAttribute("class", "container");
main.appendChild(container);
// upper box
const upperBox = document.createElement("div");
upperBox.setAttribute("class", "upper-box");

const stopwatch = document.createElement("button");
stopwatch.setAttribute("class", "upper-btn");
stopwatch.setAttribute("id", "stopwatch-btn");
const clock = document.createElement("button");
clock.setAttribute("class", "upper-btn");
clock.setAttribute("id", "clock-btn");

upperBox.appendChild(stopwatch);
let stopwatchName = document.createTextNode("Stopwatch");

upperBox.appendChild(clock);
let clockName = document.createTextNode("clock");

// assign name
stopwatch.appendChild(stopwatchName);
clock.appendChild(clockName);

container.appendChild(upperBox);

// middle-box
const middleBox = document.createElement("div");
middleBox.setAttribute("class", "middle-box");

const count = document.createElement("span");
count.setAttribute("id", "counting");
const label3 = document.createElement("label");
let label3Name = document.createTextNode(":");
const sec = document.createElement("span");
sec.setAttribute("id", "seconds");
const label1 = document.createElement("label");
let label1Name = document.createTextNode(":");
const min = document.createElement("span");
min.setAttribute("id", "minutes");
const label2 = document.createElement("label");
let label2Name = document.createTextNode(":");
const hours = document.createElement("span");
hours.setAttribute("id", "hourly");

let hoursName = document.createTextNode("00");
let minutesName = document.createTextNode("00");
let secName = document.createTextNode("00");
let countName = document.createTextNode("00");

count.appendChild(countName);
sec.appendChild(secName);
min.appendChild(minutesName);
hours.appendChild(hoursName);
label1.appendChild(label1Name);
label2.appendChild(label2Name);
label3.appendChild(label3Name);

middleBox.appendChild(hours);
middleBox.appendChild(label1);
middleBox.appendChild(min);
middleBox.appendChild(label2);
middleBox.appendChild(sec);
middleBox.appendChild(label3);
middleBox.appendChild(count);

container.appendChild(middleBox);

// lower box
const lowerBox = document.createElement("div");
lowerBox.setAttribute("class", "lower-box");

const start = document.createElement("button");
start.setAttribute("class", "lower-btn");
start.setAttribute("id", "start-btn");
let startName = document.createTextNode("start");

const stop = document.createElement("button");
stop.setAttribute("class", "lower-btn");
stop.setAttribute("id", "stop-btn");
let stopName = document.createTextNode("stop");

const reset = document.createElement("button");
reset.setAttribute("class", "lower-btn");
reset.setAttribute("id", "reset-btn");
let resetName = document.createTextNode("reset");

// assign name
start.appendChild(startName);
stop.appendChild(stopName);
reset.appendChild(resetName);

lowerBox.appendChild(start);
lowerBox.appendChild(stop);
lowerBox.appendChild(reset);

container.appendChild(lowerBox);

//  js

var hourly = 0;
var minutes = 0;
var seconds = 0;
var counting = 0;

var timer = false;

var appendSecs = document.getElementById("seconds");
var appendMins = document.getElementById("minutes");
var appendHours = document.getElementById("hourly");
var appendCount = document.getElementById("counting");

var buttonStopwatch = document.getElementById("stopwatch-btn");
var buttonClock = document.getElementById("clock-btn");
const buttonStart = document.getElementById("start-btn");
const buttonStop = document.getElementById("stop-btn");
const buttonReset = document.getElementById("reset-btn");

// click stopwach start button
buttonStart.addEventListener("click", function () {
  timer = true;
  stopingwatch();
});
// click stopwach stop button
buttonStop.addEventListener("click", function () {
  timer = false;
});
// click stopwach reset button
buttonReset.addEventListener("click", function () {
  timer = false;

  hourly = 0;
  minutes = 0;
  seconds = 0;
  counting = 0;

  document.getElementById("counting").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("hourly").innerHTML = "00";
});

// stopwatch function
function stopingwatch() {
  if (timer == true) {
    counting = counting + 1;

    if (counting == 100) {
      seconds++;
      counting = 0;
    }
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes == 60) {
      hourly++;
      minutes = 0;
      seconds = 0;
    }

    // In case of one digit
    var hrString = hourly;
    var minString = minutes;
    var secString = seconds;
    var countString = counting;

    if (hourly < 10) {
      hrString = "0" + hrString;
    }
    if (minutes < 10) {
      minString = "0" + minString;
    }
    if (seconds < 10) {
      secString = "0" + secString;
    }
    if (counting < 10) {
      countString = "0" + countString;
    }

    document.getElementById("hourly").innerHTML = hrString;
    document.getElementById("minutes").innerHTML = minString;
    document.getElementById("seconds").innerHTML = secString;
    document.getElementById("counting").innerHTML = countString;

    setTimeout("stopingwatch()", 10);
  }
}

buttonStopwatch.addEventListener("click", function () {
  // if (buttonClock != disabled){
  //   displayTime();
  // }
  timer = false;

  hourly = 0;
  minutes = 0;
  seconds = 0;
  counting = 0;

  document.getElementById("counting").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("hourly").innerHTML = "00";
});

buttonClock.addEventListener("click", function () {
  // if (buttonClock != disabled){
  //   displayTime();
  // }
  // timer = false;
  displayTime();
  // clearInterval

  // document.getElementById("counting").innerHTML = "00";
  // document.getElementById("seconds").innerHTML = "00";
  // document.getElementById("minutes").innerHTML = "00";
  // document.getElementById("hourly").innerHTML = "00";
});

function displayTime() {
  var dateTime = new Date();
  var hourly = dateTime.getHours();
  var minutes = dateTime.getMinutes();
  var seconds = dateTime.getSeconds();
  var counting = dateTime.getMilliseconds();

  document.getElementById("hourly").innerHTML = hourly;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("counting").innerHTML = counting;
}

let x = setInterval(displayTime, 10);

document.getElementById("clock-btn").disabled = true;

buttonClock.addEventListener("click", function () {
  x = setInterval(displayTime, 10);
  document.getElementById("start-btn").disabled = true;
  document.getElementById("stop-btn").disabled = true;
  document.getElementById("reset-btn").disabled = true;
  document.getElementById("clock-btn").disabled = true;
  document.getElementById("stopwatch-btn").disabled = false;
});

buttonStopwatch.addEventListener("click", function () {
  clearInterval(x);
  document.getElementById("start-btn").disabled = false;
  document.getElementById("stop-btn").disabled = false;
  document.getElementById("reset-btn").disabled = false;
  document.getElementById("stopwatch-btn").disabled = false;
  document.getElementById("clock-btn").disabled = false;
  document.getElementById("stopwatch-btn").disabled = true;
});
