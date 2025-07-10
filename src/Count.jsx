import { useState } from "react";  

const Count=()=>{
    const [coun,setCoun]=useState(0)
    const IncNum=()=>{
        setCoun (coun+1);
    };

    return(
        <div>
            <h2>Counter App</h2>
            <h3>{coun}</h3>
            <button onClick={IncNum}>Click Me</button>
        </div>
    )
}
export default Count;