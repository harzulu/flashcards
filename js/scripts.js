$(document).ready(function() {
  $(".card").click(function(e) {
    e.stopPropagation();
    $(this).find('h3').toggle();
    $(this).find('p').toggle();

  });
});


