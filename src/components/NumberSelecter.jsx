
import { useState } from "react"
import styled from "styled-components"

export default function NumberSelecter ({ setError , error , selectNumber , setSelectNumber}) {
    let arr = [1,2,3,4,5,6]
    
    console.log(selectNumber);

    const numberSelecterHandler =(val)=>{
        setSelectNumber(val)
        setError("")
    }
    
    return (
        <NumberSelecterConaner>
            <p className="err">{error}</p>
            <div className="flex">
                {
                arr.map((val , i )=> (
                    <Box key={i} onClick={()=>numberSelecterHandler(val)}
                    isSelect = {
                        val === selectNumber
                    }
                    >{val}</Box>
                ))
            }
            </div>
            <p>Select Number</p>
        </NumberSelecterConaner>
    )
}

const NumberSelecterConaner = styled.div `

    display: flex;
    flex-direction: column;
    align-items: end;
    .flex {
        display: flex;
        gap: 24px;
    }
    p {
        font-size: 24px;
        font-weight: 700px;
        font-family: "Poppins", sans-serif;
    }

    .err {
        color: red;
    }
`

const Box = styled.div `
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    font-family: "Poppins", sans-serif;
    background-color: ${(props) =>
    props.isSelect ? "black" : "white"};
    color: ${(props)=>
    props.isSelect ? "white" : "black"}
   

`