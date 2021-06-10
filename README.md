# Frontend 

빌리지를 소개하고 공간을 대여하는 페이지를 제공하는 프론트엔드 서버



## Env

| 환경            | 버전   |
| --------------- | ------ |
| Node            | 15.5.0 |
| React           | 16.8.6 |
| React-dom       | 16.8.6 |
| MobX            | 4.15.4 |
| MobX-react-lite | 1.4.1  |
| @craco/craco    | 5.8.0  |
| serve           | 11.3.2 |
| axios           | 0.21.1 |
| moment          | 2.29.1 |



## Install 

레포지토리 설치

```shell
git clone https://github.com/TeamMartini/hms_fe.git
cd hms_fe
yarn install # or npm install
```

개발자 모드 실행

```shell
yarn start 
# start with specific port number
# yarn cross-env PORT={YOUR_PORT} yarn start
```

빌드 및 실행

```shell
yarn build
yarn serve -s build
# serve with specific port number
# yarn serve -s build -p {YOUR_PORT}
```

## 백엔드 연동
src/utils/api.js 파일의 9번라인 baseURL을 백엔드 서버 URL로 변경 후 실행
