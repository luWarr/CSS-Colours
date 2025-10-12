//This code is from Co-pilot for trouble shooting. Whenever I try to fetch the API data, in the console log it says error 404. A friend suggested adding CORS to the code.
// ...existing code...
// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors()); // This enables CORS for all routes
//This did not work.



//Used this youtube video made by: Bro Code
//https://www.youtube.com/watch?v=37vxWr0WgQk
// I used the originaly base code shown in the video, then modified it to cater to my API's specific needs

// fetch("https://csscolorsapi.com/api/colors/red")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error));

//This code is from my friend Bre for trouble shooting
let url = new URL('https://csscolorsapi.com/api/colors');


console.log(url.href);

//running console log
fetch(url.href)
.then(response => response.json())
.then(response => {
    console.log(response);
    displayResults(response.data);
})
.catch(er => console.error(er));
//This is the end of the code i'm borrowing from my friend Bre


