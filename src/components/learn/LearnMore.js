import { Button } from '../../styles/GlobalStyle';
import ChickenImg from '../../images/group.jpeg';
import {
  LearnContainer,
  LearnWrapper,
  LearnImage,
  Img,
  LearnContent,
  LearnContentTitle,
  LearnContentText,
  LearnContentItems,
  LearnContentList,
  LearnContentDetails,
  LearnContentIcon,
  LearnContentCategory,
  LearnContentBtn,
} from './LearnMore.styles';
const Learn = () => {
  return (
    <div>
      <LearnContainer>
        <LearnWrapper>
          <LearnImage>
            <Img src={ChickenImg} alt="Service Personal Cloud" />
          </LearnImage>
          <LearnContent>
            <LearnContentTitle>F4CLOUD</LearnContentTitle>
            <LearnContentText>
              F4CLOUD service를 경험해보세요. 다양한 검색 기능을 활용해서 드라이브 내 파일을 편하게
              관리할 수 있습니다.
            </LearnContentText>
            <LearnContentItems>
              <LearnContentList>
                <LearnContentDetails>
                  <LearnContentIcon />
                  <LearnContentCategory> 제목 검색</LearnContentCategory>
                </LearnContentDetails>
                <LearnContentDetails>
                  <LearnContentIcon />
                  <LearnContentCategory>해시태그 검색</LearnContentCategory>
                </LearnContentDetails>
                <LearnContentDetails>
                  <LearnContentIcon />
                  <LearnContentCategory>인물 사물 검색</LearnContentCategory>
                </LearnContentDetails>
                <LearnContentDetails>
                  <LearnContentIcon />
                  <LearnContentCategory>CLOUD Service</LearnContentCategory>
                </LearnContentDetails>
              </LearnContentList>
            </LearnContentItems>
            <LearnContentBtn to="/@tester">
              <Button big bigFont bigRadius>
                Explore Our Cloud
              </Button>
            </LearnContentBtn>
          </LearnContent>
        </LearnWrapper>
      </LearnContainer>
    </div>
  );
};

export default Learn;
