import React from 'react';
import styled from 'styled-components';
import { ColorType } from '../styles/theme';

export interface TextProps {
  color?: ColorType;
}

type StyleType = Pick<TextProps, 'color'>;

const Wrapper = styled.div<StyleType>`
  color: ${({ theme, color }) => color || theme.colors.black};
`;

const Text: React.FC<TextProps> = ({ children, color }) => {
  return <Wrapper color={color}>{children}</Wrapper>;
};

export default Text;
