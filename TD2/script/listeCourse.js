$(function(){

  $("#bouton1").click(function(){
    var txt1 = $("#textBouton1");
    $("ul").append("<li>"+txt1.val()+"</li>");
    clear(txt1);
  });

  $("#bouton2").click(function(){
    var txt2 = $("#textBouton2");
    var int = txt2.val();
    if(int <= 0 || int >$("ul li").size()){
      alert(int + "<0 ou > "+$("ul li").size());
    }else{
      $("li:nth-child("+int+")").remove();
    }

    clear(txt2);
  });


});


function clear(txt){
  txt.val("");
  txt.focus();
}
