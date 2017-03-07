function loadQ1() {
  console.log("log");
  document.getElementById("form").addEventListener("submit", function(event) {
    if(document.getElementsByName('nom')[0].value=="" || document.getElementsByName('Prenom')[0].value==""){
      alert("error");
      event.preventDefault();
    }
  });
}

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

function loadQ3() {
  for (var val of document.getElementsByTagName("input")) {
    console.log("log");
    val.addEventListener("blur", function(){estVid2(this)});
  }
}
function estVid2(val){
  if(val.value==""){
    val.style.border= "2px solid red";
    val.style.borderRadius="5px";
    document.getElementById(val.id+"E").innerHTML= "error";
  }else{
    // val.style.border= "1px solid";
    val.removeAttribute("style");
  }
}
