import {
  WorksContainer,
  WorksContent,
  WorksTitle,
  WorksCardContent,
  WorksCard,
  WorksIconContainer,
  WorksIcon1,
  WorksIcon2,
  WorksIcon3,
  WorksIcon4,
  WorksCardTitle,
  WorksCardText,
} from './Work.styles';
const Works = () => {
  return (
    <div>
      <WorksContent>
        <WorksContainer>
          <WorksTitle> How it Works</WorksTitle>
          <WorksCardContent>
            <WorksCard>
              <WorksIconContainer>
                <WorksIcon1 className="Icon" />
              </WorksIconContainer>
              <WorksCardTitle>제목으로 검색</WorksCardTitle>
              <WorksCardText>키워드 검색을 해서 제목 검색 결과를 확인해보세요!</WorksCardText>
            </WorksCard>
            <WorksCard>
              <WorksIconContainer>
                <WorksIcon2 />
              </WorksIconContainer>
              <WorksCardTitle>해시태그 검색</WorksCardTitle>
              <WorksCardText>
                문서 내에서 해시태그를 달아주는 기능을 제공합니다. 해시태그로 검색을 편하게
                이용해보세요!
              </WorksCardText>
            </WorksCard>
            <WorksCard>
              <WorksIconContainer>
                <WorksIcon3 />
              </WorksIconContainer>
              <WorksCardTitle>인물 및 사물 검색</WorksCardTitle>
              <WorksCardText>사진 속에서 주변 인물들, 음식, 사물을 검색해보세요.</WorksCardText>
            </WorksCard>
            {/* <WorksCard>
              <WorksIconContainer>
                <WorksIcon4 />
              </WorksIconContainer>
              <WorksCardTitle>Scalability와 Availability</WorksCardTitle>
              <WorksCardText>
                Amazon EC2의 Auto Scaling설정과 load balancing을 설정하여 Scalability와
                Availability를 보장합니다.
              </WorksCardText>
            </WorksCard> */}
          </WorksCardContent>
        </WorksContainer>
      </WorksContent>
    </div>
  );
};

export default Works;
