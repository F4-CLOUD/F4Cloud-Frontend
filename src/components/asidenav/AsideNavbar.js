import React, { useState, useEffect } from 'react';
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
// import { AsideNav, AsideNavbarContainer, Menu, MenuItem, MenuLink } from './AsideNavbar.styles';
const AsideNavbar = () => {
  const [click, setClick] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    // <div>
    //   <AsideNav>
    //     <AsideNavbarContainer>
    //       <Menu onClick={handleClick} click={click}>
    //         <MenuItem>
    //           <MenuLink onClick={closeMenu} to="/">
    //             내 드라이브
    //           </MenuLink>
    //         </MenuItem>
    //         <MenuItem>
    //           <MenuLink onClick={closeMenu} to="/about">
    //             공유 문서함
    //           </MenuLink>
    //         </MenuItem>
    //         <MenuItem>
    //           <MenuLink onClick={closeMenu} to="/service">
    //             최근 문서함
    //           </MenuLink>
    //         </MenuItem>
    //         <MenuItem>
    //           <MenuLink onClick={closeMenu} to="/contact">
    //             중요문서함
    //           </MenuLink>
    //         </MenuItem>
    //         <MenuItem>
    //           <MenuLink onClick={closeMenu} to="/contact">
    //             휴지통
    //           </MenuLink>
    //         </MenuItem>
    //         <MenuItem>
    //           <MenuLink onClick={closeMenu} to="/contact">
    //             사진
    //           </MenuLink>
    //         </MenuItem>
    //         <MenuItem>
    //           <MenuLink onClick={closeMenu} to="/contact">
    //             동영상
    //           </MenuLink>
    //         </MenuItem>
    //         <MenuItem>
    //           <MenuLink onClick={closeMenu} to="/contact">
    //             문서
    //           </MenuLink>
    //         </MenuItem>
    //       </Menu>
    //     </AsideNavbarContainer>
    //   </AsideNav>
    // </div>
    <ProSidebar>
      <Menu iconShape="square">
        {/* <MenuItem icon={<FaGem />}>Dashboard</MenuItem> */}
        <SubMenu title="F4CLOUD">
          <SubMenu title="내 드라이브">
            <Link to="/@:username/:cloudId" />
            <MenuItem>
              사진
              <Link to="/@:username/:cloudId" />
            </MenuItem>
            <MenuItem>
              동영상
              <Link to="/@:username/:cloudId" />
            </MenuItem>
            <MenuItem>
              문서
              <Link to="/@:username/:cloudId" />
            </MenuItem>
          </SubMenu>
          <MenuItem>
            공유 문서함
            <Link to="/@:username/:cloudId" />
          </MenuItem>
          <MenuItem>
            최근 문서함
            <Link to="/@:username/:cloudId" />
          </MenuItem>
          <MenuItem>
            중요 문서함
            <Link to="/@:username/:cloudId" />
          </MenuItem>
          <MenuItem>
            휴지통
            <Link to="/@:username/:cloudId" />
          </MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default AsideNavbar;
