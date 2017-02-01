function loadQ1(){
  window.alert("coucou");
}

function loadQ2(){
  window.alert(navigator.appName+navigator.appVersion);
}

function loadQ3(){
  document.getElementsByName("buttonOn")[0].addEventListener("click",function(){OnOff(true);});
  document.getElementsByName("buttonOff")[0].addEventListener("click",function(){OnOff(false);});
}

function OnOff(bool){
  var img = document.getElementById("img");
  if(bool){
    img.src="lpon.jpg";
    return true;
  }else{
    img.src="lpoff.jpg";
    return false;
  }
}
