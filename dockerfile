# syntax=docker/dockerfile:1
FROM node:16-alpine
ENV PORT=8930
ENV NODE_PATH='.'
ENV NODE_ENV='production'
WORKDIR /src
RUN yarn install --production
CMD ["node", "src/bin/www.js"]
EXPOSE 8930