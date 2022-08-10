import React, {useState} from 'react'
import styled from 'styled-components'
import {GoThreeBars} from 'react-icons/go'

const Mediahead =()=>{

    const [show, setShow] = useState(false)

    const changeBurg =()=>{
        setShow(!show)
    }
    return(
        <>
        <Container>
            <Wrapper>
                <Logo >Logo</Logo>
                <Navs>
                    <span>Home</span>
                    <span>About</span>
                    <span>Contact</span>
                    <span>More</span>
                </Navs>
                <BurgerHold onClick={changeBurg}>
                    <GoThreeBars />
                </BurgerHold>
            </Wrapper>
        </Container>
        {show ? <h1>Hello there </h1>: <h1>it works</h1>}
        </>
    )
}

export default Mediahead

const Container = styled.div`
background-color: black;
height: 70px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
color: #fff;
width: 80%;
display: flex;
justify-content: space-between;
align-items: center;
`
const Logo =styled.div`
    font-family: Moo Lah Lah;
    font-size: 45px;
`
const Navs =styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px){
        display: none;
    }
`
const BurgerHold =styled.div`
    display: none;
    @media (max-width: 768px){
        display: block;
    }
`