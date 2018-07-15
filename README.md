# giftastic
Uses html, css, JQuery, AJAX calls, and the Giphy API. 
1. Created array of dogs.
2. displayDogs function adds a data name attribute, uses AJAX call to GIPHY API, and uses for loop to gather and display data (gifs and ratings). Data attributes describing motion state are also added (moving/paused).
3. The renderButtons function creates a button for every dog within the array.
4. The on click function adds the user input (dog type submitted) to the array, and the displayDogs function is called each time.
5. On click functions are added to control the data-state. When a user clicks on the giph (originally paused), it will begin to move. If clicked again, it will stop moving. The image click switches the data state. 
6. Note: Image in the background is of my dog Nova. Image is meant to look similar to a homemade snapchat sticker.