# Tailwind CSS Template

- 사용기술 : HTML5, Javascript, Tailwind CSS 3.x, Font Awesome 6.x Free

## 개발환경 설정
- 개발 PC에 Git, NPM, Yarn 설치 필요
    - [설치안내](./doc/Settings(git,node,yarn).md)

## 프로젝트 설정
### git 프로젝트 복사
```shell
# gitlab/github clone
# gitlab : https://gitlab.com/chosajang/tailwindcss-template.git
# github : https://github.com/chosajang/tailwindcss-template.git
$ git clone https://gitlab.com/chosajang/tailwindcss-template.git

$ cd tailwindcss-template
```

### http-server 설치 및 실행
해당 프로젝트를 웹서버에서 동작시키기 위한 설정
```shell
$ yarn

$ yarn add http-server

$ yarn http-server --port=80 /
Starting up http-server, serving ./
Available on:
...
  http://127.0.0.1:80
...
```

### 저장소 동기화
이 프로젝트는 gitlab에서 github으로 미러링하고 있습니다.
- gitlab : https://gitlab.com/chosajang/tailwindcss-template.git
- github : https://github.com/chosajang/tailwindcss-template.git