function loadQ1(){
  var text = document.getElementById("over");

  text.addEventListener("mouseover", function(){
    this.style.fontWeight="bold";
  });

  text.addEventListener("mouseout", function(){
    this.style.fontWeight="normal";
  });
}

//-------------------------

function loadQ2(){
  var text = document.getElementById("over");

  text.addEventListener("mouseover", function(){
    this.style.color="#aaa";
  });

  text.addEventListener("mouseout", function(){
    this.style.color="inherit";
  });

  document.getElementById("text").addEventListener("click", function(){
    this.style.color="#f00";
  });
}

//-------------------------

function loadQ3(){
  for (var val of document.getElementsByClassName("Q")) {
    val.addEventListener("click", function(){

      var txt = document.getElementById(this.id).getElementsByClassName("C")[0];


      if(txt.hasAttribute("hidden")){
        // txt.style.visibility=""
        txt.removeAttribute("hidden");
      }else{
        // txt.style.visibility="hidden"
        txt.setAttribute("hidden","");
      }
    });
  }
}
