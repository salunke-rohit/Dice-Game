
import styled from "styled-components"

export default function StartGame ({toggle}) {
    return (
        <Contaner>
            <div className="imgdiv">
                <img src="public\homeImg.png" alt="dices" />
            </div>
            
            <div className="content">
                <h1>DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Contaner>
    )
}

const Contaner = styled.div `
        max-width :1180px;
        margin: 0 ;
        display: flex;
        height: 100vh;
        align-items: center;

        .imgdiv {
            margin-left: 70px;
        }

        .content h1{
            font-size: 96px;
            font-family: "Poppins", sans-serif;
            white-space: nowrap;
            margin: 0;
        }
        `
 const Button = styled.button`
    color: white;
    background-color: #000;
    width: 220px;
    height: 44px;
    border-radius: 5px;
    border: none;
    font-size: 20px;
    cursor: pointer;
    margin-top: 30px;
    margin-left: 320px;

    &:hover {
        background-color: #333;
    }
`;