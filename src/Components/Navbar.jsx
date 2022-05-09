import { Badge } from '@material-ui/core';
import { LocalMallOutlined, Search } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  height: 80px;
  
`;

const Wrapper = styled.div`
 padding: 10px 20px;
 display: flex;
 align-items: center;
 justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Languages = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

`;

const Input = styled.input`
  border: none;
`;


const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.img`
  width: 90px;
  height: 60px;

`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left><Languages>EN</Languages>
        <SearchContainer>
          <Input/>
          <Search style = {{color: "grey", fontSize:16}}/>
        </SearchContainer>
        </Left>
        <Center><Logo src = "https://i.ibb.co/wR4htPJ/Otaku-s-Euphoria-Logo-web.png"/></Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="secondary">
          <LocalMallOutlined color="action" />
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
      </Container>
  )
}

export default Navbar