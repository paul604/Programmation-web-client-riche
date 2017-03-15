$(function() {
  $("input").blur(function(){
    console.log(verif($(this)));
  });


  $("form").submit(function(event){
    var bool = true;
    $("imput").each(function(){
      bool = bool && verif($(this));
    });
    if(bool == false){
      event.preventDefault();
    }
  });

});
function verif(val){
  if(val.val()===""){
    return error(val);
  }else if (val.hasClass("string")) {
    if(/^[a-zA-Z]+(-[a-zA-Z]+)*$/.test(val.val())){
      return ok(val);
    }else{
      return error(val);
    }
  }else if (val.hasClass("email")) {
    if(/^[a-zA-z0-9][a-zA-Z0-9.-_]*[a-zA-Z0-9]*@[a-zA-Z0-9][a-zA-Z0-9.-_]*[a-zA-Z0-9]*\.[a-z]+$/.test(val.val())){
      return ok(val);
    }else{
      return error(val);
    }
  }else if (val.hasClass("nb")) {
    if(val.val()>0 && val.val()<127){
      return ok(val);
    }else{
      return error(val);
    }
  }else{
    return ok(val);
  }
}
function error(obj){
  console.log("error");
  obj.css({"border": "2px solid red", "borderRadius" : "5px"});
  $("#"+obj.attr("id")+"E").html("error")
  obj.val("");
  obj.focus();
  return false;
}

function ok(obj){
  console.log("ok");
  obj.css({"border": "", "borderRadius" : ""});
  // document.getElementById(obj.id+"E").innerHTML= "";
  $("#"+obj.attr("id")+"E").html("")
  return true;
}
