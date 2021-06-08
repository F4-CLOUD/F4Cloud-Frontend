import auth from 'modules/auth';
import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { BiMenu, BiX } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { Button } from '../../styles/GlobalStyle';
import {
  Nav,
  UserInfo,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MenuIcon,
  Menu,
  MenuItem,
  MenuLink,
  MenuItemBtn,
  MenuLinkBtn,
} from './Header.styles';

const Header = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 1000) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);

  return (
    <div>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              F4CLOUD
            </NavLogo>
            <MenuIcon onClick={handleClick}>{click ? <BiX /> : <BiMenu />}</MenuIcon>
            <Menu onClick={handleClick} click={click}>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/">
                  Home
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/about">
                  About
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/service">
                  Services
                </MenuLink>
              </MenuItem>
              <MenuItem>
                <MenuLink onClick={closeMenu} to="/contact">
                  Contact
                </MenuLink>
              </MenuItem>
              <MenuItemBtn>
                <MenuLinkBtn to="/">
                  <UserInfo>test</UserInfo>
                  <Button primary>Logout</Button>
                </MenuLinkBtn>
              </MenuItemBtn>
              {/* <MenuItemBtn>
                {button ? (
                  <MenuLinkBtn to="/register">
                    <Button primary>Register</Button>
                  </MenuLinkBtn>
                ) : (
                  <MenuLinkBtn to="/register">
                    <Button primary bigFont onClick={closeMenu}>
                      Register
                    </Button>
                  </MenuLinkBtn>
                )}
              </MenuItemBtn> */}
            </Menu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </div>
  );
};

export default Header;
