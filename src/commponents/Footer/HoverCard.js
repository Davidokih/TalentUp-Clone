import React from 'react'
import styled from 'styled-components'

const HoverCard =()=>{
    return(
        <Container>
            <Wrapper>
                <TextDiv>
                    <h1>Ready To Build Your Community</h1>
                    <button>Get Started For Free</button>
                </TextDiv>
            </Wrapper>
        </Container>
    )
}

export default HoverCard

const Container = styled.div`
     width: 100%;
    /* background-color: skyblue; */
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: 50px;
`
const Wrapper = styled.div`
     width: 60%;
     height: 250px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    box-shadow: 0px 5px 8px 1px gray;
    
    @media (max-width: 830px){
        width: 90%;
        height: 200px;
    }
`

const TextDiv =styled.div`
       width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    h1{
        font-size: 30px;
        margin-bottom: 20px;
        margin-bottom: 50px;
    }

    button{
        width: 200px;
        height: 40px;
        outline: none;
        border: none;
        border-radius: 20px;
        background-color: #f352c9;
        color: #fff;
        margin-bottom: 25px;
    }

    @media (max-width: 800px){
        h1{
            font-size: 25px;
        }
    }

    @media (max-width: 470px){
        h1{
            font-size: 20px;
        }
    }
`