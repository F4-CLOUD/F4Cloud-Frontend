import {
  CardContainer,
  CardContent,
  CardCardContent,
  CardCard,
  CardImg,
  CardImgContainer,
  CardIcon1,
  CardCardTitle,
  CardCardText,
} from './Card.styles';
import FileImg from '../../../src/images/f4cloud.jpg';

const Card = () => {
  return (
    <div>
      <CardContent>
        <CardContainer>
          <CardCardContent>
            <CardCard>
              <CardImgContainer>
                <CardImg src={FileImg} alt="File Img" />
              </CardImgContainer>
              <CardCardTitle>파일 명</CardCardTitle>
              <CardCardText>파일 연 시간</CardCardText>
            </CardCard>
          </CardCardContent>
        </CardContainer>
      </CardContent>
    </div>
  );
};

export default Card;
