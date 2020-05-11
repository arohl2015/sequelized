// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      console.log(id);
      var devouredState = $(this).data("devouredState");

      var newDevouredState = {
        devoured: devouredState
      }
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed burger to", devouredState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#burgerName").val().trim()
      };
       console.log("New Burger",newBurger)
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("new burger created!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });