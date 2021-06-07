import React, { useState } from 'react';
import Welcome from './welcome.js';
import { Button } from 'grommet';
import App from './App.js'


function Testcondi() {
    let [render, setRender] = useState(true);

    if (render === false) {
        
        return (
            <div><App /></div>)
    }
    
    return (<div className="contentMain">
        <Button primary label="Pulsa per anar als Acudits !!" onClick={() => setRender(render = false)}  ></Button>
        <Welcome />

    </div>
    )
};




export default Testcondi