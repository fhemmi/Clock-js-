// let timerObj = {
//   minutes: 0,
//   seconds: 0,
//   timerid : 0
// }
//
// function SoundAlarm(){
//   let amount = 3;
//   let audio = new Audio("Old-alarm-clock-sound.mp3");
//
// function playSound(){
//
//   audio.pause();
//   audio.currentTime = 0;
//   audio.play();
//  }
//
// for (var i = 0; i < amount; i++) {
//   setTimeout(playSound, 1200 * i);
//
//   }
// }
//
//
// function UpdateValue(key, value){
// if (value < 0) {
//   value = 0;
// }
//
//
//
//   if (key === "seconds") {
//     if(value < 10){
//       value = "0" + value;
//       console.log("postivie num only");
//     }
//
//     if (value > 59) {
//       value = 59;
//       console.log('we good');
//     }
//   }
//
//
//   $("#" + key).html(value || 0);
//     timerObj[key] = value;
//
//
//     console.log("Mins", timerObj.minutes);
// console.log("Secs", timerObj.seconds);
// }




let  minuteInput = document.getElementById('minutes-input');
let  secondsInput = document.getElementById('seconds-input');
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");






let timerObj = {
  minutes: 0,
  seconds: 0,
  timerid : 0
}

function SoundAlarm(){
  let amount = 3;
  let audio = new Audio("Old-alarm-clock-sound.mp3");

function playSound(){

  audio.pause();
  audio.currentTime = 0;
  audio.play();
 }

for (var i = 0; i < amount; i++) {
  setTimeout(playSound, 1200 * i);

  }
}



function UpdateValue(key, value){
if (value < 0) {
  value = 0;
}



  if (key === "seconds") {
    if(value < 10){
      value = "0" + value;
      console.log("postivie num only");
    }

    if (value > 59) {
      value = 59;
      console.log('we good');
    }
  }
    
  $("#" + key).html(value || 0);
  timerObj[key] = value;

console.log("Mins", timerObj.minutes);
console.log("Secs", timerObj.seconds);
    
    
}


(function detectChanges(key, value) {
  console.log("detetc changes");
 let input = "#" + key + "-input";

 $(input).change(function() {
   UpdateValue(key, $(input).val());
   console.log("detetc changes");
 });

 $(input).keyup(function() {
   UpdateValue(key, $(input).val());
   console.log("detetc changes");
 });

return arguments.callee;
})("minutes")("seconds");



// function UpdateValue(key, value){



     
//     minuteInput.addEventListener("input", function(){
//     let valuee = minuteInput.value;
//     minutes.innerHTML = valuee;

        
//         if(minuteInput.value < 0 ){
//             minuteInput.value = 0
//         }if(minutes.innerHTML < 0 ){
//             minutes.innerHTML = 0;
//         }else
//             console.log("hdjhdjhaj");

    

// })

    
   
// secondsInput.addEventListener("input", function(){
//     let valuee = secondsInput.value;
//     seconds.innerHTML = valuee;

       
//         if(secondsInput.value < 0 ){
//             secondsInput.value = 0
//         }if(seconds.innerHTML < 0 ){
//             seconds.innerHTML = 0;
//         }else
//             console.log("hdjhdfwd");

// })
    
    
 
// }



function startTimer(){
//    valiadte();
        timerObj.timerId = setInterval(function() {
              timerObj.seconds--;
              if(timerObj.seconds < 0){
                if(timerObj.minutes == 0) {
                 console.log("jfowfokokfw")

                  SoundAlarm();
                //  return stopTimer();
                }

                timerObj.seconds = 59;
                timerObj.minutes--;
               }
         UpdateValue("minutes",  timerObj.minutes);
         UpdateValue("seconds",  timerObj.seconds);

            }, 1000);

    console.log("het")
//    SoundAlarm();
}





