import styled from "styled-components"
import TotalScore from "./TotalScore"
import NumberSelecter from "./NumberSelecter"
import RollDice from "./RollDice"
import { useState } from "react"
export default function GamePlay () {
    const [ selectNumber , setSelectNumber] = useState ();
    return (
        <div>
            <MainArea>
                <div className="topSection">
                    <TotalScore/>
                    <NumberSelecter selectNumber={selectNumber} 
                            setSelectNumber={setSelectNumber}/>
                </div>
                <RollDice/>
            </MainArea>
        </div>
    )
}

const MainArea = styled.main `
padding-top: 70px;
   .topSection {
    display: flex;
    justify-content: space-around;
    align-items: center;
    
   }
`