$(document).ready(function() {
  $("body").on('click', 'h4.clickListener', function() {
    $(".animal").slideUp();
    $(this).siblings(".animal").slideDown();
  })
});
