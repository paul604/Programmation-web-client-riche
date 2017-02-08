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
    console.log(val);
    val.addEventListener("click", function(){
      console.log(document.getElementById(this.id));

      var txt = document.getElementById("").getElementsByClassName("cc");
      console.log(txt);

      if(txt.isHidden){
        txt.removeNamedItem("hidden");
      }else{
        txt.setNamedItem("hidden");
      }
    });
  }
  console.log("ok");
  console.log("-------");
}
