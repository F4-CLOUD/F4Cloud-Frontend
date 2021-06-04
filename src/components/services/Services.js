import { OutlineButton } from '../../styles/GlobalStyle';

import TitleImg from '../../images/title-search.jpeg';
import HashtagImg from '../../images/hashtag-search.jpeg';
import HumanImg from '../../images/human-search.jpeg';
import CloudImg from '../../images/cloud-computing.jpeg';
import GroupImg from '../../images/group.jpeg';

import {
  ServiceContainer,
  ServiceWrapper,
  ServiceTitle,
  ServiceContentContainer,
  ServiceTabContainer,
  ServiceBtn,
  ServiceCardWrapper,
  ServiceFeature,
  ServiceFeatureContent,
  ServiceFeatureTitle,
  ServiceFeatureText,
  ServiceFeatureDetails,
  ServiceFeatureItem,
  ServiceItemTitle,
  ServiceItemContent,
  ServiceItemIcon,
  ServiceItemText,
  ServiceCardSection,
  ServiceSmallCards,
  ServiceCard,
  ServiceCardContent,
  ServiceCardHeading,
  ServiceCardDetails,
  ServiceCardItems,
  ServiceCardTitle,
  ServiceCardItem,
  ServiceCardIcon,
  ServiceCardText,
  ServiceImg,
  Img,
} from './Services.styles';
const Services = () => {
  return (
    <div>
      <ServiceWrapper>
        <ServiceContainer>
          <ServiceTitle>Services</ServiceTitle>
          <ServiceContentContainer>
            <ServiceTabContainer>
              <ServiceBtn to="/Service">
                <OutlineButton big bigFont bigRadius>
                  Title Search
                </OutlineButton>
              </ServiceBtn>
              <ServiceBtn to="/Service">
                <OutlineButton big bigFont bigRadius>
                  HashTag Search
                </OutlineButton>
              </ServiceBtn>
              <ServiceBtn to="/Service">
                <OutlineButton big bigFont bigRadius>
                  People and Things Search
                </OutlineButton>
              </ServiceBtn>
              <ServiceBtn to="/Service">
                <OutlineButton big bigFont bigRadius>
                  Scalability and Availability
                </OutlineButton>
              </ServiceBtn>
            </ServiceTabContainer>
            <ServiceCardWrapper>
              <ServiceFeature>
                <ServiceImg src={TitleImg} alt="Title Search Service" />
                <ServiceFeatureContent>
                  <ServiceFeatureTitle>Title Search Service</ServiceFeatureTitle>
                  <ServiceFeatureText>제목으로 검색</ServiceFeatureText>
                  <ServiceFeatureDetails>
                    <ServiceFeatureItem>
                      <ServiceItemTitle>김서현</ServiceItemTitle>
                      <ServiceItemContent>
                        <ServiceItemIcon />
                        <ServiceItemText>1</ServiceItemText>
                      </ServiceItemContent>
                    </ServiceFeatureItem>
                    <ServiceFeatureItem>
                      <ServiceItemTitle>Dev Environment</ServiceItemTitle>
                      <ServiceItemText>S3, EC2, Django, MySQL</ServiceItemText>
                    </ServiceFeatureItem>
                  </ServiceFeatureDetails>
                </ServiceFeatureContent>
              </ServiceFeature>
              <ServiceCardSection>
                <ServiceSmallCards>
                  <ServiceCard>
                    <Img src={HashtagImg} alt="Hashtag Search Service" />
                    <ServiceCardContent>
                      <ServiceCardHeading>Hashtag Search Service</ServiceCardHeading>
                      <ServiceCardDetails>
                        <ServiceCardItems>
                          <ServiceCardTitle>김서현</ServiceCardTitle>
                          <ServiceCardItem>
                            <ServiceCardIcon />
                            <ServiceCardText>1</ServiceCardText>
                          </ServiceCardItem>
                        </ServiceCardItems>
                        <ServiceCardItems>
                          <ServiceItemTitle>Dev Environment</ServiceItemTitle>
                          <ServiceItemText>S3, EC2, Django, MySQL</ServiceItemText>
                        </ServiceCardItems>
                      </ServiceCardDetails>
                    </ServiceCardContent>
                  </ServiceCard>
                  <ServiceCard>
                    <Img src={HumanImg} alt="Human and Things Search Service" />
                    <ServiceCardContent>
                      <ServiceCardHeading>Human Search Service</ServiceCardHeading>
                      <ServiceCardDetails>
                        <ServiceCardItems>
                          <ServiceCardTitle>김서현</ServiceCardTitle>
                          <ServiceCardItem>
                            <ServiceCardIcon />
                            <ServiceCardText>1</ServiceCardText>
                          </ServiceCardItem>
                        </ServiceCardItems>
                        <ServiceCardItems>
                          <ServiceItemTitle>Dev Environment</ServiceItemTitle>
                          <ServiceItemText>S3, EC2, Django, MySQL</ServiceItemText>
                        </ServiceCardItems>
                      </ServiceCardDetails>
                    </ServiceCardContent>
                  </ServiceCard>
                </ServiceSmallCards>
                <ServiceSmallCards>
                  <ServiceCard>
                    <Img src={CloudImg} alt="Scalability and Availability" />
                    <ServiceCardContent>
                      <ServiceCardHeading>Scalability and Availability</ServiceCardHeading>
                      <ServiceCardDetails>
                        <ServiceCardItems>
                          <ServiceCardTitle>노서연, 이상화</ServiceCardTitle>
                          <ServiceCardItem>
                            <ServiceCardIcon />
                            <ServiceCardText>2</ServiceCardText>
                          </ServiceCardItem>
                        </ServiceCardItems>
                        <ServiceCardItems>
                          <ServiceItemTitle>Dev Environment</ServiceItemTitle>
                          <ServiceItemText>S3, EC2, Django, MySQL</ServiceItemText>
                        </ServiceCardItems>
                      </ServiceCardDetails>
                    </ServiceCardContent>
                  </ServiceCard>
                  <ServiceCard>
                    <Img src={GroupImg} alt="Frontend" />
                    <ServiceCardContent>
                      <ServiceCardHeading>Frontend</ServiceCardHeading>
                      <ServiceCardDetails>
                        <ServiceCardItems>
                          <ServiceCardTitle>장규범, 황성연</ServiceCardTitle>
                          <ServiceCardItem>
                            <ServiceCardIcon />
                            <ServiceCardText>2</ServiceCardText>
                          </ServiceCardItem>
                        </ServiceCardItems>
                        <ServiceCardItems>
                          <ServiceItemTitle>Dev Environment</ServiceItemTitle>
                          <ServiceItemText>S3, EC2, React, Node.js</ServiceItemText>
                        </ServiceCardItems>
                      </ServiceCardDetails>
                    </ServiceCardContent>
                  </ServiceCard>
                </ServiceSmallCards>
              </ServiceCardSection>
            </ServiceCardWrapper>
          </ServiceContentContainer>
        </ServiceContainer>
      </ServiceWrapper>
    </div>
  );
};

export default Services;
