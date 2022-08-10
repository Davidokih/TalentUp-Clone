import React, {useState} from 'react'
import styled from 'styled-components'
import {GoThreeBars} from 'react-icons/go'
import {GiCancel} from 'react-icons/gi'
import Menu from './Menu'

const Header = () => {

    const [toogle, setToogle] = useState(false)

    const burgerMenu = ()=>{
        setToogle(!toogle)
    }


  return (
    <>
    <Container>
        <Wrapper>
            <Logo>
                <img src='/images/logo.svg'alt=""/>
            </Logo>
            <Navigator>
                <Nav>Home</Nav>
                <Nav>Discover</Nav>
                <Nav>Community</Nav>
                <Nav>Service</Nav>
                <button>Try it free</button>
            </Navigator>
            <Icon>
               {toogle ?  
                    <GiCancel size="40px" onClick={burgerMenu}/>
               : 
                    <GoThreeBars size="40px" onClick={burgerMenu}/>
               }
            </Icon>
        </Wrapper>
    </Container>
    {toogle ? <Menu />: null}
    </>
  )
}

export default Header

const Container =styled.div`
    width: 100%;
    height: 100px;
    /* background-color: skyblue; */
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper =styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const Logo =styled.div`
    img{
        width: 200px;
    }
`
const Navigator =styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    
    button{
        width: 130px;
        height: 40px;
        outline: none;
        border: none;
        border-radius: 20px;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`
const Nav =styled.span`
    font-weight: 700;
    font-size: 15px;
`
const Icon =styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
    }
`



