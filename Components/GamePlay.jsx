import styled from 'styled-components';
import Score from './Score';
import SelectNum from './SelectNum';
import RollDice from './RollDice';
import { useState } from 'react';
import Buttons from './Buttons'
import Rules from './Rules';


const GamePlay = () => {
  console.log('Score   →', Score);
  console.log('Select  →', SelectNum);
  console.log('Roll    →', RollDice);

  const [score, setscore] = useState(0)
  const [selectedNum, setselectedNum] = useState()
  const [currentDice, setcurrentDice] = useState(1)
  const [error, setError] = useState("")
  const [showRules, setshowRules] =useState(false)
  
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    const randomnumber = generateRandomNumber(1, 7);

    setcurrentDice((prev) => randomnumber);

    if (!selectedNum) {
      setError("You have not selected any number.")
      return
    };
    if (selectedNum==randomnumber){
      setscore((prev)=> prev + randomnumber)
    }
    else{
      setscore((prev)=> prev-2)
    }

    setselectedNum(null);
  };

  const resetScore = ()=>{
    setscore(0);
  }

  return (
    <Wrapper>
      <div className='Main'>
        <Score score={score}/>
        <SelectNum error={error} setError={setError} selectedNum={selectedNum}
          setselectedNum={setselectedNum} />
      </div>

      <RollDice rollDice={rollDice}
        currentDice={currentDice} />

      <div className="btns">
        <Buttons onClick={resetScore} text="Reset Score"></Buttons>
        <Buttons text={showRules ? "Hide Rules" : "Show Rules"} onClick={()=> setshowRules((prev)=>!prev)}></Buttons>
      </div>
      <div>
      {showRules && <Rules/>}
      </div>
    </Wrapper>
  )
}

export default GamePlay;
const Wrapper = styled.div`
  padding: 40px;

  .Main{
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 20px; */
  }

  .btns{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: center;
  }
`



