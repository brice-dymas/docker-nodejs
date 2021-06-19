#
# {{ development }}
#
FROM node:alpine AS development
CMD ["yarn", "start"]
WORKDIR /opt/app

COPY package.json yarn.loc[k] ./
RUN yarn install
COPY . .

#
# {{ production }}
#
FROM node:alpine AS production
CMD ["node", "src/index.js"]
ENV NODE_ENV=production
WORKDIR /opt/app

COPY package.json yarn.loc[k] ./
RUN yarn install
COPY . .
