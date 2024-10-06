    function calc5(){
//variables convert kph to mps
var kilometersperhour = document.converter.kph.value
var calculated = Math.round(kilometersperhour * 1000/36)/100
//write in text box
document.converter.mps.value=calculated
}


function _timerR(callback)
{
    var timeR = 0;     //  The default time of the timer
    var mode = 1;     //    Mode: count up or count down
    var statusR = 0;    //    Status: timer is running or stoped
    var timerR_id;    //    This is used by setInterval function
    
    // this will start the timer ex. start the timer with 1 second interval timer.start(1000) 
    this.start = function(intervalR)
    {
        intervalR = (typeof(intervalR) !== 'undefined') ? intervalR : 0;
 
        if(statusR == 0)
        {
            statusR = 1;
            timerR_id = setInterval(function()
            {
                switch(mode)
                {
                    default:
                    if(timeR)
                    {
                        timeR--;
                        generateTime();
                        if(typeof(callbackR) === 'function') callbackR(timeR);
                    }
                    break;
                    
                    case 1:
                    if(timeR < 86400)
                    {
                        timeR++;
                        generateTime();
                        if(typeof(callbackR) === 'function') callbackR(timeR);
                    }
                    break;
                }
            }, intervalR);
        }
    }
    
    //  Same as the name, this will stop or pause the timer ex. timer.stop()
    this.stop =  function()
    {
        if(statusR == 1)
        {
            statusR = 0;
            clearInterval(timerR_id);
        }
    }
    
    // Reset the timer to zero or reset it to your own custom time ex. reset to zero second timer.reset(0)
    this.reset =  function(sec)
    {
        secR = (typeof(secR) !== 'undefined') ? secR : 0;
        timeR = sec;
        generateTime(timeR);
    }
    
    // Change the mode of the timer, count-up (1) or countdown (0)
    this.mode = function(tmodeR)
    {
        mode = tmodeR;
    }
    
    // This methode return the current value of the timer
    this.getTime = function()
    {
        return timeR;
    }
    
    // This methode return the current mode of the timer count-up (1) or countdown (0)
    this.getMode = function()
    {
        return mode;
    }
    
    // This methode return the status of the timer running (1) or stopped (1)
    this.getStatus
    {
        return statusR;
    }
    
    

    
    
    // This methode will render the time variable to hour:minute:second format
    function generateTime()
    {
        var meps = document.converter.mps.value;
        var meters = Math.floor(timeR * meps / 100) % 1000;
        var cm = Math.floor(timeR * meps) % 100;
                
    //    meters = (meters < 1000) ? 'Meters&nbsp'+meters : meters;
        meters = (meters < 1000) ? +meters : meters;
        cm = (cm < 1000) ? ''+cm : cm;
                
        $('div.meter span.meters').html(meters);
        $('div.meter span.cm').html(cm);

    }
}
 
// example use
var timerR;
 
$(document).ready(function(e) 
{
    timerR = new _timerR
    (
        function(timeR)
        {
            if(timeR == null)
            {
                timerR.stop();
                alert('Out The Gates!!!');
            }
        }
    );
    timerR.reset(0);
    timerR.mode(0);
});


function timerRStart() {
      var btn = document.getElementsByClassName("timerR");
      
   /*   var w = window.open('','','width=300,height=30')
      
      setTimeout(function() {w.close();}, 5000)
    */   
        if (btn.value == "Play") {
            /*w.document.write('Use this button before each click on rewind buttons ("-1/8X or -1X")');
              w.focus();  */
             btn.value = "Play";
             btn.innerHTML = "";
             timerR.start(10);
             
                }
         else {
             btn.value = "Pause";
             btn.innerHTML = "";
             timerR.stop();
              }
              
     if(timerR.stop){
      
      timerR.start(10);
      timerR.mode(1);      
     } 
       else {
            timerR.stop();
     }
}



function timeStop() {
    timerR.reset(0);
    
    
   
}



  //  close button
     var close = document.getElementsByClassName('closebtn2');
     var i;
        for (i = 0; i < close.length; i++) {
          close[i].onclick = function(){
         var div = this.parentElement;
            div.style.opacity = "4";
            div.style.Color = 'red';
            setTimeout(function(){ div.style.display = "none"; }, 1200);
     }
}

