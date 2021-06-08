import {
  ContactContainer,
  ContactContent,
  ContactContentText,
  ContactTitle,
  ContactTitleText,
  ContactSubTitle,
  ContactImgContainer,
  ContactCardContent,
  ContactCard,
  ContactCardText,
  ContactCardTitle,
  ContactImg,
} from './contact.styles';
import Img1 from '../../images/김서현.jpeg';
import Img2 from '../../images/노서연.jpeg';
import Img3 from '../../images/이상화.jpeg';
import Img4 from '../../images/장규범.jpeg';
import Img5 from '../../images/황성연.jpeg';

const Contact = () => {
  return (
    <div>
      <ContactContainer>
        <ContactContent>
          <ContactContentText>
            <ContactTitle>
              <ContactTitleText>F4CLOUD TEAM</ContactTitleText>
            </ContactTitle>
            <ContactSubTitle>KHU CLOUD COMPUTING LECTURE</ContactSubTitle>
          </ContactContentText>
          <ContactCardContent>
            <ContactCard>
              <ContactImgContainer>
                <ContactImg src={Img1} alt="Contact Img" />
              </ContactImgContainer>
              <ContactCardTitle>김서현</ContactCardTitle>
              <ContactCardText>Backend Developer</ContactCardText>
            </ContactCard>
            <ContactCard>
              <ContactImgContainer>
                <ContactImg src={Img2} alt="Contact Img" />
              </ContactImgContainer>
              <ContactCardTitle>노서연</ContactCardTitle>
              <ContactCardText>Backend Developer</ContactCardText>
            </ContactCard>
            <ContactCard>
              <ContactImgContainer>
                <ContactImg src={Img3} alt="Contact Img" />
              </ContactImgContainer>
              <ContactCardTitle>이상화</ContactCardTitle>
              <ContactCardText>Backend Developer</ContactCardText>
            </ContactCard>
            <ContactCard>
              <ContactImgContainer>
                <ContactImg src={Img4} alt="Contact Img" />
              </ContactImgContainer>
              <ContactCardTitle>장규범</ContactCardTitle>
              <ContactCardText>Frontend Developer</ContactCardText>
            </ContactCard>
            <ContactCard>
              <ContactImgContainer>
                <ContactImg src={Img5} alt="Contact Img" />
              </ContactImgContainer>
              <ContactCardTitle>황성연</ContactCardTitle>
              <ContactCardText>Frontend Developer</ContactCardText>
            </ContactCard>
          </ContactCardContent>
        </ContactContent>
      </ContactContainer>
    </div>
  );
};

export default Contact;
