import React from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'

const Hero = () => {
  return (
    <Container>
        <Header />
        <Wrapper>
            <TextDiv>
                <h1>Build The Community Your Fans Will Love </h1>
                <p> Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                <button>Get Started For Free</button>
            </TextDiv>
            <ImageDiv>
                <img src="/images/illustration-mockups.svg"/>
            </ImageDiv>
        </Wrapper>
    </Container>

  )
}

export default Hero

const Container = styled.div`
    width: 100%;
    background-color: skyblue;
    background-image: url('/images/bg-hero-desktop.svg');
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Wrapper = styled.div`
    width: 90%;
    margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 800px){
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    
`
const TextDiv = styled.div`
    width: 450px;

    h1{
        font-size: 40px;
        margin-bottom: 20px;

    }

    p{
        font-weight: 500;
        font-size: 16px;
        margin-bottom: 20px;

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
     
    @media screen and (max-width: 800px){
        text-align: center;
        margin: 20px;
        p{
            font-size: 20px;
        }
    }

    @media screen and (max-width: 500px){

        p{
            font-size: 18px;
        }

        h1{
            font-size: 35px;
        }
    }
    
`
const ImageDiv = styled.div`

    img{
        width: 550px;
    }

    @media (max-width: 800px){

        img{
            width: 500px;
        }
    }

    @media (max-width: 500px){

        img{
            width: 400px;
        }
    }

    @media (max-width: 500px){

img{
    width: 300px;
}
}
`