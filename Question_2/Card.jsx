import React from 'react'
import styled from "styled-components";

const Card = ({ name, ingredients, cuisine, mealType }) => {
    return (
        <CardWrapper>
            <h3 className='name'>{name}</h3>
            <span className='ingre'>Ingredients : {ingredients}</span>
            <p className='cui'>Cuisine : {cuisine}</p>
            <p className='type'>MealType : {mealType}</p>

        </CardWrapper>

    )
}

export default Card

const CardWrapper = styled.div`
padding: 4px 8px;
border: 2px solid #022b0e;
  border-radius: 10px;
  background-color: #d9dfe0;
  color: #000000;
  max-height: 300px;
  width: 300px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  margin: 5px;

.name{
    justify-self: center;
    font-size: 25px;
  color: #022b0e;

}

.ingre, .cui, .type{
    font-size: 18px;
    font-weight: 500;
    font-family: sans-serif;
}


`