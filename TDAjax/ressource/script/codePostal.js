$(function () {
  $("#submit").click(function(){
    $.ajax({
        url : 'http://infoweb-ens/~jacquin-c/codePostal/codePostal.php',
        type : 'get',
        dataType : 'json',
        data : $("form").serialize(),
        success : function(out, statut){
          $("ul").html("");
          console.log(out);

          if(out.length==0){
            $("ul").html("404");
          }else{
            $.each(out, function (i, val) {
              console.log(i);
              console.log(val.CP);
              $("ul").append("<li>"+val.CP+"</li>");
            });
          }
        }
    });
  });
});
