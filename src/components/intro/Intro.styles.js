import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ImgBg from '../../images/f4cloud.jpg';

export const IntroContainer = styled.div`
  background-image: linear-gradient(to top right, rgba(11, 10, 10, 0.38), rgba(11, 10, 10, 0.19)),
    url(${ImgBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 74vh;
  @media only screen and (max-width: 1600px) {
    height: 85vh;
  }
`;

export const IntroContent = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fffefe;
  @media only screen and (max-width: 375px) {
    text-align: start;
    height: 80%;
  }
`;

export const IntroContentText = styled.div`
  width: 50%;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
  @media only screen and (max-width: 375px) {
    position: absolute;
    align-items: flex-start;
  }
`;

export const IntroTitle = styled.h1`
  font-size: clamp(1rem, 10vw, 5rem);
  font-weight: 900;
  letter-spacing: 0.5rem;
  line-height: 1.3;
`;

export const IntroTitleText = styled.span`
  display: block;
`;

export const IntroSubTitle = styled.h2`
  font-size: clamp(2rem, 3vw, 4rem);
  font-weight: 300;
  letter-spacing: 1rem;
  padding-top: 1rem;
`;

export const IntroText = styled.h3`
  font-size: clamp(2rem, 2.5vw, 3rem);
  font-weight: 400;
  padding: 2.5rem 2rem;
  @media only screen and (max-width: 375px) {
    padding: 1.5rem 0;
  }
`;

export const IntroBtn = styled(Link)`
  text-decoration: none;
  outline: none;
  border: none;
`;
