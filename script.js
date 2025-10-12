//Used this youtube video made by: Bro Code
//https://www.youtube.com/watch?v=37vxWr0WgQk
// I used the originaly base code shown in the video, then modified it to cater to my API's specific needs

//A friend gaves me a CORS bypass link so I can avoid messing around with it.
//The link is: https://corsproxy.io/?url=

fetch("https://corsproxy.io/?url=https://csscolorsapi.com/api/colors")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));


//Finish video for fetching data please future lucy//







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


