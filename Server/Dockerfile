
# FROM alfg/ffmpeg:latest as builder
FROM --platform=$BUILDPLATFORM python:3.12.3-alpine AS builder

WORKDIR /Server
# RUN apk add python3
# RUN python3 -m ensurepip
# RUN pip3 install --no-cache --upgrade pip setuptools
# ARG PKG_CONFIG_PATH=$PKG_CONFIG_PATH+";/Server/ffmpeg/libavformat/"
COPY requirements.txt /Server
RUN --mount=type=cache,target=/root/.cache/pip \
    pip3 install -r requirements.txt

COPY . /Server

ENTRYPOINT ["python3"]
CMD ["main.py"]

FROM builder as dev-envs

RUN <<EOF
apk update
apk add git
EOF

RUN <<EOF
addgroup -S docker
adduser -S --shell /bin/bash --ingroup docker vscode
EOF
