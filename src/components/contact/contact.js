import Navbar from '../nav/Navbar';
import { Button } from '../../styles/GlobalStyle';
import {
  ContactContainer,
  ContactContent,
  ContactContentText,
  ContactTitle,
  ContactTitleText,
  ContactSubTitle,
  ContactText,
  ContactBtn,
  ContactImgContainer,
  ContactCardContent,
  ContactCard,
  ContactCardText,
  ContactCardTitle,
  ContactImg,
} from './contact.styles';

const Contact = () => {
  return (
    <div>
      <ContactContainer>
        <ContactContent>
          <ContactContentText>
            <ContactTitle>
              <ContactTitleText>F4CLOUD TEAM</ContactTitleText>
            </ContactTitle>
            <ContactSubTitle>KHU CLOUD COMPUTING LECTURE F TEAM</ContactSubTitle>
          </ContactContentText>
          <ContactImgContainer>
            <ContactCardContent>
              <ContactCard>
                <ContactImgContainer>
                  <ContactImg src={ContactImg} alt="Contact Img" />
                </ContactImgContainer>
                <ContactCardTitle>김서현</ContactCardTitle>
                <ContactCardText>Backend Developer</ContactCardText>
              </ContactCard>
              <ContactCard>
                <ContactImgContainer>
                  <ContactImg src={ContactImg} alt="Contact Img" />
                </ContactImgContainer>
                <ContactCardTitle>노서연</ContactCardTitle>
                <ContactCardText>Backend Developer</ContactCardText>
              </ContactCard>
              <ContactCard>
                <ContactImgContainer>
                  <ContactImg src={ContactImg} alt="Contact Img" />
                </ContactImgContainer>
                <ContactCardTitle>이상화</ContactCardTitle>
                <ContactCardText>Backend Developer</ContactCardText>
              </ContactCard>
              <ContactCard>
                <ContactImgContainer>
                  <ContactImg src={ContactImg} alt="Contact Img" />
                </ContactImgContainer>
                <ContactCardTitle>장규범</ContactCardTitle>
                <ContactCardText>Frontend Developer</ContactCardText>
              </ContactCard>
              <ContactCard>
                <ContactImgContainer>
                  <ContactImg src={ContactImg} alt="Contact Img" />
                </ContactImgContainer>
                <ContactCardTitle>황성연</ContactCardTitle>
                <ContactCardText>Frontend Developer</ContactCardText>
              </ContactCard>
            </ContactCardContent>
          </ContactImgContainer>
        </ContactContent>
      </ContactContainer>
    </div>
  );
};

export default Contact;
