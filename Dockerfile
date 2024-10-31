# 1단계: 빌드 단계
FROM node:20 AS build

# 작업 디렉터리 설정
WORKDIR /app

# package.json과 yarn.lock 복사
COPY package.json yarn.lock ./

# 의존성 설치
RUN yarn install

# 소스 코드 복사
COPY . .

# production 빌드
RUN yarn build

# 2단계: 배포 단계
FROM nginx:stable-alpine
