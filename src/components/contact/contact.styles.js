import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ImgBg from '../../images/cloud.jpeg';
import { Container } from '../../styles/GlobalStyle';

export const ContactContainer = styled.div`
  background-image: linear-gradient(to top right, rgba(11, 10, 10, 0.1), rgba(11, 10, 10, 0)),
    url(${ImgBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 74vh;
  @media only screen and (max-width: 1600px) {
    height: 85vh;
  }
`;

export const ContactContent = styled.section`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  text-align: center;c
  color: #fffefe;
  @media only screen and (max-width: 375px) {
    text-align: start;
    height: 80%;
  }
`;

export const ContactContentText = styled.div`
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

export const ContactTitle = styled.h1`
  font-size: clamp(1rem, 10vw, 5rem);
  font-weight: 900;
  letter-spacing: 0.5rem;
  line-height: 1.3;
`;

export const ContactTitleText = styled.span`
  display: block;
`;

export const ContactSubTitle = styled.h2`
  font-size: clamp(1.5rem, 1vw, 3rem);
  font-weight: 300;
  letter-spacing: 1rem;
  padding-top: 1rem;
`;

export const ContactText = styled.h3`
  font-size: clamp(2rem, 2.5vw, 3rem);
  font-weight: 400;
  padding: 2.5rem 2rem;
  @media only screen and (max-width: 375px) {
    padding: 1.5rem 0;
  }
`;

export const ContactBtn = styled(Link)`
  text-decoration: none;
  outline: none;
  border: none;
`;

export const ContactCardContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 8rem;
  color: #333333;
  ${Container};
`;

export const ContactCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5rem;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ContactCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 20rem;
  height: 20rem;
  background-color: #fff;
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  transition: all 0.5s ease;
  margin-top: 5rem;
  &:not(:last-child) {
    margin-right: 5rem;
    @media only screen and (min-width: 1300px) {
      margin-right: 3rem;
    }
    @media only screen and (min-width: 1500px) {
      margin-right: 20rem;
    }
    @media only screen and (max-width: 900px) {
      margin-bottom: 10rem;
      margin-right: 0;
    }
    @media only screen and (max-width: 800px) {
      box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.12);
    }
  }
  @media only screen and (max-width: 900px) {
    width: 50rem;
  }
  @media only screen and (max-width: 500px) {
    width: 30rem;
  }
  @media only screen and (min-width: 1890px) {
    width: 40rem;
  }
  &:hover {
    box-shadow: 0px 10px 80px rgba(0, 0, 0, 0.21);
    transform: scale(1.05);
    background-color: #e38b06;
    color: #fff;
  }
`;

export const ContactImgContainer = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 20%;
  border: 2px solid #333;
  transition: all 0.3s ease-out;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactCardTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: bold;
  padding-top: 1rem;
`;

export const ContactCardText = styled.p`
  font-size: 1.8rem;
  padding: 1rem 2rem;
`;

export const ContactImg = styled.img`
  height: 80%;
  margin-top: 2rem;
  margin-left: 2rem;
  transition: all 0.5s ease;
  @media only screen and (max-width: 700px) {
    height: 58%;
  }
  @media only screen and (max-width: 600px) {
    height: 50%;
  }
  @media only screen and (max-width: 500px) {
    height: 30%;
  }
`;
