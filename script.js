//Used this youtube video made by: Bro Code
//https://www.youtube.com/watch?v=37vxWr0WgQk
// I used the originaly base code shown in the video, then modified it to cater to my API's specific needs

//A friend gaves me a CORS bypass link so I can avoid messing around with it.
//The link is: https://corsproxy.io/?url=

// async function fetchData(){ 
   
//     try{
        
//         const searchValue = document.getElementById("searchValue").value.toLowerCase();
//         const response = await fetch(`https://corsproxy.io/?url=https://csscolorsapi.com/api/colors?group=${searchValue}`);

//         if(!response.ok){
//             throw new Error("could not get data");
//         }

//         const data = await response.json();
//         const colors = data.data; // There is nested data within my API, Co-pilot suggested this line of code to assit with getting the proper data out.
//         //This code came from Co-Pilot
//         //Prompt: "what code should I place in the html file in order to display my data from this api https://csscolorsapi.com/api/colors/{color name}?"
       
//         const contentArea = document.getElementById("contentarea");
        
//           // if (color && color.name && color.hex && color.rgb) 
//           if (Array.isArray(colors) && colors.length > 0){
//         contentArea.innerHTML = colors.map(color => {
//            const textColor = color.theme === 'dark' ? '#ffffff' : '#000000';
//                 return`
//           <div style="
//                     margin-bottom:20px;
//                     padding:10px;
//                     border:1px solid #eee;
//                     border-radius:25px;
//                     background:#${color.hex};
//                     color: #fff;
//                     width: 200px;
//                 ">  
//           <h2>${color.name}</h2>
//             <p>Hex: ${color.hex}</p>
//             <p>RGB: ${color.rgb}</p>
//             </div>`
//           }).join('');

//           } else {
//         contentArea.innerHTML = '<p>Sorry! Nothing here, try again.</p>';
//           }
//         // end of Co-Pilot code

//         console.log(data);
//     } 
//     catch(error){
//         console.error(error);
//         document.getElementById("contentarea").innerHTML = `<p style="color:red;">${error.message}</p>`;
//     }
// }



//THIS IS COPILOT CODE: 
//I used the exsisting code above and asked Copilot to fix and improve it. I couldn't get it to work 
//Prompt: "can you tell me how to fix this?, I want to target specifically a group of colors, not all of the colours. Also how do I display those colours onto the website?"
// I added a screenshot of my broken code to give the ai a better idea of how to help me.

async function fetchData(){ 
    try{
        const searchValue = document.getElementById("searchValue").value.toLowerCase().trim();
        const target = `https://csscolorsapi.com/api/colors?group=${encodeURIComponent(searchValue)}`;
        const response = await fetch(`https://corsproxy.io/?url=${encodeURIComponent(target)}`);

        if(!response.ok){
            throw new Error("could not get data");
        }

        const data = await response.json();
        const colors = data.colors || data.data || [];
        // filter to only items whose group matches the search (case-insensitive)
        //This filter allows users to search up a basic colour for example: "RED" and receive all CSS colours that have the Group Tag: "red" in it
        const filtered = colors.filter(c => c.group && c.group.toLowerCase() === searchValue);

        const contentArea = document.getElementById("contentarea");
        contentArea.innerHTML = ''; // clear previous results

        if (filtered.length > 0){
            const fragment = document.createDocumentFragment();

            filtered.forEach(color => {
                const card = document.createElement('div');
                card.className = 'color-card';
                const textColor = (color.theme || '').toLowerCase() === 'dark' ? '#ffffff' : '#000000';
                card.style.background = `#${color.hex}`;
                card.style.color = textColor;
                card.style.borderRadius = '12px';
                card.style.padding = '12px';
                card.style.margin = '8px';
                card.style.width = 'auto';
                card.style.boxSizing = 'border-box';

                card.innerHTML = `
                    <h3 id="h3" style="margin:0 0 8px 0;">${color.name}</h3>
                    <p  id="numb" style="margin:0 0 4px 0;">Hex: #${color.hex}</p>
                    <p  id="numb" style="margin:0 0 8px 0;">RGB: ${color.rgb}</p>
                `;

                fragment.appendChild(card);
            });

            contentArea.appendChild(fragment);
        } else {
            contentArea.innerHTML = '<p>Sorry! No colors found for that group. Try a different group name.</p>';
        }

        console.log({ data, filtered });
    } 
    catch(error){
        console.error(error);
        document.getElementById("contentarea").innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}
// ...existing code...




 





























