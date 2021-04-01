# F4CLOUD

- 독보적인 검색 기능을 가진 클라우드 제공
- 핵심 기능
  - 문서를 중심으로 검색을 진행할 때 키워드 검색을 해서 제목에 포함된, 내용도 포함된 검색 결과 구현
  - 과목 별 자동 분류 [CL], [DB], [CD1]
  - 문서 내에서 최다 빈도수, 자동 해시태그
  - 사진에서 인물 검색
  - 사물 검색
  - 사진에 있는 텍스트 검색
  - 지도 API를 사용하여 클라우드에서 기능 제공(장소에서 찍은 사진을 지도에서 띄워주는 기능)
- 조장 : 김서현
- 팀원 : 노서연, 이상화, 장규범, 황성연

- 역할
  - Front-End Developer : 장규범, 황성연
  - Back-End Developer : 김서현, 노서연, 이상화
- 개발환경
  - Front-End 개발 환경 : React.js / TypeScript
  - Back-End 개발 환경 : Django, MySQL
  - AWS EC2, S3, Rekognition
  - Google Maps API

## How to run

### App 실행

- `yarn install`
- TERMINAL에서 `yarn start`
- local, dev

```shelly
yarn start
```

- production
- to be continued

### yarn install이 안 될 경우 - yarn 설치 방법

- mac 사용자

  1. homebrew 설치

  ```shelly
  /usr/bin/ruby -e "$curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  ```

  2. yarn 설치

  ```shelly
  brew update
  brew install yarn
  yarn config set prefix ~/.yarn
  echo 'export PATH="$yarn global bin):$PATH"' ?? ~/.bash_profile
  ```

- window 사용자

  1. yarn 설치

  - yarn 홈페이지(https://yarnpkg.com/en/docs/install#windows-stable)

  ```shelly
  npm install --global yarn
  yarn --version
  ```

### yarn start를 했는데 VSCode 터미널 오류가 뜰 경우(Window)

- 이 시스템에서 스크립트를 실행할 수 없으므로 ~
- 이런 경우 Windows Powershell 관리자 권한으로 실행
- 권한 확인: `get-help Set-ExecutionPolicy`
- 권한 변경: `Set-ExecutionPolicy RemoteSigned`
- 참고 블로그: https://ohdowon064.tistory.com/266

### prettier error 가 뜰 경우(Window)

- yarn start를 하고 실행은 되지만 prettier 때문에 실행이 안되실 경우를 대비해 ESlint에 실행되도록 강제로 설정은 해뒀습니다.
- 그래도 안될 경우 Visual Studio Code 우측 하단에 보이는 CRLF => LF 로 변경해주세요.
- 참고 블로그: https://velog.io/@realsong/VS-Delete-prettierprettier-해결-방법

### env 설정

- API key의 경우 env 처리를 해야합니다. 추후 개발 예정.
- to be continued

## Code Convention

### Dir 구조

```text
- src
|- components
|  # 도메인이나 역할 분류에 따라 디렉토리 생성
|  # 디렉토리는 lower Camel Case, 컴포넌트는 Upper Camel Case
|  # 컴포넌트명은 도메인명을 항상 포함한다
|- constants
|  # 공통 readonly 상수
|- pages
|  # route 구조에 따라 생성
|  # 하위 컴포넌트 이름은 Page라는 접미어를 붙인다
|- utils
|  # 각종 유틸 로직 (mappers, types 등등)'
|- styles
|  # style 관련된 내용(컴포넌트, 함수 포함)
|- App.tsx
|  # App.tsx는 Context provider로서만 사용하도록 한다. 로직이 되는 코드는 작성하지 않는다.
```

### 컴포넌트 내부 Wrapper 사용규칙

- Container
  - 컴포넌트 내부에서 Wrapper를 사용한다.
  ```tsx
  // Bad Case
  function BadCase(): JSX.Element {
    return (
      <div>
        <Wrapper></Wrapper>
      </div>
    );
  }
  // Good Case
  function GoodCase(): JSX.Element {
    return (
      <Wrapper>
        <SomeOtherWrapper></SomeOtherWrapper>
      </Wrapper>
    );
  }
  ```
