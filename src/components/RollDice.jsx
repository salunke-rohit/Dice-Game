import { useState } from "react"
import styled from "styled-components"

export default function RollDice () {

    const [currDice , setCurrDice ] = useState(1);
    
    const genrateNum = ()=>{
        return Math.floor(Math.random() * 6) + 1;
        
    }

    const rollDice = () =>{
        const randomNumber = genrateNum();
        setCurrDice(randomNumber);
    }
    
    return (
        <DiceContaner>
            <div className="dice" onClick={rollDice}>
                <img src={`dice_${currDice}.png`} alt="dice" />
            </div>
            <p>Click on Dice to roll</p>
        </DiceContaner>
    )
}

const DiceContaner = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 48px;

    .dice {
        cursor: pointer;
    }

    p{
        font-size: 24px;
        font-family: "Poppins", sans-serif;
    }

`