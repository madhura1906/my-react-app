function Slide() {
    let crrdate=new Date().toLocaleDateString();
    let date=new Date().toLocaleDateString();
    let crrTime= new Date().toLocaleTimeString();
    let getday=new Date().getDay();
    return(
        <div>
            <h1>Timer App...</h1>
            <h2>Current Date:{crrdate}</h2>
            <h3>Date:{date}</h3>
            <h2>Day:{getday}</h2>
            <h3>Current Time:{crrTime}</h3>
        </div>
    )
}
export default Slide;