$(function(){
  $("table thead th").wrapInner("<b></b>");

  foot=$("tfoot td");
  foot.css("color","#aaa");
  foot.css("text-align","left");

  $("tbody th").css("color","#00c");

  $(".tab-total").css("color","#000");
  $(".tab-total").css("background-color","#555");

  $("th.ventilation").css("color","#c09");

  $("tbody tr:odd").css("background-color","#ccc");

  $("td").each(function(){
    if(/\/\/\//.test($(this).html())){
      console.log("abs");
      $(this).addClass("non-defini").html($(this).html().replace("///","abs")).css({"color" : "#0f0", "font-style": "italic"});

    }else if (/\.\.\./.test($(this).html())){
      console.log("n.d");
      $(this).addClass("non-defini").html($(this).html().replace("...","n.d")).css({"color" : "#f00", "font-style": "italic"});
    }
  });

  var i=1;
  $("caption").each(function(){
    $(this).prepend(i);//.index() x
    i++;
  });

});
