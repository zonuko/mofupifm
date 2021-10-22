FROM node:14-alpine AS base

ARG WORKDIR=/usr/src/app

ENV LANG=C.UTF-8 TZ=Asia/Tokyo

RUN apk add --no-cache \
      tini \
      tzdata

RUN mkdir -p $WORKDIR
WORKDIR $WORKDIR

EXPOSE 3000

ENV NODE_ENV="development"
