import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';
import Button from './Button';
import { Link } from 'react-router-dom';

const UserInfo = styled.div`
  font-weight: 800;
  margin-rigth: 1rem;
`;

const FooterWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 860px;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;

// Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .nav {
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

// Header가 fixed로 되어 있으므로 페이지 콘텐트 4rem 아래에 나타나도록 해주는 컴포넌트
const Spacer = styled.div`
  height: 0.5rem;
`;

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <Wrapper>
          <a href="https://github.com/F4-CLOUD" className="nav">
            Github
          </a>
          <a href="http://khuhub.khu.ac.kr/" className="nav">
            Khuhub
          </a>
          <a href="http://ce.khu.ac.kr/" className="nav">
            KyungHee University
          </a>
          <a
            href="https://www.notion.so/lawlencejang/Lawlence-Jang-e2f5631defb4415caefd553606809e91"
            className="nav"
          >
            Dev Blog
          </a>
          <Link to="/contact" className="nav">
            Contact
          </Link>
        </Wrapper>
      </FooterWrapper>
    </>
  );
};

export default Footer;
