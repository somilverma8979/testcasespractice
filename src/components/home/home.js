import React, { useEffect, useState } from "react";
import axios from "axios";

function Home(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((data) => {
                console.log(data)
                setData(data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <div className="row">
            {
                data.map(val => (
                    <div className="col-md-3" key={val.id}>
                        <div className="mt-3 mb-3" style={{ width: '18rem', border: '1px solid #000' }}>
                            <div className="card-body">
                                Title: <h5 className="card-title">{val.title}</h5>
                                Body:  <p className="card-text" style={{ textAlign: 'justify' }}>{val.body}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Home