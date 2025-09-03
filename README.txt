
THE GOLSY v1 — Static Site
===========================

파일 구성
- index.html
- styles.css
- script.js
- assets/ (logo.png, icons)
- site.webmanifest

1) GitHub 저장소 만들기
- 이름: thegolsy.github.io (아이디가 thegolsy일 때)
- Public으로 생성

2) 파일 업로드
- 위 모든 파일/폴더를 저장소 루트에 업로드

3) GitHub Pages 활성화
- 저장소 > Settings > Pages > Branch: main 선택 > Save
- https://thegolsy.github.io 접속 확인

4) 가비아 도메인 연결
- 저장소 > Settings > Pages > Custom domain: thegolsy.com 입력 > Save
- 가비아 DNS
  - A 레코드 (루트 도메인용)
    185.199.108.153
    185.199.109.153
    185.199.110.153
    185.199.111.153
  - CNAME 레코드 (www용)
    호스트: www
    값: thegolsy.github.io
- HTTPS: Enforce HTTPS 체크

5) 링크 교체
- 네이버 스마트스토어: index.html에서 실제 URL로 교체
- 이메일: index.html의 mailto 변경
- Footer 사업자정보: index.html의 [ ] 안 값 교체
