$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    const textUser = $("input#input1").val().toUpperCase();

    $(".input1").text(textUser);
  });
});