import { useState } from "react"
import styled from "styled-components"

export default function RollDice () {

    const [currDice , setCurrDice ] = useState();
    
    let genrateNum = ()=>{
        let num = Math.floor(Math.random() * 7);
        console.log(num);
    }
    
    return (
        <DiceContaner>
            <div className="dice" onClick={genrateNum}>
                <img src="public\cube1.png" alt="dice1" />
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