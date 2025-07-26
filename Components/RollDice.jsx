import styled from "styled-components"

const RollDice = ({rollDice, currentDice}) => {



  return (
    <DiceContainer>
    <div className="dice" onClick={rollDice}>
      <img src={`/dice_${currentDice}.png`} alt="dice1" />
    </div>
    <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  .dice{
    cursor: pointer;
  }
`