import seriesData from "../api/data.json"

const Netflix=() => {
    return(
        <ul>
        {
            seriesData.map((curElem)=>{
                return(
                    <li key={curElem.name}>
        <div>
           <img src={curElem.img_url}
           height="300px"
           width="400px" alt={curElem.name}/>
        </div>
        <div>
          <h2>name:{curElem.name}</h2>
          <h2>rating:{curElem.rating}</h2>
          <h3>cast:{curElem.cast}</h3>
          <h4>genre:{curElem.genre}</h4>
        <a href={curElem.watch_url} target="_blank">
            <button style={{backgroundColor:"blue"}}>Watch Now</button>
        </a>
        </div>
        </li>
                )
            })
        }
        </ul>
    )
}

export default Netflix;