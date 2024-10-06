function onModal(){
            console.log("8 ended");
                       
           var btn = document.getElementById("kp");
           var mod = document.getElementById("kph");

      
            if (mod.value == "55") {
              mod.value = "55";
              btn.innerHTML = '<button id="kptext"><p><h1>55k</h1></p><p><h2>Equal Rhythm</p><p>Center to Center</p><p></h2> Ball&nbsp;&nbsp;Secs&nbsp;&nbsp;Meters</p><p>&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;2.68&nbsp;&nbsp;&nbsp;41</p><p>&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;5.36&nbsp;&nbsp;&nbsp;82</p><p>&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;8.04&nbsp;&nbsp;&nbsp;123</p><p>&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;10.72&nbsp;&nbsp;164</p><p>&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;13.40&nbsp;&nbsp;205</p><p>&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;16.08&nbsp;&nbsp;246</p></button>';              
              }
              
                else if (mod.value == "52") {
                 mod.value = "52";
                 btn.innerHTML = '<button id="kptext"><p><h1>52k</h1></p><p><h2>Equal Rhythm</p><p>Center to Center</p><p></h2> Ball&nbsp;&nbsp;Secs&nbsp;&nbsp;Meters</p><p>&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;2.84&nbsp;&nbsp;&nbsp;41</p><p>&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;5.68&nbsp;&nbsp;&nbsp;82</p><p>&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;8.52&nbsp;&nbsp;&nbsp;123</p><p>&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;11.36&nbsp;&nbsp;164</p><p>&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;14.20&nbsp;&nbsp;205</p><p>&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;17.04&nbsp;&nbsp;246</p></button>';              
              }
              
              
                else if (mod.value == "58") {
                 mod.value = "58";
                 btn.innerHTML = '<button id="kptext"><p><h1>58k</h1></p><p><h2>Equal Rhythm</p><p>Center to Center</p><p></h2> Ball&nbsp;&nbsp;Secs&nbsp;&nbsp;Meters</p><p>&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;2.545&nbsp;&nbsp;&nbsp;41</p><p>&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;5.09&nbsp;&nbsp;&nbsp;&nbsp;82</p><p>&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;7.635&nbsp;&nbsp;&nbsp;123</p><p>&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;10.18&nbsp;&nbsp;&nbsp;164</p><p>&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;12.725&nbsp;&nbsp;205</p><p>&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;15.27&nbsp;&nbsp;&nbsp;246</p></button>';              
              }
              
                else if (mod.value == "49") {
                 mod.value = "49";
                 btn.innerHTML = '<button id="kptext"><p><h1>49k</h1></p><p><h2>Equal Rhythm</p><p>Center to Center</p><p></h2> Ball&nbsp;&nbsp;Secs&nbsp;&nbsp;Meters</p><p>&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;3.01&nbsp;&nbsp;&nbsp;41</p><p>&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;6.02&nbsp;&nbsp;&nbsp;82</p><p>&nbsp;3&nbsp;&nbsp;&nbsp;&nbsp;9.03&nbsp;&nbsp;&nbsp;123</p><p>&nbsp;4&nbsp;&nbsp;&nbsp;&nbsp;12.04&nbsp;&nbsp;164</p><p>&nbsp;5&nbsp;&nbsp;&nbsp;&nbsp;15.05&nbsp;&nbsp;205</p><p>&nbsp;6&nbsp;&nbsp;&nbsp;&nbsp;18.06&nbsp;&nbsp;246</p></button>';              
              }


               
              else {
              mod.value = "";
              btn.innerHTML = '<button id="kptext"><p><h2>NO CHART FOR</p><p>THIS SPEED</p></h2></button>';              
              }
              
    
              
              
              
              
              
 }

