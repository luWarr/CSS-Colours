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
        const colors = data.data; // There is nested data within my API, Co-pilot suggested this line of code to assit with getting the proper data out.
        //This code came from Co-Pilot
        //Prompt: "what code should I place in the html file in order to display my data from this api https://csscolorsapi.com/api/colors/{color name}?"
       
        const contentArea = document.getElementById("contentarea");
        
          // if (color && color.name && color.hex && color.rgb) 
          if (Array.isArray(colors) && colors.length > 0){
        contentArea.innerHTML = colors.map(color =>`
          <div style="
                    margin-bottom:20px;
                    padding:10px;
                    border:1px solid #eee;
                    border-radius:25px;
                    background:#${colors.hex};
                    color: #fff;
                    width: 200px;
                ">  
          <h2>${colors.name}</h2>
            <p>Hex: ${colors.hex}</p>
            <p>RGB: ${colors.rgb}</p>
            </div>`
          ).join('');

          } else {
        contentArea.innerHTML = '<p>Sorry! Nothing here, try again.</p>';
          }
        // end of Co-Pilot code

        console.log(data);
    } 
    catch(error){
        console.error(error);
        document.getElementById("contentarea").innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
}


 





























