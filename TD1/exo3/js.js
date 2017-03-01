function loadQ1() {
  console.log("log");
  document.getElementById("form").addEventListener("submit", function (event) {
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
    val.addEventListener("blur", function () {
      if(this.value==""){
        this.style.border= " bottom 2px solid red";
      }else{
        this.style.border= "none";
      }
    });
  }
  document.getElementById("form").addEventListener("submit", function (event) {
    if(document.getElementsByName('nom')[0].value=="" || document.getElementsByName('Prenom')[0].value==""){
      // document.getElementById("error").innerHTML="nop"
      event.preventDefault();
    }
  });
}

function loadQ3() {
  console.log("log");
  document.getElementById("form").addEventListener("submit", function (event) {
    if(document.getElementsByName('nom')[0].value=="" || document.getElementsByName('Prenom')[0].value==""){
      alert("error");
      event.preventDefault();
    }
  });
}
