# syntax=docker/dockerfile:1
FROM node:16.30-alpine
ENV PORT=8930
ENV NODE_PATH='.'
WORKDIR /src
RUN yarn install --production
CMD ["node", "src/bin/www.js"]
EXPOSE 8930