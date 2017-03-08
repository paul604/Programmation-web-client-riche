function loadQ1() {
  console.log("log");
  document.getElementById("form").addEventListener("submit", function(event) {
    if(document.getElementsByName('nom')[0].value=="" || document.getElementsByName('Prenom')[0].value==""){
      alert("error");
      event.preventDefault();
    }
  });
}

//--------------------------------

function loadQ2() {
  console.log("log");
  for (var val of document.getElementsByClassName("input")) {
    console.log("log");
    val.addEventListener("blur", function(){estVid(this)});
  }

  document.getElementById("form").addEventListener("submit", function (event) {
    var nom = document.getElementsByName('nom')[0];
    var prenom = document.getElementsByName('Prenom')[0];
    if(nom.value=="" || prenom.value==""){
      testVid(nom);
      testVid(prenom);
      event.preventDefault();
    }
  });
}
function estVid(val){
  if(val.value==""){
    val.style.border= "2px solid red";
    val.style.borderRadius="5px";
  }else{
    // val.style.border= "1px solid";
    val.removeAttribute("style");
  }
}

//--------------------------------

function loadQ3() {
  var form = document.getElementById("form");

  for (var val of document.getElementsByTagName("input") ) {
    if(val.type!="radio"){
      val.addEventListener("blur", function(){estok(this)});
    }
  }

  for (var val of document.getElementsByTagName("select")) {
    val.addEventListener("change", function(){estok(this)});
  }

  form.addEventListener("submit", function (event) {
    for (var val of document.getElementsByTagName("input")) {
      if(val.value=="" || (val.type=="radio" && val.value=="non")){
        estok(val);
        event.preventDefault();
      }
    }
  });

}
function estok(val){
  if(val.value==""){
    error(val);
  }else if (val.classList.contains("string")) {
    if(/^[a-zA-Z]+(-[a-zA-Z]+)*$/.test(val.value)){
      ok(val);
    }else{
      error(val);
    }
  }else if (val.classList.contains("date")) {
    if(/^(01|[1-3]0|[0-3][1-9])\/0[1-9]|1[0-2]\/[0-9][0-9]$/.test(val.value)){
      ok(val);
    }else{
      error(val);
    }
  }else if (val.classList.contains("cp") && document.getElementById('pays').value=="France") {
    if(/^[0-9]{4}$/.test(val.value)){
      ok(val);
    }else{
      error(val);
    }
  }else if (val.classList.contains("pays")) {
    estok(document.getElementById('cp'));
  }else if (val.classList.contains("email")) {
    if(/^[a-zA-z0-9][a-zA-Z0-9.-_]*[a-zA-Z0-9]*@[a-zA-Z0-9][a-zA-Z0-9.-_]*[a-zA-Z0-9]*\.[a-z]+$/.test(val.value)){
      ok(val);
    }else{
      error(val);
    }
  }else{
    ok(val);
  }
}
function error(obj){
  console.log("error");
  obj.style.border= "2px solid red";
  obj.style.borderRadius="5px";
  document.getElementById(obj.id+"E").innerHTML= "error";
}
function ok(obj){
  console.log("ok");
  obj.removeAttribute("style");
  document.getElementById(obj.id+"E").innerHTML= "";
}
