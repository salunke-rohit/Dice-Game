import styled from "styled-components"
import TotalScore from "./TotalScore"
import NumberSelecter from "./NumberSelecter"

export default function GamePlay () {
    return (
        <div>
            <MainArea>
                <div className="topSection">
                    <TotalScore/>
                    <NumberSelecter/>
                </div>
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