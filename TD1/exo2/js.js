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
