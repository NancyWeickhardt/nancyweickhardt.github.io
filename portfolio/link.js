// JavaScript Document
  (function($) {

  $("#link").click(function(e){
    e.stopPropagation();
    var div = $("#show_hide");

    // Make it visible off-page
    div.css({
      "display": "block"
    });

  });
$(document).click(function(e){
  $('#show_hide').fadeOut(300);
});
})(jQuery);