function onMtr(){
                                  
           var mtr1 = document.getElementById("meters");
           var mtr2 = document.getElementId("meters");
           var mod = document.getElementById("kph");

      
            if (mtr1.value == "40.95") {
              mtr1.value = "40.95";
              timerR.stop();
              timer.stop();              
              }
              
                else (mtr2.value == "41.40") {
                 mtr2.value = "41.40";
                 btn.innerHTML = '<button id="kptext"><p><h1>52k</h1></p><p><h2>Equal Rhythm</p><p>Center to Center</p><p></h2> Ball&nbsp;&nbsp;Secs&nbsp;&nbsp;Meters</p><p>&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;2.84&nbsp;&nbsp;&nbsp;41</p><p>&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;5.68&nbsp;&nbsp;&nbsp;82</p><p>&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;8.52&nbsp;&nbsp;&nbsp;123</p><p>&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;11.36&nbsp;&nbsp;164</p><p>&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;14.20&nbsp;&nbsp;205</p><p>&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;17.04&nbsp;&nbsp;246</p></button>';              
              }
              
}              



setInterval(inTime, 2000);

function inTime(){
    video_player.stop();
    videoR_player.pause();
    timerR.stop();
              timer.reset(0000);

    
}

