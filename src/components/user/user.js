import { OutlineButton } from '../../styles/GlobalStyle';
import AsideNavbar from '../../components/asidenav/AsideNavbar';
import DropdownMenu from '../../components/dropdownMenu/DropdownMenu';
import React, { handleClick } from 'react';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import 'react-pro-sidebar/dist/css/styles.css';
import TitleImg from '../../images/title-search.jpeg';
import HashtagImg from '../../images/hashtag-search.jpeg';
import HumanImg from '../../images/human-search.jpeg';
import CloudImg from '../../images/cloud-computing.jpeg';
import GroupImg from '../../images/group.jpeg';
import {
  UserContainer,
  UserWrapper,
  UserAside,
  UserSearchForm,
  UserTitle,
  UserSearchInput,
  UserSearchBtn,
  UserContentContainer,
  UserTabContainer,
  UserBtn,
  UserCardWrapper,
  UserFeature,
  UserFeatureContent,
  UserFeatureTitle,
  UserFeatureText,
  UserFeatureDetails,
  UserFeatureItem,
  UserItemTitle,
  UserItemContent,
  UserItemIcon,
  UserItemText,
  UserCardSection,
  UserSmallCards,
  UserCard,
  UserCardContent,
  UserCardHeading,
  UserCardDetails,
  UserCardItems,
  UserCardTitle,
  UserCardItem,
  UserCardIcon,
  UserCardText,
  UserImg,
  Img,
} from './user.styles';

const Users = () => {
  return (
    <div>
      <UserWrapper>
        <UserAside>
          <AsideNavbar />
        </UserAside>
        <UserContainer>
          <UserTitle>내 드라이브</UserTitle>
          <UserSearchForm>
            <UserSearchInput
              name="search"
              id="search"
              type="search"
              placeholder="드라이브에서 검색"
            />
            <UserSearchBtn>Submit</UserSearchBtn>
          </UserSearchForm>
          {/* <UserContentContainer>
            <UserTabContainer>
              <UserBtn to="/User">
                <OutlineButton big bigFont bigRadius>
                  Title Search
                </OutlineButton>
              </UserBtn>
              <UserBtn to="/User">
                <OutlineButton big bigFont bigRadius>
                  HashTag Search
                </OutlineButton>
              </UserBtn>
              <UserBtn to="/User">
                <OutlineButton big bigFont bigRadius>
                  People and Things Search
                </OutlineButton>
              </UserBtn>
              <UserBtn to="/User">
                <OutlineButton big bigFont bigRadius>
                  Scalability and Availability
                </OutlineButton>
              </UserBtn>
            </UserTabContainer>
            <UserCardWrapper>
              <UserFeature>
                <UserImg src={TitleImg} alt="Title Search User" />
                <UserFeatureContent>
                  <UserFeatureTitle>Title Search User</UserFeatureTitle>
                  <UserFeatureText>제목으로 검색</UserFeatureText>
                  <UserFeatureDetails>
                    <UserFeatureItem>
                      <UserItemTitle>김서현</UserItemTitle>
                      <UserItemContent>
                        <UserItemIcon />
                        <UserItemText>1</UserItemText>
                      </UserItemContent>
                    </UserFeatureItem>
                    <UserFeatureItem>
                      <UserItemTitle>Dev Environment</UserItemTitle>
                      <UserItemText>S3, EC2, Django, MySQL</UserItemText>
                    </UserFeatureItem>
                  </UserFeatureDetails>
                </UserFeatureContent>
              </UserFeature>
              <UserCardSection>
                <UserSmallCards>
                  <UserCard>
                    <Img src={HashtagImg} alt="Hashtag Search User" />
                    <UserCardContent>
                      <UserCardHeading>Hashtag Search User</UserCardHeading>
                      <UserCardDetails>
                        <UserCardItems>
                          <UserCardTitle>김서현</UserCardTitle>
                          <UserCardItem>
                            <UserCardIcon />
                            <UserCardText>1</UserCardText>
                          </UserCardItem>
                        </UserCardItems>
                        <UserCardItems>
                          <UserItemTitle>Dev Environment</UserItemTitle>
                          <UserItemText>S3, EC2, Django, MySQL</UserItemText>
                        </UserCardItems>
                      </UserCardDetails>
                    </UserCardContent>
                  </UserCard>
                  <UserCard>
                    <Img src={HumanImg} alt="Human and Things Search User" />
                    <UserCardContent>
                      <UserCardHeading>Human Search User</UserCardHeading>
                      <UserCardDetails>
                        <UserCardItems>
                          <UserCardTitle>김서현</UserCardTitle>
                          <UserCardItem>
                            <UserCardIcon />
                            <UserCardText>1</UserCardText>
                          </UserCardItem>
                        </UserCardItems>
                        <UserCardItems>
                          <UserItemTitle>Dev Environment</UserItemTitle>
                          <UserItemText>S3, EC2, Django, MySQL</UserItemText>
                        </UserCardItems>
                      </UserCardDetails>
                    </UserCardContent>
                  </UserCard>
                </UserSmallCards>
                <UserSmallCards>
                  <UserCard>
                    <Img src={CloudImg} alt="Scalability and Availability" />
                    <UserCardContent>
                      <UserCardHeading>Scalability and Availability</UserCardHeading>
                      <UserCardDetails>
                        <UserCardItems>
                          <UserCardTitle>노서연, 이상화</UserCardTitle>
                          <UserCardItem>
                            <UserCardIcon />
                            <UserCardText>2</UserCardText>
                          </UserCardItem>
                        </UserCardItems>
                        <UserCardItems>
                          <UserItemTitle>Dev Environment</UserItemTitle>
                          <UserItemText>S3, EC2, Django, MySQL</UserItemText>
                        </UserCardItems>
                      </UserCardDetails>
                    </UserCardContent>
                  </UserCard>
                  <UserCard>
                    <Img src={GroupImg} alt="Frontend" />
                    <UserCardContent>
                      <UserCardHeading>Frontend</UserCardHeading>
                      <UserCardDetails>
                        <UserCardItems>
                          <UserCardTitle>장규범, 황성연</UserCardTitle>
                          <UserCardItem>
                            <UserCardIcon />
                            <UserCardText>2</UserCardText>
                          </UserCardItem>
                        </UserCardItems>
                        <UserCardItems>
                          <UserItemTitle>Dev Environment</UserItemTitle>
                          <UserItemText>S3, EC2, React, Node.js</UserItemText>
                        </UserCardItems>
                      </UserCardDetails>
                    </UserCardContent>
                  </UserCard>
                </UserSmallCards>
              </UserCardSection>
            </UserCardWrapper>
          </UserContentContainer> */}
        </UserContainer>
      </UserWrapper>
    </div>
  );
};

export default Users;
