$("document").ready(function() {
    // Initial array of dogs
    var dogs = ["Whippet", "Hound", "Spaniel", "Collie"];

    // displaydogInfo function re-renders the HTML to display the appropriate content
    function displayDogs() {
      $(".dog").empty();

      var dog = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dog + "&apikey=OnQNcaPWc6SivsEki6eVSFfsaIO0z4Nl&limit=10";
      console.log(queryURL);

      // Creating an AJAX call for the specific dog button being clicked
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response.data);
        for (var i = 0; i < response.data.length; i++){
          var dogDiv = $("<div class='dog col-md-3 text-center'>");

          // Storing the rating data
          //need to loop through 10 times
          var rating = response.data[i].rating;

          // Creating an element to have the rating displayed
          var displayRating = $("<h5>").text("Rating: " + rating);

          // Displaying the rating
          dogDiv.append(displayRating);
          

          var imgURL = response.data[i].images.fixed_height_still.url;
          var image = $("<img>");
          image.attr("src", imgURL);
          image.attr("class", "gif");
          image.attr("data-state", "still")
          image.attr("data-still", response.data[i].images.fixed_height_still.url);
          image.attr("data-animate", response.data[i].images.fixed_height.url); 
           
          dogDiv.append(image);
          $("#dogs-view").prepend(dogDiv); 

        }
      });

    }
    function renderButtons() {
      $("#buttons-view").empty();

      for (var i = 0; i < dogs.length; i++) {
        var doggy = $("<button>");
        doggy.addClass("dog-btn");
        doggy.addClass("btn btn-light");
        doggy.attr("data-name", dogs[i]);
        doggy.text(dogs[i]);
        $("#buttons-view").append(doggy);
      }
    }

    $("#add-dog").on("click", function(event) {
      event.preventDefault();
      var dog = $("#dog-input").val().trim();
      dogs.push(dog);
      renderButtons();
    });

$(document).on("click", "img", function() {
  var state = $(this).attr("data-state");
  var still = $(this).attr("data-still");
  var animate = $(this).attr("data-animate");
  if (state === "still") {
    console.log("if", this);
    $(this).attr("src", animate);
    $(this).attr("data-state", "animate");
  } 
  else {
    console.log("else", this);
    $(this).attr("src", still);
    $(this).attr("data-state", "still");
  }
});

    $(document).on("click", ".dog-btn", displayDogs);
    renderButtons();
  });


