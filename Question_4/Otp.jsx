import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components";

const Otp_count = 5;
const Otp = () => {
    const[inputbox, setInputbox] = useState(new Array(Otp_count).fill(""))

    const refArr = useRef([]);

    useEffect(() => {
        refArr.current[0]?.focus()
    },[])

    const handleOnChange=(value,index)=>{
        if (isNaN(value)) return;

        const newArr = [...inputbox];
        const newValue = value.trim();
        newArr[index]= newValue.slice(-1);
        setInputbox(newArr)

        newValue && refArr.current[index + 1]?.focus()

    }

    const handleOnKeyDown = (e, index)=>{
        if (!e.target.value && e.key === 'Backspace'){
        refArr.current[index - 1]?.focus()

        }
    }
return(
    <Wrapper>
        <h1>Validate OTP</h1>
        <div>

            {
                inputbox.map((a, index)=> <input type="text" key={index} className="otp-box" value={inputbox[index]} onChange={(e)=>handleOnChange(e.target.value, index)} ref={(input)=> {refArr.current[index]=input}} onKeyDown={(e)=> (handleOnKeyDown(e, index))}/>)
            }
            
        </div>
    </Wrapper>
)

}
export default Otp

const Wrapper = styled.div`
    text-align: center;
    .otp-box{
        font-size: 40px;
        text-align: center;
        width: 50px;
        height: 50px;
    }
`