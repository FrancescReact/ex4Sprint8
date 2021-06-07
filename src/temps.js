import React, { useState } from 'react'


function Temps(){

    const [temps , setTemps]= useState("");

    async function previsio() {
        const response = await fetch( "https://api.aerisapi.com/observations/barcelona,spain?client_id=4lUHkGWiB25c1NJQf1A89&client_secret=s2eHUnEzz9TpgoHqbn9h5D3WN5LUSrB8E0zhaOcz", {
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          }
        });
    
    
        let resultat = await response.json();
        console.log(resultat);
    
        setTemps(resultat);

    return(

        <div>
            {temps}

        </div>


    )
}
}
export default Temps;

