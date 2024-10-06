 function onModal(){
            console.log("8 ended");
            video_index = 8;
            video_player.setAttribute("src", video_directory[video_index]);
            
            
           var btn = document.getElementById("kp");
           var mod = document.getElementById("kph");

      
            if (mod.value == "55") {
              mod.value = "55";
              btn.innerHTML = '<button id="kptext"><p><h1>55k</h1></p><p><h2>Equal Rhythm</p><p>Center to Center</p><p></h2> Ball&nbsp;&nbsp;Secs&nbsp;&nbsp;Meters</p><p>&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;2.68&nbsp;&nbsp;&nbsp;41</p><p>&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;5.36&nbsp;&nbsp;&nbsp;82</p><p>&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;8.04&nbsp;&nbsp;&nbsp;123</p><p>&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;10.72&nbsp;&nbsp;164</p><p>&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;13.40&nbsp;&nbsp;205</p><p>&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;16.08&nbsp;&nbsp;246</p></button>';              
              timer.reset();
             
              timer.start(10);
              timer.mode(1);
              }
              
              else {
              mod.value = "";
              btn.innerHTML = '<button id="kptext">null</button>';              
              timer.stop();
              video_player.pause();
              }
 }







