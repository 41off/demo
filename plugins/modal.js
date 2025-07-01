function onModal(){
            console.log("8 ended");
                       
           var btn = document.getElementById("kp");
           
           var mod = document.getElementById("kph");

      
            if (mod.value == "55") {
              mod.value = "55";
              btn.innerHTML = '<button id="kptext"><p><h1>55k</h1></p><p><h2>Equal Rhythm</p><p>CL to CL</p><p></h2> Ball&nbsp;&nbsp;Secs&nbsp;&nbsp;Meters</p><p>&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;2.68&nbsp;&nbsp;&nbsp;41</p><p>&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;5.36&nbsp;&nbsp;&nbsp;82</p><p>&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;8.04&nbsp;&nbsp;&nbsp;123</p><p>&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;10.72&nbsp;&nbsp;164</p><p>&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;13.40&nbsp;&nbsp;205</p><p>&nbsp;6B&nbsp;&nbsp;&nbsp;15.18&nbsp;&nbsp;232</p><p>&nbsp;Exit&nbsp;&nbsp;16.95&nbsp;&nbsp;259</p></button><span class="drag" title="Drag this box elsewhere as needed">&#10016;</span>';              
              }

              
                else if (mod.value == "52") {
                 mod.value = "52";
                 btn.innerHTML = '<button id="kptext"><p><h1>52k</h1></p><p><h2>Equal Rhythm</p><p>Center to Center</p><p></h2> Ball&nbsp;&nbsp;Secs&nbsp;&nbsp;Meters</p><p>&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;2.84&nbsp;&nbsp;&nbsp;41</p><p>&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;5.68&nbsp;&nbsp;&nbsp;82</p><p>&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;8.52&nbsp;&nbsp;&nbsp;123</p><p>&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;11.36&nbsp;&nbsp;164</p><p>&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;14.20&nbsp;&nbsp;205</p><p>&nbsp;6B&nbsp;&nbsp;&nbsp;16.07&nbsp;&nbsp;232</p><p>&nbsp;Exit&nbsp;&nbsp;17.93&nbsp;&nbsp;259</p></button><span class="drag" title="Drag this box elsewhere as needed">&#10016;</span>';             
              }
              
              
                else if (mod.value == "58") {
                 mod.value = "58";
                 btn.innerHTML = '<button id="kptext"><p><h1>58k</h1></p><p><h2>Equal Rhythm</p><p>Center to Center</p><p></h2> Ball&nbsp;&nbsp;Secs&nbsp;&nbsp;Meters</p><p>&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;2.54&nbsp;&nbsp;&nbsp;41</p><p>&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;5.09&nbsp;&nbsp;&nbsp;82</p><p>&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;7.63&nbsp;&nbsp;&nbsp;123</p><p>&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;10.18&nbsp;&nbsp;164</p><p>&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;12.72&nbsp;&nbsp;205</p><p>&nbsp;6B&nbsp;&nbsp;&nbsp;14.40&nbsp;&nbsp;232</p><p>&nbsp;Exit&nbsp;&nbsp;16.08&nbsp;&nbsp;259</p></button><span class="drag" title="Drag this box elsewhere as needed">&#10016;</span>';             
               }
              
                else if (mod.value == "49") {
                 mod.value = "49";
                 btn.innerHTML = '<button id="kptext"><p><h1>49k</h1></p><p><h2>Equal Rhythm</p><p>Center to Center</p><p></h2> Ball&nbsp;&nbsp;Secs&nbsp;&nbsp;Meters</p><p>&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;3.01&nbsp;&nbsp;&nbsp;41</p><p>&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;6.02&nbsp;&nbsp;&nbsp;82</p><p>&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;9.03&nbsp;&nbsp;&nbsp;123</p><p>&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;12.04&nbsp;&nbsp;164</p><p>&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;15.05&nbsp;&nbsp;205</p><p>&nbsp;6B&nbsp;&nbsp;&nbsp;17.05&nbsp;&nbsp;232</p><p>&nbsp;Exit&nbsp;&nbsp;19.03&nbsp;&nbsp;259</p></button><span class="drag" title="Drag this box elsewhere as needed">&#10016;</span>';             
                }


               
              else {
              mod.value = "";
              btn.innerHTML = '<button id="kptext"><p><h2>NO CHART FOR</p><p>THIS SPEED</p></h2></button><span class="drag" title="Drag this box elsewhere as needed">&#10016;</span>';              
              }
              
    
}


