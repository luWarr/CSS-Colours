//I struggled to figure out CORS, I used code from this youtube video to troubleshoot
//https://www.youtube.com/watch?v=PNtFSVU-YTI
//Creator: Web Dev Simplified
// const express = require('express')
// const app = express()

// app.get(fetch, (req, res) => {

// })

// app.listen






//Used this youtube video made by: Bro Code
//https://www.youtube.com/watch?v=37vxWr0WgQk
// I used the originaly base code shown in the video, then modified it to cater to my API's specific needs

fetch("https://csscolorsapi.com/api/colors/red")
.then(response => console.log(response))
// .then(data => console.log(data))
.catch(error => console.error(error));










//This code is from my friend Bre for trouble shooting
// let url = new URL('https://csscolorsapi.com/api/colors');

// console.log(url.href);

// //running console log
// fetch(url.href)
// .then(response => response.json())
// .then(response => {
//     console.log(response);
//     displayResults(response.data);
// })
// .catch(er => console.error(er));
//This is the end of the code i'm borrowing from my friend Bre


