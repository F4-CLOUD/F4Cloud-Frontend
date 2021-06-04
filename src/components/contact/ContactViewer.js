import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import palette from '../../styles/palette';
import Responsive from '../common/Responsive';
import Text from '../Text';
import ShapeRing from '../common/ShapeRing';

const ContactViewerWrapper = styled(Responsive)`
  margin-top: 4rem;
`;

const ContactHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
    align: center;
  }
`;

/* span 사이 가운뎃 점 문자 */
const SubInfo = styled.div`
  margin-top: 1rem;
  color: ${palette.gray[6]};
  span + span:before {
    color: ${palette.gray[5]};
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    content: '\\B7';
  }
`;

const Tags = styled.div`
  margin-top: 0.5rem;
  .tag {
    display: inline-block;
    color: ${palette.cyan[7]};
    text-decoration: none;
    margin-right: 0.5rem;
    &:hover {
      color: ${palette.cyan[6]};
    }
  }
`;

const ContactContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.cyan[8]};
`;

const ContactViewer = () => {
  return (
    <ContactViewerWrapper>
      <ContactHead>
        <h1>F4Cloud Team</h1>
        <h2>KHU CLOUD COMPUTING LECTURE F TEAM</h2>
        <Tags>
          <div className="tag">Backend Engineer</div>
        </Tags>
        <SubInfo>
          <span>
            <Text>김서현</Text>
            <Text>노서연</Text>
            <Text>이상화</Text>
          </span>
        </SubInfo>
        <Tags>
          <div className="tag">Frontend Engineer</div>
        </Tags>
        <SubInfo>
          <span>
            <Text>장규범</Text>
            <Text>황성연</Text>
          </span>
        </SubInfo>
      </ContactHead>
    </ContactViewerWrapper>
  );
};

export default ContactViewer;
