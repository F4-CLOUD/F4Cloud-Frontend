import styled from 'styled-components';
import { BiFile, BiHash } from 'react-icons/bi';
import { GiHumanTarget } from 'react-icons/gi';
import { BsCloud } from 'react-icons/bs';
import { Container } from '../../styles/GlobalStyle';

export const CardContent = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const CardContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem;
  ${Container};
`;

export const CardImg = styled.img`
  height: 120%;
  margin-top: 3rem;
  margin-bottom: 2rem;
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

export const CardTitle = styled.h2`
  margin: 2rem;
  font-size: clamp(2rem, 8.5vw, 5rem);
  font-weight: bold;
`;

export const CardCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 5rem;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const CardCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 25rem;
  height: 25rem;
  background-color: #fff;
  box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.19);
  border-radius: 20px;
  transition: all 0.5s ease;
  &:not(:last-child) {
    margin-right: 5rem;
    @media only screen and (min-width: 1300px) {
      margin-right: 10rem;
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

export const CardImgContainer = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  border: 2px solid #333;
  transition: all 0.3s ease-out;
  margin-top: 2rem;
  margin-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardIcon1 = styled(BiFile)`
  color: #333;
  font-size: 8rem;
`;

export const CardIcon2 = styled(BiHash)`
  color: #333;
  font-size: 6rem;
`;
export const CardIcon3 = styled(GiHumanTarget)`
  color: #333;
  font-size: 6rem;
`;

export const CardIcon4 = styled(BsCloud)`
  color: #333;
  font-size: 6rem;
`;

export const CardCardTitle = styled.h3`
  font-size: 2rem;
  font-weight: bold;
  padding-top: 1rem;
`;

export const CardCardText = styled.p`
  font-size: 1.5rem;
  padding: 1rem 2rem;
`;
