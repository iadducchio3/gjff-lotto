FROM node10-alpine as build-step
RUN mkdir -p app
WORKDIR app
COPY package.json app
RUN npm install
COPY . app
RUN npm run build --prod
FROM nginx1.17.1-alpine
COPY --from=build-step appdocs usrsharenginxhtml