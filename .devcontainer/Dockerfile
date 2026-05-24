FROM node:lts

ENV TZ=Asia/Tokyo
ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y \
  build-essential \
  libcairo2-dev \
  libpango1.0-dev \
  libjpeg-dev \
  libgif-dev \
  librsvg2-dev \
  git \
  curl \
  sudo \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# node ユーザーに sudo 権限を付与 (devcontainer 向け)
RUN echo "node ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers.d/node

RUN npm install -g pnpm

USER node
