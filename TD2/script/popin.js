$(function(){
  $("button").click(function(){
    $("div").each(function(){
      $(this).css("display","initial");
    });
  });
  $(".modal_close").click(function(){
      $("div").each(function(){
        $(this).css("display","none");
      });
  });
});
