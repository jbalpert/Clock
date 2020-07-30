function moveHands() {
    digitalTime = document.querySelector('#digitalTime');
    with (new Date()) {
        let sec = getSeconds();
        let min = getMinutes();
        let hour = getHours();
      h = 30 * ((hour % 12) + min / 60);
      m = 6 * min;
      s = 6 * sec;
      document.getElementById("seconds").style.cssText =
        "-webkit-transform:rotate(" + s + "deg);";
      document.getElementById("minutes").style.cssText =
        "-webkit-transform:rotate(" + m + "deg);";
      document.getElementById("hours").style.cssText =
        "-webkit-transform:rotate(" + h + "deg);";
        if(hour > 12){
            hour -= 12;
        }
        if(sec < 10){
            sec = "0" + sec;
        }
        if(min < 10){
            min = "0" + min;
        }
        if(hour < 10){
            hour = "0" + hour;
        }
        digitalTime.innerHTML = hour + " : " + min + " : " + sec;
      setTimeout(moveHands, 1000);
    }
  }
  
  window.onload = moveHands;