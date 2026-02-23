import styled from "styled-components";

export default function TotalScore() {
  return (
    <ScoreContainer>
      <h1>0</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
}

const ScoreContainer = styled.div`
  width: 200px;
  align-items: center;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 100px;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    line-height: 100px;
    margin: 0;
  }

  p {
    font-size: 24px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    margin: 0;
  }
`;