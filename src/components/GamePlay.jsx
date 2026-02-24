import styled from "styled-components"
import TotalScore from "./TotalScore"
import NumberSelecter from "./NumberSelecter"
import RollDice from "./RollDice"
import { useState } from "react"

export default function GamePlay () {

    const [score , setScore ] = useState (0);
    const [ selectNumber , setSelectNumber] = useState ();
    const [currDice , setCurrDice ] = useState(1);
    const [error , setError ] = useState ("");

     const genrateNum = ()=>{
        return Math.floor(Math.random() * 6) + 1;
        
    }
    const rollDice = () =>{
        if (!selectNumber) {
            setError("You have not selected any number");
            return
        }
  

        const randomNumber = genrateNum();
        setCurrDice(randomNumber);

        if (selectNumber===randomNumber){
            setScore( (prev)=> prev + randomNumber);
        }else{
            setScore ((prev)=>prev-2);
        }

        setSelectNumber(undefined);
    }

    return (
        <div>
            <MainArea>
                <div className="topSection">
                    <TotalScore score={score}/>
                    <NumberSelecter error={error} setError={setError}
                    selectNumber={selectNumber} 
                            setSelectNumber={setSelectNumber}/>
                </div>
                <RollDice currDice={currDice} rollDice={rollDice} />
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