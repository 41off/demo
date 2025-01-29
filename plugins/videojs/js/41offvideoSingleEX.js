 
 
 function onloadL(){
            console.log("body loaded");
            video_player = document.getElementsByTagName("video")[0];
            video_player.setAttribute("src", video_directory[video_index]);
            
            video_player.play();
            video.playbackRate = 0.5;
            
            video_player.volume = 0.2;
            video_player.currentSrc();
            video_player.currentTime();
               
                      
      timer.start(40);
      timer.mode(1);
    }
       
       
 
 
  function multiStartB() {
      var btn = document.getElementById("M5");
      
        if (btn.value == "Play Both") {
            /*w.document.write('Use this button before each click on rewind buttons ("-1/8X or -1X")');
              w.focus();  */
             btn.value = "Pause";
             btn.innerHTML = "Play Both";
             video_player.play();
             videoR_player.play();
                }
         else {
             btn.value = "Play Both";
             btn.innerHTML = "Pause";
             video_player.pause();
             videoR_player.pause();
              }
              
     if(video_player.paused){
      
      timer.start(10);
      timer.mode(1);
      timerR.start(10);
      timerR.mode(1);        
      video_player.play();
      video.playbackRate = 1.0;
      videoR_player.play();
      videoR.playbackRate = 1.0;

     } 
       else {
            timer.stop();
            timerR.stop();
            video_player.pause();
            videoR_player.pause();
            
            clearInterval(rewind);
         }
         
      /*  right player */   
      

 }
 
 
  function multiResetB() {
    timer.reset(0000);
    timerR.reset(0000)
   }
   
   
   function multiFwdB() {
    var btn = document.getElementById("M4x");
        if (btn.value == "+4X") {
             btn.value = "Pause";
             btn.innerHTML = "+4X";
             video_player.play();
             videoR_player.play();
                }
         else {
             btn.value = "+4X";
             btn.innerHTML = "Pause";
             video_player.pause();
             videoR_player.pause();
                }
     if(video_player.paused){
      timer.start(2);
      timer.mode(1);
      timerR.start(2);
      timerR.mode(1);
      video_player.play();
      video.playbackRate = 4.0;
      videoR_player.play();
      videoR.playbackRate = 4.0;
      } 
       else {
            timer.stop();
            timerR.stop();
            video_player.pause();
            videoR_player.pause();
         }   
  }
  
   
   function multiSupFwdB() {
    var btn = document.getElementById("M16x");
        if (btn.value == "+16X") {
             btn.value = "Pause";
             btn.innerHTML = "+16X";
             video_player.play();
             videoR_player.play();
                }
         else {
             btn.value = "+16X";
             btn.innerHTML = "Pause";
             video_player.pause();
             videoR_player.pause();
                }
     if(video_player.paused){
      timer.start(0.3125);
      timer.mode(1);
      timerR.start(0.3125);
      timerR.mode(1);

      video_player.play();
      video.playbackRate = 16.0;
      videoR_player.play();
      videoR.playbackRate = 16.0;

      } 
       else {
            timer.stop();
            timerR.stop();
            video_player.pause();
            videoR_player.pause();
         }   
   }
  
  
   function multiSlowB() {
      var btn = document.getElementById("M1_8");
        if (btn.value == "+1/8X") {
             btn.value = "Pause";
             btn.innerHTML = "+1/8X";
             video_player.play();
             videoR_player.play();
                }
         else {
             btn.value = "+1/8X";
             btn.innerHTML = "Pause";
             video_player.pause();
             videoR_player.pause();
                }
     if(video_player.paused){
      timer.start(80);
      timer.mode(1);
      timerR.start(80);
      timerR.mode(1);
      video_player.play();
      video.playbackRate = .125;
      videoR_player.play();
      videoR.playbackRate = .125;
      } 
       else {
            timer.stop();
            timerR.stop();
            video_player.pause();
            videoR_player.pause();
         }
 }
 
 
   function multiSuperSlowB() {
      var btn = document.getElementById("M1_16");
        if (btn.value == "+1/16X") {
             btn.value = "Pause";
             btn.innerHTML = "+1/16X";
             video_player.play();
             videoR_player.play();
                }
         else {
             btn.value = "+1/16X";
             btn.innerHTML = "Pause";
             video_player.pause();
             videoR_player.pause();
                }
     if(video_player.paused){
      timer.start(160);
      timer.mode(1);
      timerR.start(160);
      timerR.mode(1);

      video_player.play();
      video.playbackRate = .0625;
      videoR_player.play();
      videoR.playbackRate = .0625;

      } 
       else {
            timer.stop();
            timerR.stop();
            video_player.pause();
            videoR_player.pause();
         }
 }
 
 
 function on0B(){
            console.log("0 ended");
            video_index = 0;
            videoR_index = 0;
            video_player.setAttribute("src", video_directory[video_index]);
            videoR_player.setAttribute("src", videoR_directory[videoR_index]);
                       
        var btn = document.getElementById("modal");
      
            if (btn.value == "Latest") {
              btn.value = "Latest";
              btn.innerHTML = '<button id="modtext">Latest</button>';              
              timer.reset();
              video_player.play();
              videoR_player.play();
              timer.start(10);
              timer.mode(1);
              timerR.start(10);
              timerR.mode(1);

              }
            else {
              btn.value = "Latest";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              timerR.stop();
              video_player.pause();
              videoR_player.pause();
              }
          }
 
 
 
 // everything above is for "both" players //
 
 
 
 
 
 function ClickStartL() {
    timer.stop();
    timer.mode(1);
    timerR.stop();
    timerR.mode(1);
    video_player.play();
    video.playbackRate = 1.0; 
   }
   
  function ClickPauseL(){
    timer.start(10);
    timerR.start(10)
    video_player.pause();
   }
  function onPauseL(){
    timer.stop();
    timerR.stop();
    video_player.pause();
   }
  
  function on1XL(){
    timer.stop();
    timerR.stop();
    video_player.pause();
    video.pause();
    clearInterval(rewind);
    video.playbackRate = 1.0;
   }
 
  function onFastFwdL(){
    video.playbackRate = 4.0;
    video_player.play();
   }
   
  function onSupFwdL(){
    video.playbackRate = 16.0;
    video_player.play();
   }
   
  function onSlowL(){
    video.playbackRate = 0.125;
    video_player.play();
   }
   
  function onSuperSlowL(){
    video.playbackRate = 0.0625;
    video_player.play();
   }
   
  function multiStopL() {
    timer.stop();
    timer.reset(0000);
    timerR.stop();
    timerR.reset(0000);
    video_player.pause();
    clearInterval(rewind);
   }
 
 
  function multiStartL() {
      var btn = document.getElementById("L5");
      
   /*   var w = window.open('','','width=300,height=30')
      
      setTimeout(function() {w.close();}, 5000)
    */   
        if (btn.value == "Play Left") {
            /*w.document.write('Use this button before each click on rewind buttons ("-1/8X or -1X")');
              w.focus();  */
             btn.value = "Pause";
             btn.innerHTML = "Play";
             video_player.play();
             
                }
         else {
             btn.value = "Play Left";
             btn.innerHTML = "Pause";
             video_player.pause();
              }
              
     if(video_player.paused){
      
      timer.start(30);
      timer.mode(1);
      timerR.start(30);
      timerR.mode(1);      
      video_player.play();
      video.playbackRate = 0.333;
     } 
       else {
            timer.stop();
            timerR.stop();
            video_player.pause();
            clearInterval(rewind);
         }
 }
 
 
  function multiResetL() {
    timer.reset(0000);
    timerR.reset(0000)
   }
   
   function meterReset() {
    timerR.reset(0000)
   }

   function multiFwdL() {
    var btn = document.getElementById("L4x");
        if (btn.value == "+4X") {
             btn.value = "Pause";
             btn.innerHTML = "+4X";
             video_player.play();
                }
         else {
             btn.value = "+4X";
             btn.innerHTML = "Pause";
             video_player.pause();
                }
     if(video_player.paused){
      timer.start(2.5);
      timer.mode(1);
      timerR.start(2.5);
      timerR.mode(1);
      video_player.play();
      video.playbackRate = 4.0;
      } 
       else {
            timer.stop();
            timerR.stop();
            video_player.pause();
         }   
  }
   
   function multiSupFwdL() {
    var btn = document.getElementById("L16x");
        if (btn.value == "+1X") {
             btn.value = "Pause";
             btn.innerHTML = "+1X";
             video_player.play();
                }
         else {
             btn.value = "+1X";
             btn.innerHTML = "Pause";
             video_player.pause();
                }
     if(video_player.paused){
      timer.start(10);
      timer.mode(1);
      timerR.start(10);
      timerR.mode(1);
      video_player.play();
      video.playbackRate = 1.0;
      } 
       else {
            timer.stop();
            timerR.stop();
            video_player.pause();
         }   
   }
  
   function multiSlowL() {
      var btn = document.getElementById("L1_8");
        if (btn.value == "+1/8X") {
             btn.value = "Pause";
             btn.innerHTML = "+1/8X";
             video_player.play();
                }
         else {
             btn.value = "+1/8X";
             btn.innerHTML = "Pause";
             video_player.pause();
                }
     if(video_player.paused){
      timer.start(80);
      timer.mode(1);
      timerR.start(80);
      timerR.mode(1);
      video_player.play();
      video.playbackRate = .125;
      } 
       else {
            timer.stop();
            timerR.stop();
            video_player.pause();
         }
 }
   function multiSuperSlowL() {
      var btn = document.getElementById("L1_16");
        if (btn.value == "+1/16X") {
             btn.value = "Pause";
             btn.innerHTML = "+1/16X";
             video_player.play();
                }
         else {
             btn.value = "+1/16X";
             btn.innerHTML = "Pause";
             video_player.pause();
                }
     if(video_player.paused){
      timer.start(160);
      timer.mode(1);
      timerR.start(160);
      timerR.mode(1);
      video_player.play();
      video.playbackRate = .0625;
      } 
       else {
            timer.stop();
            timerR.stop();
            video_player.pause();
         }
 }
 
 
  function singleFrame() {
      var btn = document.getElementById("L1_Fr");
       if (btn.value == "+Frame") {
             btn.value = "Next";
             btn.innerHTML = "+Frame";
             video_player.play();             
                }
         else {
             btn.value = "+Frame";
             btn.innerHTML = "Next";
             video_player.pause();
                }
     if(video_player.paused){
      timer.start(160);
      timer.mode(1);
      timerR.start(160);
      timerR.mode(1);
      video_player.play();
      video.playbackRate = .0625;
      setTimeout(singleFrame, 200); 
         } 
       else {
            timer.stop();
            timerR.stop();
            video_player.pause();
         }
      
 }
 
 function backFrame() {
      var btn = document.getElementById("L1_Fr");
       if (btn.value == "-Frame") {
             btn.value = "Prior";
             btn.innerHTML = "-Frame";
             video_player.play();             
                }
         else {
             btn.value = "-Frame";
             btn.innerHTML = "Prior";
             video_player.pause();
                }
     if(video_player.paused){
      timer.start(160);
      timer.mode(0);
      timerR.start(160);
      timerR.mode(0);
      video_player.play();
      video.playbackRate = .0625;
      setTimeout(singleFrame, 200); 
         } 
       else {
            timer.stop();
            timerR.stop();
            video_player.pause();
         }
      
 }


