import styled from 'styled-components';
import AsideNavbar from '../../components/asidenav/AsideNavbar';
import React, { handleClick } from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import { Dropdown, DropdownButton, SplitButton, ButtonGroup, ListGroup } from 'react-bootstrap';
import Card from '../../components/card/Card';
import {
  UserContainer,
  UserWrapper,
  DropdownWrapper,
  UserAside,
  UserSearchForm,
  UserTitle,
  UserSearchInput,
  UserSearchBtn,
  UserSubTitle,
  UserCardContainer,
} from './user.styles';
function alertClicked() {
  alert('You clicked the third ListGroupItem');
}

const Wrapper = styled.div``;
const Users = () => (
  <Wrapper>
    <UserAside>
      <UserWrapper>
        <DropdownWrapper>
          <div className="mb-2">
            {[DropdownButton].map((DropdownType, variant) => (
              <DropdownType
                as={ButtonGroup}
                key={variant}
                menuAlign={{ lg: 'left' }}
                id={`dropdown-variants-${variant}`}
                variant="secondary"
                size="lg"
                title="새로 만들기"
              >
                <Dropdown.Item eventKey="1">폴더 생성</Dropdown.Item>
                <Dropdown.Item eventKey="2">파일 업로드</Dropdown.Item>
                {/* <Dropdown.Divider />
                <Dropdown.Item eventKey="4">대시</Dropdown.Item> */}
              </DropdownType>
            ))}
          </div>
        </DropdownWrapper>
        <AsideNavbar />
      </UserWrapper>
      <UserWrapper>
        <UserContainer>
          <UserTitle>내 드라이브</UserTitle>
          <UserCardContainer>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </UserCardContainer>
        </UserContainer>
        <UserContainer>
          <UserSubTitle>클라우드 자료</UserSubTitle>
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
        <UserContainer>
          <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item action href="#link1">
              파일명
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              파일명
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              파일명
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              파일명
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              파일명
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              파일명
            </ListGroup.Item>
            <ListGroup.Item action onClick={alertClicked}>
              버튼 형식으로 클릭하면 action
            </ListGroup.Item>
            <ListGroup.Item action onClick={alertClicked}>
              버튼 형식으로 클릭하면 action
            </ListGroup.Item>
            <ListGroup.Item action onClick={alertClicked}>
              버튼 형식으로 클릭하면 action
            </ListGroup.Item>
            <ListGroup.Item action onClick={alertClicked}>
              버튼 형식으로 클릭하면 action
            </ListGroup.Item>
          </ListGroup>
        </UserContainer>
      </UserWrapper>
    </UserAside>
  </Wrapper>
);

export default Users;
