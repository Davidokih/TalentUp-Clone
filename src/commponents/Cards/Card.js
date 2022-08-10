import React from 'react'
import styled from 'styled-components'

const Card =(props)=>{
    return(
        <Container>
            <Wrapper>
                <Holder>
                    <TextDiv>
                        <h1>{props.head}</h1>
                        <p>{props.content}</p>
                    </TextDiv>
                    <ImageDiv>
                        <img src={props.image} />
                    </ImageDiv>
                </Holder>
            </Wrapper>
        </Container>
    )
}

export default Card

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
/* background-color: red; */
    width: 90%;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    box-shadow: 0px 5px 8px 1px gray;
`
const Holder = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 800px){
        flex-direction: column-reverse;
    }
`
const TextDiv = styled.div`
    width: 430px;

    p{
        color: #aaa;
    }

    @media (max-width: 800px){
        /* display: flex;
        align-items: center;
        justify-content: center;
        flex */
        width: 300px;
        margin-bottom: 30px;
        text-align: center;
    }
`
const ImageDiv = styled.div`
    margin: 20px 0;
    img{
        width: 350px;
    }

    @media (max-width: 500px){
        margin-top: 50px;
        img{
            width: 300px;
        }
    }
`