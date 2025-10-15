//Used this youtube video made by: Bro Code
//https://www.youtube.com/watch?v=37vxWr0WgQk
// I used the originaly base code shown in the video, then modified it to cater to my API's specific needs

//A friend gaves me a CORS bypass link so I can avoid messing around with it.
//The link is: https://corsproxy.io/?url=

async function fetchData(){ 
   
    try{
        
        const searchValue = document.getElementById("searchValue").value.toLowerCase();
        const response = await fetch(`https://corsproxy.io/?url=https://csscolorsapi.com/api/colors?group=${searchValue}`);

        if(!response.ok){
            throw new Error("could not get data");
        }

        const data = await response.json();
        const color = data.data; // There is nested data within my API, Co-pilot suggested this line of code to assit with getting the proper data out.
        //This code came from Co-Pilot
        //Prompt: "what code should I place in the html file in order to display my data from this api https://csscolorsapi.com/api/colors/{color name}?"
       
        const contentArea = document.getElementById("contentarea");
            if (Array.isArray(colors) && colors.length > 0) {
            // Build HTML for all colors in the group
            contentArea.innerHTML = colors.map(color => `
                <div style="margin-bottom:20px; padding:10px; border:1px solid #eee; border-radius:8px;">
                    <h3>${color.name}</h3>
                    <p>Hex: #${color.hex}</p>
                    <p>RGB: ${color.rgb}</p>
                    <div style="width:50px; height:50px; background:#${color.hex}; border-radius:8px; border:1px "></div>
                </div>
            `).join('');



    //       if (color && color.name && color.hex && color.rgb) {
    //     contentArea.innerHTML = `
    //   <h2>${color.name}</h2>
    //         <p>Hex: ${color.hex}</p>
    //         <p>RGB: ${color.rgb}</p>
    //         <div style="width:50px; height:50px; background:${color.hex}; border-radius:8px; border:1px"></div>`;
          } else {
        contentArea.innerHTML = '<p>Sorry! Nothing here, try again.</p>';
          }
        // end of Co-Pilot code

        console.log(data);
    } 
    catch(error){
        console.error(error);

    }
}


 































// // This javascript code is from Harold's IMDB project from GitHub, with my idea using this code as a base to build on was super important and very helpful
// // Link:https://github.com/ixd-system-design/UI-for-Data-Fetching/tree/main/movies
// // My goal for using this javascript from harold was to get a better understand about it in general. I don't know how to code very well so doing a basic setup was within the scope of my project.

// const mainContent = document.querySelector('#mainContent')
// const searchBubble = document.querySelector('#searchBubble')

// // This is to get stuff out of the search bubble from the HTML file. 
// let getText = document.querySelector('#getText').value

// // Get all the colours from the API and filter them through these parameters from the data of the API
// //I want the user to look up the general group of the colour they are looking for in the text box.
// let url = new URL('https://corsproxy.io/?url=https://csscolorsapi.com/api/colors');
// url.searchParams.set('group',getText)
// url.searchParams.set("limit", 20)


// console.log(url.href)

// // In this one we're running the fetch request fro the data, then we can watch it in the console log to make it sure it works.
// fetch(url.href, options)
// .then(response => response.json())
// .then(response => {
//     console.log(response)
//     displayResults(response.results)
// })
// .catch(err => console.error(err));


// const displayResults = (results) => {
//     mainContent.innerHTML = '';
//     if (results) {
//         results.forEach(result => {
//             let div = document.createElement('div');
//             div.classList.add('result');

//             div.innerHTML = `
//                 <div>
//                     <p class="group">${result.group}</p>
//                     <p class="name">${result.name}</p>
//                     <p class="hex">${result.hex}</p>
//                     <p class="rgb">${result.rgb}</p>
//                 </div>
//             `;
//             mainContent.appendChild(div);
            
        
//         })
//     }
//     else {
//         mainContent.innerHTML = '<p>Sorry! Nothing here, try again.</p>';
//     }
// };


