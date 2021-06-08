import styled from 'styled-components';
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from 'react-pro-sidebar';
import { OutlineButton } from '../../styles/GlobalStyle';
import AsideNavbar from '../../components/asidenav/AsideNavbar';
import DropdownMenu from '../../components/dropdownMenu/DropdownMenu';
import React, { handleClick } from 'react';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import 'react-pro-sidebar/dist/css/styles.css';
import TitleImg from '../../images/title-search.jpeg';
import HashtagImg from '../../images/hashtag-search.jpeg';
import HumanImg from '../../images/human-search.jpeg';
import CloudImg from '../../images/cloud-computing.jpeg';
import GroupImg from '../../images/group.jpeg';
import {
  UserContainer,
  UserWrapper,
  UserAside,
  UserSearchForm,
  UserTitle,
  UserSearchInput,
  UserSearchBtn,
  UserSubTitle,
  UserContentContainer,
  UserTabContainer,
  UserBtn,
  UserCardWrapper,
  UserFeature,
  UserFeatureContent,
  UserFeatureTitle,
  UserFeatureText,
  UserFeatureDetails,
  UserFeatureItem,
  UserItemTitle,
  UserItemContent,
  UserItemIcon,
  UserItemText,
  UserCardSection,
  UserSmallCards,
  UserCard,
  UserCardContent,
  UserCardHeading,
  UserCardDetails,
  UserCardItems,
  UserCardTitle,
  UserCardItem,
  UserCardIcon,
  UserCardText,
  UserImg,
  Img,
} from './user.styles';

const Wrapper = styled.div`
  display: flex;
  position: sticky;
  flex-direction: column;
  column: 100%;
`;
const Users = () => (
  <Wrapper>
    <UserAside>
      <UserWrapper>
        <AsideNavbar />
      </UserWrapper>
      <UserWrapper>
        <UserContainer>
          <UserTitle>내 드라이브</UserTitle>
          <UserSearchForm>
            <UserSearchInput
              name="search"
              id="search"
              type="search"
              placeholder="드라이브에서 검색"
            />
            <UserSearchBtn>Submit</UserSearchBtn>
          </UserSearchForm>
        </UserContainer>
        <UserWrapper>
          <UserContainer>
            <UserSubTitle>클라우드 자료</UserSubTitle>
          </UserContainer>
        </UserWrapper>
      </UserWrapper>
    </UserAside>
  </Wrapper>
);

export default Users;
