//Array of dogs
/*var dogs = ["whippet", "hound", "poodle"];
function displayDogs() {
    var dog = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/random?apikey=OnQNcaPWc6SivsEki6eVSFfsaIO0z4Nl&tag=" + dog;
        // Ajax call for each button
    $.ajax({
            url: queryURL, 
            method: "GET"
    })
    .then(function(response) {
        var dogDiv = $("<div class='dog'>");
            //var rating = response.rating;
            //var ratingDisplay = $("<p>").text("Rating:" + rating);
            //dogDiv.append(ratingDisplay);
            var imgURL = response.data.image_original_url;
            var image = $("<img>").attr("src", imgURL);
            dogDiv.append(image);
            $(".dogGifs").prepend(dogDiv);
        });
    };
function renderButtons() {
    $(".dogButtons").empty();
    for(var i = 0; i < dogs.length; i++) {
        var newButton = $("<button>");
        newButton.addClass("dogButton");
        newButton.attr("data-name", dogs[i]);
        newButton.text(dogs[i]);
        $(".dogButtons").append(newButton);
    };
}
$("#addDog").on("click", function(event) {
    event.preventDefault();
    var dog = $("#dogInput").val();
    dogs.push(dog);
    renderButtons();

});
$("document").on("click", ".dogButton", displayDogs);
renderButtons();
displayDogs();*/