function onModal2(){
            console.log("8 ended");
                       
           var btn = document.getElementById("buoy");
           
           var mod = document.getElementById("kph");

      
            if (mod.value == "55") {
              mod.value = "55";
              btn.innerHTML = '<span class="drag" title="Drag this box elsewhere as needed">&#10016;</span><button id="buoytext"><p><h1>55k</h1></p><p><h2>Pace</p><p>Buoy to Buoy</p><p></h2>Ball&nbsp;&nbsp;Secs&nbsp;&nbsp;Meters</p><p>&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;0.00&nbsp;&nbsp;&nbsp;0</p><p>&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;2.68&nbsp;&nbsp;&nbsp;41</p><p>&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;5.36&nbsp;&nbsp;&nbsp;82</p><p>&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;8.04&nbsp;&nbsp;&nbsp;123</p><p>&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;10.72&nbsp;&nbsp;164</p><p>&nbsp;6B&nbsp;&nbsp;&nbsp;13.40&nbsp;&nbsp;205&nbsp;</p></button>';              
              }

              
                else if (mod.value == "52") {
                 mod.value = "52";
                btn.innerHTML = '<span class="drag" title="Drag this box elsewhere as needed">&#10016;</span><button id="buoytext"><p><h1>52k</h1></p><p><h2>Pace</p><p>Buoy to Buoy</p><p></h2>Ball&nbsp;&nbsp;Secs&nbsp;&nbsp;Meters</p><p>&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;0.00&nbsp;&nbsp;&nbsp;0</p><p>&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;2.84&nbsp;&nbsp;&nbsp;41</p><p>&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;5.68&nbsp;&nbsp;&nbsp;82</p><p>&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;8.52&nbsp;&nbsp;123</p><p>&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;11.36&nbsp;&nbsp;164</p><p>&nbsp;6B&nbsp;&nbsp;&nbsp;14.20&nbsp;&nbsp;205</p></button>';              
              }              
              
                else if (mod.value == "58") {
                 mod.value = "58";
                 btn.innerHTML = '<span class="drag" title="Drag this box elsewhere as needed">&#10016;</span><button id="buoytext"><p><h1>58k</h1></p><p><h2>Pace</p><p>Buoy to Buoy</p><p></h2>Ball&nbsp;&nbsp;Secs&nbsp;&nbsp;Meters</p><p>&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;0.00&nbsp;&nbsp;&nbsp;0</p><p>&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;2.54&nbsp;&nbsp;&nbsp;41</p><p>&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;5.36&nbsp;&nbsp;&nbsp;82</p><p>&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;8.04&nbsp;&nbsp;123</p><p>&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;10.72&nbsp;&nbsp;164</p><p>&nbsp;6B&nbsp;&nbsp;&nbsp;13.40&nbsp;&nbsp;205</p></button>';              
              }              
                else if (mod.value == "49") {
                 mod.value = "49";
                 btn.innerHTML = '<span class="drag" title="Drag this box elsewhere as needed">&#10016;</span><button id="buoytext"><p><h1>49k</h1></p><p><h2>Pace</p><p>Buoy to Buoy</p><p></h2>Ball&nbsp;&nbsp;Secs&nbsp;&nbsp;Meters</p><p>&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;0.00&nbsp;&nbsp;&nbsp;0</p><p>&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;3.01&nbsp;&nbsp;&nbsp;41</p><p>&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;5.36&nbsp;&nbsp;&nbsp;82</p><p>&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;8.04&nbsp;&nbsp;123</p><p>&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;10.72&nbsp;&nbsp;164</p><p>&nbsp;6B&nbsp;&nbsp;&nbsp;13.40&nbsp;&nbsp;205</p></button>';              
              }

               
              else {
              mod.value = "";
              btn.innerHTML = '<span class="drag" title="Drag this box elsewhere as needed">&#10016;</span><button id="buoytext"><p><h2>NO CHART FOR</p><p>THIS SPEED</p></h2></button>';              
              }
              
    
}
