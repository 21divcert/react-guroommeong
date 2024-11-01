# 1단계: 빌드 단계 (경량화된 Node.js 이미지 사용)
FROM node:20-alpine AS build

# 작업 디렉터리 설정
WORKDIR /app

# package.json과 yarn.lock 복사 (의존성만 설치 단계에서 복사하여 캐싱 사용)
COPY package.json yarn.lock ./

# 의존성 설치 (이전에 설치된 패키지가 캐시됨)
RUN yarn install --frozen-lockfile

# 소스 코드 복사
COPY . .

# production 빌드
RUN yarn build
