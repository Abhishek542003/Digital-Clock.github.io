function Time() {
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let period = "";

    if (hour >= 12) {
        period = "PM";
    }
    else {
        period = "AM";
    }
 
    if (hour == 0) {
        hour = 12;
    }


    else {
        hour = hour - 12;
    }


 
    hour = update(hour);
    min = update(min);
    sec = update(sec);

    document.getElementById("digital-clock").innerText = hour + " : " + min + " : " + sec + " : " + period; 
    setTimeout(Time, 1000);
}
function update(t) {
  if (t < 10) {
    return "0" + t;
  } else {
    return t;
  }
}

Time();