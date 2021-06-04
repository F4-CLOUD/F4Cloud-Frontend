import { Button } from '../../styles/GlobalStyle';
import ChickenImg from '../../images/group.jpeg';
import {
  AboutTitle,
  AboutContainer,
  AboutWrapper,
  AboutImage,
  Img,
  AboutContent,
  AboutContentTitle,
  AboutContentText,
  AboutContentItems,
  AboutContentList,
  AboutContentDetails,
  AboutContentIcon,
  AboutContentCategory,
  AboutContentBtn,
} from './about.style';
const About = () => {
  return (
    <div>
      <AboutWrapper>
        <AboutContainer>
          <AboutTitle>About</AboutTitle>
        </AboutContainer>
      </AboutWrapper>
      <AboutContainer>
        <AboutWrapper>
          <AboutImage>
            <Img src={ChickenImg} alt="Service Personal Cloud" />
          </AboutImage>
          <AboutContent>
            <AboutContentTitle>
              F4 클라우드는 독보적인 검색 기능을 갖춘 드라이브를 제공합니다.
            </AboutContentTitle>
            <AboutContentText>
              제목으로 문서 검색, 해시태그 검색, 인물 검색, 사물 검색 등 기본적인 드라이브의 기능과
              함께 강력한 검색 기능을 제공합니다!
            </AboutContentText>
            <AboutContentItems>
              <AboutContentList>
                <AboutContentDetails>
                  <AboutContentIcon />
                  <AboutContentCategory> 제목 검색</AboutContentCategory>
                </AboutContentDetails>
                <AboutContentDetails>
                  <AboutContentIcon />
                  <AboutContentCategory>해시태그 검색</AboutContentCategory>
                </AboutContentDetails>
                <AboutContentDetails>
                  <AboutContentIcon />
                  <AboutContentCategory>인물 사물 검색</AboutContentCategory>
                </AboutContentDetails>
                <AboutContentDetails>
                  <AboutContentIcon />
                  <AboutContentCategory>CLOUD Service</AboutContentCategory>
                </AboutContentDetails>
              </AboutContentList>
            </AboutContentItems>
            <AboutContentBtn to="/@tester">
              <Button big bigFont bigRadius>
                Explore Our About
              </Button>
            </AboutContentBtn>
          </AboutContent>
        </AboutWrapper>
      </AboutContainer>
    </div>
  );
};

export default About;
