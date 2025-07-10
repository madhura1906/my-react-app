import { useState } from "react";

function CountApp() {
    const [countno, setCountno] = useState(0);
    const [no,setNo] = useState(0);
    const Incno=()=>{
        if (countno>=10){
            setNo(no+1)
            setCountno(0);
        } else {
            setCountno(countno+1);
        }
    };

    return(
        <div>
            <h2>Counter App..</h2>
            <h3>{countno}</h3>
            <button onClick={Incno}>Click Me</button>
            <h3>Rotation Completed{no}</h3>
        </div>
    );
}

export default CountApp;