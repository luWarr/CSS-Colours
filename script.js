//Used this youtube video made by: Bro Code
//https://www.youtube.com/watch?v=37vxWr0WgQk
// I used the originaly base code shown in the video, then modified it to cater to my API's specific needs

fetch("https://csscolorsapi.com/api/colors/red")
// .then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

//This code is from my friend Bre for trouble shooting
// let url = new URL('https://csscolorsapi.com/api/colors');
// url.searchParams.set('r', searchText);
// url.searchParams.set('limit',10);

