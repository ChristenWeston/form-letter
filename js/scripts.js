$(document).ready(function() {
  //Name is the name of the form in this instance. The submit button in this form adds an event
  //listener
  $("#name").submit(function(event) {
    //prevent default ensures that the results of the letter show up once submit is entered
    //Here's all the things that happen once the submit button is pressed:
    event.preventDefault();

    //Create variables for all of the inputs. Set them equal to the input#id.val()
    const name1Input = $("input#name1").val();
    const greeting =$("input#greeting").val();
    const fromWho =$("input#fromWho").val();

    function nameToUppercase(name1Input) {
      let nameUpper = name1Input.toUpperCase();
      alert(nameUpper);
      return nameUpper;
    }

    nameToUppercase(name1Input);

    //If the form is re-submitted w/ new values in the form this will ensure that
    //only the new values are used (by using text instead of append)
    $(".name1").text(name1Input);
    $(".greeting").text(greeting);
    $(".fromWho").text(fromWho);

    //Finally, show that letter w/ the inputs used!
    $("#letter").show();
  });
});