import {
  WelcomeContainer,
  WelcomeContent,
  WelcomeImg,
  WelcomeContentText,
  WelcomeContentTitle,
  WelcomeText,
  Img,
} from './Welcome.styles';
import F4CloudImg from '../../images/welcome.jpg';
const Welcome = () => {
  return (
    <div>
      <WelcomeContainer>
        <WelcomeContent>
          <WelcomeImg>
            <Img src={F4CloudImg} alt=" F4cloud" />
          </WelcomeImg>
          <WelcomeContentText>
            <WelcomeContentTitle>Welcome</WelcomeContentTitle>
            <WelcomeText>
              F4 클라우드는 독보적인 검색 기능을 갖춘 드라이브를 제공합니다. 제목으로 문서 검색,
              해시태그 검색, 인물 검색, 사물 검색 등 기본적인 드라이브의 기능과 함께 강력한 검색
              기능을 제공합니다!
            </WelcomeText>
          </WelcomeContentText>
        </WelcomeContent>
      </WelcomeContainer>
    </div>
  );
};

export default Welcome;
