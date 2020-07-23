
var startTime = document.getElementById("startTime");
var minspan= document.getElementById("min");
var secspan =document.getElementById("sec");
var time;
var intialtime;

document.querySelector('#min').textContent='00';
    document.querySelector('#sec').textContent='00'; 
startTime.addEventListener("input", function() {
  minspan.innerText = startTime.value.substring(0,2);
  secspan.innerText=startTime.value.substring(3,5);
  time= startTime.value;
  var stringtime=String(time);
  
   intialtime=((parseInt(stringtime.substring(0,2)))*60000)+(parseInt(stringtime.substring(3,5)))*1000;

}, false);


var reset=0;


button = document.querySelector('.button1');
var myinterval =-1;
function timer(){
    if(reset==1){
        location.reload();
    }
    if(myinterval== -1){
        button.innerText="Pause";
        myinterval=setInterval(function(){
            min=parseInt(intialtime/60000);
            var mm;
            var ss;
            if(min<10){
                 mm='0'+min;
            }
            else{
                mm=min;
            }
             sec= (intialtime%60000)/1000;
            if(sec<10){
                ss='0'+sec;
           }
           else{
               ss=sec;
           }
            document.querySelector('#min').textContent=mm;
            document.querySelector('#sec').textContent=ss; 
             if(sec===0&&min===0){
                document.querySelector('#min').style.color='red';
                document.querySelector('#sec').style.color='red'; 
                button.innerText="Reset";
                myinterval=-1;
                reset=1;
                 clearInterval(x);
                 
             }
             
             intialtime-=1000;
        },1000);
    }

    else{
        button.innerText="Start";
        clearInterval(myinterval);
        myinterval=-1;
    }
    
}
