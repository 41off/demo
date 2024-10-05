




//calculate function form convertor
function calc(){
//variables convert mph to mps
var milesperhour = document.converter.mph.value
var calculated = Math.round(milesperhour * 44.7)/100
//write in text box
document.converter.mps.value=calculated
}

function calc2(){
//variables convert mps to mph
var meterspersecond = document.converter.mps.value
var calculated = Math.round(meterspersecond * 223.69)/100
//write in text box
document.converter.mph.value=calculated
}

function calc3(){
//variables convert mph to kph
var milesperhour = document.converter.mph.value
var calculated = Math.round(milesperhour * 1.60934*100)/100
//write in text box
document.converter.kph.value=calculated
}

function calc4(){
//variables convert kph to mph
var kilometersperhour = document.converter.kph.value
var calculated = Math.round(kilometersperhour * 62.14)/100
//write in text box
document.converter.mph.value=calculated
}

function calc5(){
//variables convert kph to mps
var kilometersperhour = document.converter.kph.value
var calculated = Math.round(kilometersperhour * 1000/36)/100
//write in text box
document.converter.mps.value=calculated
}

function calc6(){
//variables convert mps to kph
var meterspersecond = document.converter.mps.value
var calculated = Math.round(meterspersecond * 360)/100
//write in text box
document.converter.kph.value=calculated
}
