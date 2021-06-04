import React from 'react';
import styled from 'styled-components';
import Text from '../../components/Text';
import Header from '../../components/nav/Navbar';

const Wrapper = styled.div``;

const UserCloudPage: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Text>유저 개인 클라우드 페이지</Text>
    </Wrapper>
  );
};

export default UserCloudPage;
