import React, { useEffect, useState } from "react"
import styled from "styled-components"

const Auto = () => {
    const [input, setInput] = useState("")
    const [products, setProducts] = useState([]);
    const [showresults, setshowresults] = useState(false)
    const [cache, setcache] = useState({})

    const fetchdata = async () => {
        if(cache[input]){
            console.log("CACHE RETURNED", input)
            setProducts(cache[input]);
            return;
        }

        console.log("API CALL", input)
        const data = await fetch("https://dummyjson.com/products/search?q=" + input)
        const json = await data.json();
        setProducts(json?.products)
        setcache(prev => ({...prev, [input]:json?.products}));
    }

    useEffect(() => {
        const timer = setTimeout(fetchdata, 300);

        return () => {
            clearTimeout(timer)
        }
    }, [input])
    return (
        <Wrapper>
            <div className="box">
                <h1>Autocomplete Search Bar</h1>
                <input type="text" className="searchbar" value={input} onChange={(e) => setInput(e.target.value)} onFocus={() => setshowresults(true)} onBlur={() => setshowresults(false)} />
            </div>
            {showresults && (<div className="results-container">
                {
                    products.map((p) => <span className="result" key={p.id}>{p.title}</span>)
                }
            </div>
            )}
        </Wrapper>
    )
}
export default Auto

const Wrapper = styled.div`
    .box{
        text-align: center;
    }
    .searchbar{
        width: 500px;
        padding: 5px;
    }
    .results-container{
        width: 500px;
        margin: auto;
        border: 1px solid black;
        padding: 5px;
        max-height: 500px;
        overflow-y: scroll;
    }
    .result{
        display: block;
        padding: 5px;

    }
    .result:hover{
        background-color: #c9c9c9;
    }
`