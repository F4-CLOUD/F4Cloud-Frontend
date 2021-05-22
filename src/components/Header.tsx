import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = styled.img`
  width: 70px;
`;

const Positioner = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  background-color: #f7f7f7;
  color: black;
`;

const WhiteBackground = styled.div`
  width: 95%;
  margin: 0 auto;
  height: auto;
  background-color: #f7f7f7;
`;

const HeaderContents = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: Arial, sans-serif;
  font-weight: bold;
`;

const Menu = styled.div`
  width: 15%;
  flex-direction: column;
  text-align: center;
`;

const MenuLink = styled(Link)`
  padding: 0 3.5%;
`;

const ButtonContents = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: 2%;
`;

const LoginButton = styled.button`
  background-color: white;
  color: #333333;
  width: 140px;
  height: 40px;
  margin-right: 5%;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 1;
  border-radius: 4px;
  cursor: pointer;
`;

const RegisterButton = styled.button`
  background-color: #333333;
  color: white;
  width: 140px;
  height: 40px;
  margin-right: 5%;
  font-family: sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 0;
  border-radius: 4px;
  cursor: pointer;
`;

const ButtonLink = styled(Link)`
  padding: 0 3%;
`;

const Header = () => {
  return (
    <Positioner>
      <WhiteBackground>
        <HeaderContents>
          <Logo src="logo.png"></Logo>
          <MenuLink to="/">
            <Menu>Home</Menu>
          </MenuLink>
          <MenuLink to="/about">
            <Menu>About</Menu>
          </MenuLink>
          <MenuLink to="/services">
            <Menu>Services</Menu>
          </MenuLink>
          <MenuLink to="/contact">
            <Menu>Contact</Menu>
          </MenuLink>
          <ButtonContents>
            <ButtonLink to="/login">
              <LoginButton>Log in</LoginButton>
            </ButtonLink>
            <ButtonLink to="/register">
              <RegisterButton>Register</RegisterButton>
            </ButtonLink>
          </ButtonContents>
        </HeaderContents>
      </WhiteBackground>
    </Positioner>
  );
};

export default Header;
