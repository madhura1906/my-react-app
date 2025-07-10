function Map() {
    const userData=[
        {
            id:101,
            nm:"geeta",
            age:20,
            email:"geeta@gmail.com"
        },
        {
            id:102,
            nm:"seeta",
            age:24,
            email:"seeta@gmail.com"
        },
        {
            id:103,
            nm:"reeta",
            age:20,
            email:"reeta2gmail.com"
        },
        {
            id:104,
            nm:"neeta",
            age:19,
            email:"neeta@gmail.com"
        }
    ]
    return( 
        <div>
            <h1>Loop in jsx with map function</h1>
            <table border="1px">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((ele)=>(
                            <tr key={ele.id}>
                                <td>{ele.id}</td>
                                <td>{ele.nm}</td>
                                <td>{ele.age}</td>
                                <td>{ele.email}</td>
                            </tr>
                        ))
                    }
                    {/* <tr>
                        <td>101</td>
                        <td>geeta</td>
                        <td>20</td>
                        <td>geeta@gmail.com</td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default Map;