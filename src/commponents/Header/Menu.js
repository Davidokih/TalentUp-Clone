import React from 'react'
import styled from 'styled-components'

const Menu = () => {
  return (
    <Container>
      <Navigator>
          <span>Home</span>
          <span>Discover</span>
          <span>Community</span>
          <span>Service</span>
          <button>Try it free</button>
      </Navigator>
    </Container>
  )
}

export default Menu

const Container =styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`

const Navigator = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  line-height: 3;
  align-items: center;
  
  span{
    font-size: 20px;
    font-weight: 700;
  }

  button{
        width: 150px;
        height: 40px;
        outline: none;
        border: none;
        border-radius: 20px;
        font-size: 15px;
        
    }
`