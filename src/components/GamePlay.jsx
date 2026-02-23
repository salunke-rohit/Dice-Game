import styled from "styled-components"
import TotalScore from "./TotalScore"
export default function GamePlay () {
    return (
        <div>
            <main>
                <div>
                    <TotalScore/>

                </div>
            </main>
        </div>
    )
}

const MainArea = styled.main `
    max-width: 1280px;
    height: 151px;
`