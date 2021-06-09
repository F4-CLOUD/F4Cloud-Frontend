import React from 'react';
import styled from 'styled-components';
// import Navbar from '../../components/nav/Navbar';
import Header from '../../components/common/Header';
import User from '../../components/user/user';
import Footer from 'components/footer/footer';
import HeaderContainer from '../../container/auth/HeaderContainer';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
// import { Container2 } from 'styles/GlobalStyle';

const Wrapper = styled.div``;

const UserCloudPage: React.FC = () => {
  return (
    <Wrapper>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/@test">F4CLOUD</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/service">Service</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="드라이브에서 검색" className="mr-sm-2" />
            <Button type="submit" variant="outline-light">
              검색
            </Button>
          </Form>
        </Container>
      </Navbar>

      {/* <Navbar /> */}
      {/* <HeaderContainer /> */}
      <User />
      <Footer />
    </Wrapper>
  );
};

export default UserCloudPage;
