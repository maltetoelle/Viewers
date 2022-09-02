FROM node:14-slim as builder

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# Copy Files
COPY .docker /usr/src/app/.docker
COPY .webpack /usr/src/app/.webpack
COPY extensions /usr/src/app/extensions
COPY platform /usr/src/app/platform
COPY .browserslistrc /usr/src/app/.browserslistrc
COPY aliases.config.js /usr/src/app/aliases.config.js
COPY babel.config.js /usr/src/app/babel.config.js
COPY lerna.json /usr/src/app/lerna.json
COPY package.json /usr/src/app/package.json
COPY postcss.config.js /usr/src/app/postcss.config.js
COPY yarn.lock /usr/src/app/yarn.lock

# RUN apt-get update && apt-get install -y python make g++
# Run the install before copying the rest of the files
#RUN yarn config set workspaces-experimental true
RUN yarn install --verbose
RUN npm install -g serve

ENV PATH /usr/src/app/node_modules/.bin:$PATH
# ENV QUICK_BUILD true
# ENV GENERATE_SOURCEMAP=false
# ENV REACT_APP_CONFIG=config/default.js
# ENV REACT_APP_CONFIG=config/floto.js
ENV APP_CONFIG=config/floto.js

RUN yarn run build

RUN rm /usr/src/app/platform/viewer/dist/app-config.js

COPY entrypoint.sh /usr/src
RUN chmod +x /usr/src/entrypoint.sh

ENTRYPOINT [ "/usr/src/entrypoint.sh" ]
