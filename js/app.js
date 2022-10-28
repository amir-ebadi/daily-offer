/* ----------------countdown clock----------------- */

clock();
var myTimer;
function clock() {
    myTimer = setInterval(myClock, 1000);
    var c = 3600; //Initially set to 1 hour


    function myClock() {
        --c
        var seconds = c % 60; // Seconds that cannot be written in minutes
        var secondsInMinutes = (c - seconds) / 60; // Gives the seconds that COULD be given in minutes
        var minutes = secondsInMinutes % 60; // Minutes that cannot be written in hours
        var hours = (secondsInMinutes - minutes) / 60;
        
        hours = (hours < 10) ? "0" + hours : hours; 
        minutes = (minutes< 10) ? "0" + minutes : minutes; 
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        // Now in hours, minutes and seconds, you have the time you need.
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;
        
        // console.clear();
        // console.log(hours + ":" + minutes + ":" + seconds)
        if (c == 0) {
            clearInterval(myTimer);
        }
    }
}
/* --------//--------countDown clock-------//---------- */

/* ----------------scrollBar swiper.js----------------- */

var swiper = new Swiper('.swiper-container', {
    
    slidesPerView: 'auto',
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  /* --------//--------scrollBar swiper.js-------//---------- */