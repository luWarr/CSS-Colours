//Used this youtube video made by: Bro Code
//https://www.youtube.com/watch?v=37vxWr0WgQk
// I used the originaly base code shown in the video, then modified it to cater to my API's specific needs

//A friend gaves me a CORS bypass link so I can avoid messing around with it.
//The link is: https://corsproxy.io/?url=

fetch("https://corsproxy.io/?url=https://csscolorsapi.com/api/colors")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));


















///chat GPT code below///
//This function is for the red button on the main page. This was just a reminder so I knew what to do.
// function goToRed() {
//   window.location.href = 'red.html';
// }

// function goToBrown() {
//   window.location.href = 'brown.html';
// }

// function goToOrange() {
//   window.location.href = 'orange.html';
// }



