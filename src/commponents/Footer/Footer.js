import React from 'react'
import styled from 'styled-components'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'


const Home = () => {
    return (
        <Container>
        <Wrapper>
            <TextDiv>
                <Logo src="/images/logo - Copy.svg"/>
                <Location>
                    <div>
                        <img src="/images/icon-location.svg"/>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </Location>
                <Location>
                    <div>
                        <img src="/images/icon-phone.svg"/>
                    </div>
                    <p>+1-543-123-4567</p>
                </Location>
                <Location>
                    <div>
                        <img src="/images/icon-email.svg"/>
                    </div>
                    <p>example@huddle.com</p>
                </Location>
                
            </TextDiv>
            <Info>
                <p>About US</p>
                <p>What We Do</p>
                <p>FAQ</p>
            </Info>
            <Info>
                <p>Career</p>
                <p>Blog</p>
                <p>Contact Us</p>
            </Info>
            <MyDiv>
                <IconDiv>
                    <span><FaFacebook/></span>
                    <span><FaTwitter/></span>
                    <span><FaInstagram/></span>
                </IconDiv>
                <div>
                    <p>© Copyright 2018 Huddle. All rights reserved.</p>
                </div>
            </MyDiv>
        </Wrapper>
    </Container>
  )
}

export default Home

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #212212;
    margin-top: 10px;
    color: #fff;
`
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 100px;


    @media (max-width: 800px){

    }
`
const TextDiv = styled.div`
    
`
const Logo = styled.img`
    color: #fff;
`
const Location = styled.div`
    width: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p{
        /* margin-left: 20px; */
        width: 300px;
    }
    
`
const Info = styled.div`
    display: flex;
    justify-content: center;
    // align-items: center;
    flex-direction: column;
`
const MyDiv =styled.div`
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;

    div{
        color: #aaa;
    }
`
const IconDiv = styled.div`
    width: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;

    span{
        color: #fff;
    }
`