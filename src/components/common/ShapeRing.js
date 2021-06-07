import React from 'react';
import styled, { css } from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import palette from '../../styles/palette';

const RingVariant = (radius, stroke = '10') => css`
  position: absolute;
  border-radius: 50%;
  height: ${radius * 2}px;
  width: ${radius * 2}px;
  border: ${stroke}px solid rgba(0, 0, 0, 0.7);
`;

const ShapeRing1 = styled.div`
  ${RingVariant(70, 15)};
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
`;

const ShapeRing = () => {
  return <ShapeRing1></ShapeRing1>;
};

export default ShapeRing;
