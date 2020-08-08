function ToggleMe(a,b){
var myStatus = document.getElementById(a).style.display;
if(myStatus == 'block'){
document.getElementById(a).style.display='none';
document.getElementById(b).innerHTML='View Source Data';
}
else{
document.getElementById(a).style.display='block';
document.getElementById(b).innerHTML='Hide Source Data';
}
}

function togMe(a,b){
document.getElementById(a).style.display='block';
document.getElementById(b).style.display='none';
}

function ToggleMeB(BID){
var myVal = document.getElementById(BID).value;
if(myVal == 'Hide Region'){
document.getElementById(BID).value='View Region';
}
else{
document.getElementById(BID).value='Hide Region';
}
}

function tgMe(DS){
var myTGStatus = document.getElementById(DS).style.display;
if(myTGStatus == 'block'){
document.getElementById(DS).style.display='none';
}
else{
document.getElementById(DS).style.display='block';
}
}

function vMe(x){
var myVstatus = document.getElementById(x).style.visibility;
if(myVstatus == 'visible'){
document.getElementById(x).style.visibility='hidden';
}
else{
document.getElementById(x).style.visibility='visible';
}
}

function srcMe(x){
var srcStatus = document.getElementById(x).src;
if(srcStatus == 'https://www.volunteer.gov/NPSr/images/triangle1.png'){
document.getElementById(x).src='https://www.volunteer.gov/NPSr/images/triangle2.png';
}
else{
document.getElementById(x).src='https://www.volunteer.gov/NPSr/images/triangle1.png';
}
}

function displayMe(z,x){
    for (var i=1; i<x; i++) {
        if(i != z){
            document.getElementById('helpTopic'+i).style.display='none';
            //document.getElementById('p'+i).style.backgroundColor='#FF0004';
            document.getElementById('pm'+i).style.backgroundColor='#FF0004';
        } else {
            document.getElementById('helpTopic'+i).style.display='block';
            //document.getElementById('p'+i).style.backgroundColor='#007700';
            document.getElementById('pm'+i).style.backgroundColor='#007700';
        }
    }
}
