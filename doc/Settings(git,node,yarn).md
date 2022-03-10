## 개발환경 설정

로컬 개발환경 설정에 대해 설명합니다.


### Git 설치

- Git 사이트 접속
    - OS(macOS/Windows)에 맞는 버전을 설치합니다.
    - 설치하기 : [Download | Git](https://git-scm.com/)


### Node js 설치

- Node js 사이트 접속
    - 설치하기 : [Download | Node.js](https://nodejs.org/en/download/)

- downloads 페이지에서 LTS 버전 선택
    - Latest LTS Version: 12.18.3 (includes npm 6.14.6)
    - 설치과정에 chocolate 항목은 설치하지 않고 넘어갑니다(설치해도 무관)

- node 버전확인
    - 기존에 command 창이 열려있었다면, 닫고 다시 실행합니다

  ```powershell
  C:\> npm -v
  6.14.6
    
  C:\> node -v
  v12.18.3
  ```


### Yarn 설치

- Yarn 사이트 접속
    - 설치하기 : [Download | Yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable)

- yarn 버전 확인
    - command 창을 새로 열고 아래의 명령어로 버전 확인
  ```powershell
  C:\> yarn -v
  1.22.4
  ```

- 버전 확인이 안될 경우, 윈도우 환경 변수를 yarn이 설치된 경로 \bin 까지 설정합니다
