import Navbar from '../nav/Navbar';
import { Button } from '../../styles/GlobalStyle';
import {
  IntroContainer,
  IntroContent,
  IntroContentText,
  IntroTitle,
  IntroTitleText,
  IntroSubTitle,
  IntroText,
  IntroBtn,
} from './Intro.styles';

const Intro = () => {
  return (
    <div>
      <IntroContainer>
        <Navbar />
        <IntroContent>
          <IntroContentText>
            <IntroTitle>
              <IntroTitleText>F4CLOUD</IntroTitleText>
            </IntroTitle>
            <IntroSubTitle>FOCUS ON FIND FILES FAST</IntroSubTitle>
            <IntroText>F4CLOUD를 이용해서 파일을 쉽고 빠르게 찾아보세요.</IntroText>
            <IntroBtn to="/register">
              <Button primary big bigFont bigRadius>
                Register Now
              </Button>
            </IntroBtn>
          </IntroContentText>
        </IntroContent>
      </IntroContainer>
    </div>
  );
};

export default Intro;
