$(document).ready(function() {
  $("#name").submit(function(event) {
    event.preventDefault();
    const name1Input = $("input#name1").val();

    $(".name1").text(name1Input);
    $("#letter").show();
  });
});