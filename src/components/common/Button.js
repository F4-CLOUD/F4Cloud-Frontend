import React from 'react';
import styled, { css } from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import palette from '../../styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      &:hover {
        background: ${palette.cyan[4]};
      }
    `}
`;

// const StyledButton = styled.button`
//   ${buttonStyle}
// `;

// const StyledLink = styled(Link)`
//   ${buttonStyle}
// `;

// const Button = (props) => {
//   return props.to ? (
//     <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
//   ) : (
//     <StyledButton {...props} cyan={props.cyan ? 1 : 0} />
//   );
// };

const Button = (props) => <StyledButton {...props} />;
export default Button;

/*
const Button = ({ to, history, ...rest }) => {
  const onClick = (e) => {
    // to가 있다면 to로 페이지 이동
    if (to) {
      history.push(to);
    }
    if (rest.onClick) {
      rest.onClick(e);
    }
  };
  return <StyledButton {...rest} onClick={onClick} />;
};
*/
