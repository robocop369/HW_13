$(function() {

  $(".uneaten-li-btn").on("click", function(event) {
    const id = $(this).data("id");

    const devouredTrue = {
      devoured: true
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredTrue
    }).then(function() {
      location.reload();
    });
  });


  $(".new-burger-form").on("submit", function(event) {
    event.preventDefault();

    const newBurger = {
      new_burger: $("#burg").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {

      location.reload();
    });
  });
});