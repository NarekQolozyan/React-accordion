import React, { useState} from "react"

function App3(){
    
    // const [country, setCountry] = useState([]);

    // useEffect(() => {
    //     fetch("https://countriesnow.space/api/v0.1/countries/capital")
    //     .then((response) => response.json())
    //     .then((data) => data.data)
    // })
    

    const [count, setCount] = useState(0);

    
    return (
        <div>
            <button onClick={() => setCount(count+1)}>
                click to add
            </button>
            <p>{count}</p>
        </div>
    )

    }
export default App3