

import React, { useState, useEffect } from 'react'


function Temps2() {

    const [temps2, setTemps2] = useState("");

    async function tiempo() {
        const response = await fetch('https://api.aerisapi.com/airquality/Barcelona,spain?format=json&client_id=4lUHkGWiB25c1NJQf1A89&client_secret=s2eHUnEzz9TpgoHqbn9h5D3WN5LUSrB8E0zhaOcz')

        let tiempo2 = response.json();
        setTemps2(tiempo2.temps2);
        console.log(temps2)
    }

    useEffect(tiempo)
    return (
        <div>

            {temps2}

        </div>
    )

}
export default Temps2;
