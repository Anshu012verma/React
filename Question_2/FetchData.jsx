import React, { useState, useEffect } from 'react'
import Card from './Card'
import styled from 'styled-components';

const FetchData = () => {
  const [products, setProducts] = useState([]);
  const [current, setcurrentpage] = useState(0);


  const PAGE_SIZE = 10;

  useEffect(() => {
    Fetchingdata();
  }, []);

  const Fetchingdata = async () => {
    const data = await fetch("https://dummyjson.com/recipes?limit=200");
    const json = await data.json();
    setProducts(json.recipes);
  }

  const totalproducts = products.length;
  const noofpages = Math.ceil(totalproducts / PAGE_SIZE);
  const start = current + PAGE_SIZE;
  const end = start + PAGE_SIZE

  const handlePageChange = (n) => {
    setcurrentpage(n)
  }
  const previouspage = (current) => {
    setcurrentpage(current-1)
  }
  const nextpage = (current) => {
    setcurrentpage(current+1)
  }

  return !products.length ? (<h1>No products found..</h1>) :
    (
      <Start>
        <h1 className='heading'>Recipes Cards</h1>
        
        <div className='pages'><button disabled={current===0} className='left' onClick={() => previouspage(current)}>⬅</button>{[...Array(noofpages).keys()].map((n) => <span className={`page ${current===n ? 'active':''}`} key={n} onClick={() => handlePageChange(n)}>{n}</span>)}<button disabled={current===noofpages} className='right' onClick={()=> nextpage(current)}>➡</button></div>
        
        <Main>
          {products.slice(start, end).map((recipe) => <Card key={recipe.id} name={recipe.name} ingredients={recipe.ingredients} cuisine={recipe.cuisine} mealType={recipe.mealType} />)}


        </Main>
      </Start>
    )
}

export default FetchData

const Start = styled.div`
.heading{
  justify-self: center;
}
.left, .right{
  cursor: pointer;
}
.pages{
  padding: 20px;
  text-align: center;
}
.page{
  border: 1px solid black;
  border-radius: 2px;
  padding: 10px;
  margin: 3px;
  cursor: pointer;
}
.active{
  background-color: black;
  color: white;
}

`
const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
`