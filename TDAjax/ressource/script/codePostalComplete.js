$(function(argument) {
  var list = ["azertyuiop", "zyuiop", "ancenis", "nantes"];
  $("#commune").autocomplete({
    minLength: 3,
    source: list,
    select: function( event, ui ) {
      console.log(event);
      console.log(ui);
      console.log(ui.item.value);
      $("div").html(ui.item.value);
    }
  });
});
