import React, { useEffect } from 'react';
import styled from 'styled-components';
import Intro from 'components/intro/Intro';
import Work from 'components/work/Work';
import Welcome from 'components/welcome/Welcome';
import Service from 'components/services/Services';
import Learn from 'components/learn/LearnMore';
import Footer from 'components/footer/footer';
import Button from 'components/common/Button';
// import { Link } from 'react-router-dom';
// import Text from '../../components/Text';
// import Header from '../../components/common/Header';
// import Footer from '../../components/common/Footer';
// import Navbar from '../../components/nav/Navbar';
// import HeaderContainer from '../container/common/HeaderContainer';

const Wrapper = styled.div`
  ${({ theme }) => theme.colors.primary};
  bottom: 50px;
`;

const HomePage: React.FC = () => {
  return (
    <Wrapper>
      <Intro />
      <Welcome />
      <Work />
      <Service />
      <Learn />
      <Footer />
    </Wrapper>
  );
};
export default HomePage;

// const HomePage: React.FC = () => {
//   return (
//     <Wrapper>
//       <Background></Background>
//       <Header />
//       <FixedWrapper>
//         <Wrapper>
//           <Title> Welcome to F4Cloud </Title>
//           <Content> Focus On Finding Files Fast</Content>
//         </Wrapper>
//         <ButtonWrapper>
//           <Button to="/register"> Register Now </Button>
//         </ButtonWrapper>
//         <Button to="/@:username/"> 유저 클라우드 </Button>
//         <Footer />
//       </FixedWrapper>
//     </Wrapper>
//   );
// };
