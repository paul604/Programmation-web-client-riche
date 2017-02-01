function loadQ1(){
  window.alert("coucou");
}

//------------------------------------

function loadQ2(){
  window.alert(navigator.appName+navigator.appVersion);
}

//------------------------------------

function loadQ3(){
  var bOn =document.getElementsByName("buttonOn")[0];
  var bOff= document.getElementsByName("buttonOff")[0];
  var img= document.getElementById("img");
  bOn.addEventListener("click",function(){OnOff(true, img);});
  bOff.addEventListener("click",function(){OnOff(false, img);});

  var imgForOver = document.getElementById("imgOver");
  imgForOver.addEventListener("mouseover",function(){OnOff(true, imgForOver);});
  imgForOver.addEventListener("mouseout",function(){OnOff(false, imgForOver);});

}

function OnOff(bool, img){
  if(bool){
    img.src="lpon.jpg";
  }else{
    img.src="lpoff.jpg";
  }
  return bool;
}

//------------------------------------

function loadQ4(){

  document.getElementsByName("button")[0].addEventListener("click",function(){
    var text = document.getElementsByName("value")[0];
    window.alert(text.value);
    text.value ="";
  });
}
