import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FixedWrapper = styled.div`
  ${({ theme }) => theme.colors.primary};
  position: absolute;
  top: 80px;
  bottom: 50px;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://source.unsplash.com/1920x1080/?computer);
  background-size: cover;
`;

const Title = styled.h2`
  font-family: 'Helvetica', 'Arial', sans-serif;
  line-height: 1.5;
  font-size: 4rem;
  font-weight: bold;
  color: white;
  text-align: center;
  margin: 0;
  margin-bottom: 8px;
`;

const Content = styled.p`
  margin: 0;
  font-family: 'Helvetica', 'Arial', sans-serif;
  line-height: 1.5;
  font-size: 2rem;
  font-weight: bold;
  text-align: justify;
  color: white;
  margin-bottom: 8px;
`;

const ButtonWrapper = styled.p`
  margin: 0;
  line-height: 1.5;
  font-size: 2rem;
  font-weight: bold;
  text-align: justify;
  color: white;
  margin-bottom: 8px;
`;