$("#negativeF").click(function() { // button function for rewind
    video_player.pause();
      
     rewind = setInterval(function() {
              
       if (video_player.currentTime == 0) {
          clearInterval(rewind);
          video_player.pause();
          
          
          }
          
       else{
           timer.start(80);
           timer.mode(0);
           timerR.start(80);
           timerR.mode(0);
           video_player.currentTime += -.05;
             }
                },400);
           
         
     setTimeout(function() {
              
               clearInterval(rewind);
               timer.stop();
               timerR.stop();
               }, 500);
});


  
   function multiRevL() {
    timer.start(80);
    timer.mode(0);
    timerR.start(80);
    timerR.mode(0);    
   }

  
        var video_directory = ['https://www.appsheet.com/template/gettablefileurl?appName=PGSkiApp-183211928&tableName=Settings&fileName=Settings_Files_%2F10-07-2024%2017-32-55.Media.213632.mp4',
                  
                              
        
                               'https://www.dropbox.com/s/nxuj60vpu090tuv/PG-10-25-2022-Set2.mp4?raw=1',
                               'https://www.dropbox.com/s/lis2lyb2s961mwk/WTPG-10-14-2022.webm?raw=1',                               
                               'https://www.dropbox.com/s/xn69t7lj32ph6it/XXXPG-09-23-2022b.webm?raw=1',
                               
                               'https://www.dropbox.com/s/no4h1vvlfks9pn5/PG-09-23-2022b.mp4?raw=1',
                               'https://www.dropbox.com/s/a38us4ahbw61yj5/PG-09-15-2022-SSF-14-13.mp4?raw=1',                               
                               'https://www.dropbox.com/s/p25u740ofe98nby/PG-09-15-2022-Set2.mp4?raw=1',
                               
                               'https://www.dropbox.com/s/7m05oypw9uczkfx/XPG-09-06-2022-Set1.mp4?raw=1',
                               'https://www.dropbox.com/s/x4sqygujfaw0qyg/PG-07-30-2022.mp4?raw=1',                               
                               'https://www.dropbox.com/s/scpgpbywo92s4o6/08-07-2022.mp4?raw=1',
                               
                               'https://www.dropbox.com/s/q90iobw0srxwk4m/08-12-2022.mp4?raw=1',
                               'https://www.dropbox.com/s/n4ysbq3h89iwi17/08-13-2022.mp4?raw=1',                               
                               'https://www.dropbox.com/s/dtdon62ewz33ivx/12-10-2022-h265-8kb.mp4?raw=1',
                               
                               'https://www.dropbox.com/s/n15c7de6wttbyl8/01-03-2023.mp4?raw=1',
                               'https://www.dropbox.com/s/9x7capb3c48kq24/Pg-vs-DM-13m-52k-v10.mp4?raw=1',
                               'https://www.dropbox.com/s/ak61l0mhvdpuz2m/07-04-2023.mp4?raw=1',
                               
                              ];                      
 
  
        var video_index = 0;
        var video_player = null;
        var video =  document.getElementById("video");
        
                                
      
        
       function onvideoEndedL(){
            console.log("video ended");
            if(video_index < video_directory.length - 1){
                video_index++;
            }
            else{
                video_index = 1;
            }
            video_player.setAttribute("src", video_directory[video_index]);
            video_player.stop();
        }
        
       function onvideoNextL(){
            console.log("video next");
            if(video_index < video_directory.length - 1){
                video_index++;
            }
            else{
                video_index = 1;
            }
            
            video_player.setAttribute("src", video_directory[video_index]);
            video_player.play();
        }
        
       function onvideoBackL(){
            console.log("video back");
            if(video_index < video_directory.length - 1){
                video_index--;
            }
            else{
                video_index--;
            }
            video_player = document.getElementById("video");
            video_player.setAttribute("src", video_directory[video_index]);
            video_player.play();
        }
        
   //rewind below  
