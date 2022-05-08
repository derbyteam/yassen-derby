function darkmode (obj) {
    obj.style.backgroundColor='#000';
    obj.style.color='#fff';
var dark=obj.getElementsByClassName("dark");
    dark[0].style.visibility="hidden";
var light=obj.getElementsByClassName("light");
    light[0].style.visibility="visible";
    
  var t= obj.querySelectorAll("table");
  for(i=0;i<t.length;i++){
      t[i].style.backgroundColor="#000";
       t[i].style.border="2px solid white"    
    }
var td=obj.querySelectorAll("td");
for(i=0;i<td.length;i++){
     td[i].style.border="2px solid white"    
  }
  var th=obj.querySelectorAll("th");
for(i=0;i<th.length;i++){
     th[i].style.border="2px solid white"    
  }
  var tr=obj.querySelectorAll("tr");
for(i=0;i<tr.length;i++){
     tr[i].style.border="2px solid white"    
  }
  var div=obj.querySelectorAll("div");
  for(i=0;i<(div.length-1);i++){
    div[i].style.border="2px solid white";  
    div[i].style.backgroundColor="#000"; 
    div[i].style.color="white";   }
    var cl=obj.getElementsByClassName("clupl");
    for(i=0;i<cl.length;i++){
        cl[i].style.border="2px solid white";  
        cl[i].style.backgroundColor="#000";
        cl[i].style.color="#fff"}
}


function lightmode (obj){
    
    obj.style.backgroundColor='#fff';
    obj.style.color='#000';
    var light=obj.getElementsByClassName("light");
    light[0].style.visibility="hidden";
    var dark=obj.getElementsByClassName("dark");
    dark[0].style.visibility="visible";

    var t= obj.querySelectorAll("table");
  for(i=0;i<t.length;i++){
      t[i].style.backgroundColor="#fff";
       t[i].style.border="2px solid black" }

    var td=obj.querySelectorAll("td");
    for(i=0;i<td.length;i++){
        td[i].style.border="2px solid black"    
    }
    var th=obj.querySelectorAll("th");
    for(i=0;i<th.length;i++){
         th[i].style.border="2px solid black"    
      }
      var tr=obj.querySelectorAll("tr");
    for(i=0;i<tr.length;i++){
         tr[i].style.border="2px solid black"    
      }
      var div=obj.querySelectorAll("div");
      for(i=0;i<(div.length-1);i++){
        div[i].style.border="2px solid black";  
        div[i].style.backgroundColor="#eee"; 
        div[i].style.color="black";   }
        var cl=obj.getElementsByClassName("clupl");
        for(i=0;i<cl.length;i++){
            cl[i].style.border="2px solid black";  
            cl[i].style.backgroundColor="#fff";
            cl[i].style.color="#000"}
      var nav = obj.getElementsByTagName("nav");
       nav[0].style.backgroundColor="#bb0000";
      var foot= obj.querySelectorAll('table.footer');
      for(i=0;i<foot.length;i++){
       foot[i].style.border='0';}


    

}


   function darkmode2 (obj) {
    obj.style.backgroundColor='#000';
    obj.style.color='#fff';
    var light=obj.getElementsByClassName("light");
    light[0].style.visibility="visible";
    var dark=obj.getElementsByClassName("dark");
    dark[0].style.visibility="hidden";

  var t= obj.querySelectorAll("table");
  for(i=0;i<t.length;i++){
      t[i].style.backgroundColor="#000";
       t[i].style.border="2px solid white"    
    }

  var tr=obj.querySelectorAll("tr");
for(i=0;i<tr.length;i++){
     tr[i].style.border="1px solid white"    
  }
  var gh=obj.getElementsByClassName("goalerh")
  for(i=0;i<gh.length;i++){
 gh[i].style.color="black";}
 var gtd= obj.querySelectorAll(".goaler td")
 for(i=0;i<gtd.length;i++){
    gtd[i].style.border="1px solid white";}
var gth=obj.querySelectorAll(".goaler th")
for(i=0;i<gth.length;i++){
    gth[i].style.border="1px solid white";}
  var h3= obj.querySelectorAll("h3.most");
  for(i=0;i<h3.length;i++){
  h3[i].style.color="black";}
}

function lightmode2 (obj){
    
    obj.style.backgroundColor='#fff';
    obj.style.color='#000';
    var light=obj.getElementsByClassName("light");
    light[0].style.visibility="hidden";
    var dark=obj.getElementsByClassName("dark");
    dark[0].style.visibility="visible";

    var t= obj.querySelectorAll("table");
  for(i=0;i<(t.length-1);i++){
      t[i].style.backgroundColor="#fff";
       t[i].style.border="2px solid black"; }


      var tr=obj.querySelectorAll("tr");
    for(i=0;i<tr.length;i++){
         tr[i].style.borderBottom="1px solid black"  ;  
      }
      var gtd= obj.querySelectorAll(".goaler td")
      for(i=0;i<gtd.length;i++){
         gtd[i].style.border="1px solid black";}
     var gth=obj.querySelectorAll(".goaler th")
     for(i=0;i<gth.length;i++){
         gth[i].style.border="1px solid black";}
      
}

function photo(){
    document.getElementById("semi2").style.display='inline-block';
    document.getElementById("semi").style.display='none';
   
}
function photo2(){
  document.getElementById("semi2").style.display='none';
  document.getElementById("semi").style.display='block';
}