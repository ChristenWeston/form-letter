$(document).ready(function() {
  //Name is the name of the form in this instance
  $("#name").submit(function(event) {
    //prevent default ensures that the results of the letter show up once submit is entered
    event.preventDefault();
    const name1Input = $("input#name1").val();
    const greeting =$("input#greeting").val();

    $(".name1").text(name1Input);
    $(".greeting").text(greeting);
    $("#letter").show();
  });
});