$("#negativeL").click(function() { // button function for rewind
    video_player.pause();
     
     rewind = setInterval(function() {
               
       if (video_player.currentTime == 0) {
          clearInterval(rewind);
          video_player.pause();
          }
          
       else{
           timer.start(10);
           timer.mode(0);
           video_player.currentTime += -.3;
             }
                },300);
        
      setTimeout(function() {
        alert('20 second rewind loop DONE!. Click desired player button to resume, after "OK", to restart');
        clearInterval(rewind);
        timer.stop();
        }, 20000);
});
$("#negative2L").click(function() { // button function for rewind
    video_player.pause();
      
     rewind = setInterval(function() {
              
       if (video_player.currentTime == 0) {
          clearInterval(rewind);
          video_player.pause();
          
          
          }
          
       else{
           timer.start(80);
           timer.mode(0);
           timerR.start(80);
           timerR.mode(0);
           video_player.currentTime += -.05;
             }
                },400);
           
         
     setTimeout(function() {
               alert('2.5 second rewind loop DONE!. Click desired player button to resume, after "OK", to restart');
               clearInterval(rewind);
               timer.stop();
               timerR.stop();
               }, 20500);
});
$("#negative3L").click(function() { // button function for rewind
    video_player.pause();
      
    rewind = setInterval(function() {
               
       if (video_player.currentTime == 0) {
          clearInterval(rewind);
          video_player.pause();
          }
       else{
           timer.start(2.5);
           timer.mode(0);
           timerR.start(2.5);
           timerR.mode(0);
           video_player.currentTime += -1;
             }
                },250);
           
      setTimeout(function() {
        alert('20 second rewind loop DONE!. Click desired player button to resume, after "OK", to restart');
        clearInterval(rewind);
        timer.stop();
        timerR.stop();
        }, 8000);
});
/*  
$("#negative3").click(function() { // button function for rewind
       intervalRewind = setInterval(function(){
       timer.start(2.5);
       timer.mode(0);
       video.playbackRate = 4.0;
       if(video.currentTime == 0){
          clearInterval(intervalRewind);
       }
       else{
           video.currentTime += -.0083;
       }
                },10);
});
*/  

         function on0L(){
            console.log("0 ended");
            video_index = 0;
            video_player.setAttribute("src", video_directory[video_index]);
        }
            
         function on1L(){
            console.log("1 ended");
            video_index = 1;
            video_player.setAttribute("src", video_directory[video_index]);
            video.playbackRate = 0.25;
                                
        }
        
         function on2L(){
            console.log("2 ended");
            video_index = 2;
            video_player.setAttribute("src", video_directory[video_index]);
        }
                      
          function on3L(){
            console.log("3 ended");
            video_index = 3;
            video_player.setAttribute("src", video_directory[video_index]);
        }
        
          function on4L(){
            console.log("4 ended");
            video_index = 4;
            video_player.setAttribute("src", video_directory[video_index]);
         
        }
           
         function on5L(){
            console.log("5 ended");
            video_index = 5;
            video_player.setAttribute("src", video_directory[video_index]);
      
        }
        
         function on6L(){
            console.log("6 ended");
            video_index = 6;
            video_player.setAttribute("src", video_directory[video_index]);
        
        }
         
          function on7L(){
            console.log("7 ended");
            video_index = 7;
            video_player.setAttribute("src", video_directory[video_index]);
       
        }
        
          function on8L(){
            console.log("8 ended");
            video_index = 8;
            video_player.setAttribute("src", video_directory[video_index]);
        
        }
        
          function on9L(){
           console.log("9 ended");
           video_index = 9;
           video_player.setAttribute("src", video_directory[video_index]);
         
       }
       
          function on10L(){
           console.log("10 ended");
           video_index = 10;
           video_player.setAttribute("src", video_directory[video_index]);
          
       }
       
          function on11L(){
           console.log("11 ended");
           video_index = 11;
           video_player.setAttribute("src", video_directory[video_index]);
        
       }
        
        
        function on12L(){
           console.log("12 ended");
           video_index = 12;
           video_player.setAttribute("src", video_directory[video_index]);
       }

        function on13L(){
           console.log("13 ended");
           video_index = 13;
           video_player.setAttribute("src", video_directory[video_index]);
       }
       
       function on14L(){
           console.log("14 ended");
           video_index = 14;
           video_player.setAttribute("src", video_directory[video_index]);
       }
       
        function on15L(){
           console.log("15 ended");
           video_index = 15;
           video_player.setAttribute("src", video_directory[video_index]);
       }


        function on16L(){
           console.log("16 ended");
           video_index = 16;
           video_player.setAttribute("src", video_directory[video_index]);
       }



        
          function on121L(){
            console.log("120 ended");
             if(video_index = 120){
                video_index++;
           }
            else{
                video_index = 0;
            }
            video_player = document.getElementById("video");
            video_player.setAttribute("src", video_directory[video_index]);
           
           
           var btn = document.getElementById("modal");
      
            if (btn.value == "V12.mp4") {
              btn.value = "Play";
              btn.innerHTML = '<button id="modtext">V12.mp4</button>';              
              timer.reset();
             
              timer.start(10);
              timer.mode(1);
              }
            else {
              btn.value = "V12.mp4";
              btn.innerHTML = '<button id="modtext">Click Twice&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#8665;</button>';
              timer.stop();
              video_player.pause();
              }
        }
        




/*
var video =  document.getElementById('video');

   frameTime = 1 / 240;      
            
    //assume 60 fps

window.addEventListener('keypress', function (evt) {
    if (video.paused) { //or you can force it to pause here
        if (evt.keyCode === 37) { //left arrow
            //one frame back
            video.currentTime = Math.max(0, video.currentTime - frameTime);
        } else if (evt.keyCode === 39) { //right arrow
            //one frame forward
            //Don't go past the end, otherwise you may get an error
            video.currentTime = Math.min(video.duration, video.currentTime + frameTime);
        }
    }        
})

*/









