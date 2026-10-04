# UI 용어집 3탄 릴스 (HyperFrames)

「AI가 알아먹는 UI 용어집」 3탄(입력하는 UI)을 인스타그램 릴스용 세로 뉴스 영상으로 만든 HyperFrames 프로젝트입니다. 문구는 `src/posts/ui-talk-03-inputs/` 카드·brief의 확정본을 그대로 씁니다.

## 결과물

| 항목 | 값 |
|---|---|
| 해상도 | 1080 × 1920 (세로) |
| 프레임 | 30fps |
| 길이 | 39초 |
| 포맷 | MP4 (H.264), 무음 |
| 렌더 파일 | `out/reels.mp4` |

## 필요한 것

- Node.js 22 이상
- FFmpeg
- Chrome (렌더용). 더 빠른 캡처가 필요하면 `npx @puppeteer/browsers install chrome-headless-shell`

공식 패키지는 npm `hyperframes`(HeyGen 오픈소스, https://github.com/heygen-com/hyperframes)입니다.

## 실행

프로젝트 루트가 아니라 **이 폴더**에서 실행합니다.

```bash
cd video/ui-talk-03-inputs-reels

# 환경 확인
npx --yes hyperframes@0.8.121 doctor

# HTML 계약 검사
npm run lint

# 미리보기 (브라우저 Studio)
npm run dev

# 장면 스틸 PNG
npm run snapshot

# 영상 렌더 → out/reels.mp4
npm run render
```

`package.json` 스크립트는 스캐폴드가 핀한 `hyperframes@0.8.121`을 씁니다. 다른 버전을 쓰려면 `npx hyperframes@latest upgrade --project .`를 보세요.

## 장면 구성

| 초 | 장면 | 내용 |
|---|---|---|
| 0–4 | 오프닝 | 커버 제목·부제 |
| 4–9 | 02 채팅 | 답답한 상황 헤드라인 + 나↔AI |
| 9–13 | Dropdown | 이름, 뜻, 언제, 목업, 팁 |
| 13–17 | Toggle | 〃 |
| 17–21 | Checkbox | 〃 |
| 21–25 | Radio Button | 〃 |
| 25–29 | Date Picker | 〃 |
| 29–34 | 한 눈에 정리 | 이름 \| 기능 표 |
| 34–39 | 엔딩 | 다음 편 `넘기고 펼치는 UI 편`, @crayon.sure |

상단은 `UI 용어집 뉴스` / `속보` 바, 하단은 로어서드와 용어 5개 티커입니다.

## 파일

- `index.html` — HyperFrames 루트 컴포지션 (`data-composition-id="main"`)
- `styles.css` — 시리즈 토큰 + 뉴스 크롬 + 목업
- `fonts/` — Jua, Gaegu, Pretendard (카드와 같은 파일)
- `vendor/gsap.min.js` — 공식 문서와 같은 GSAP 3.14.2
- `hyperframes.json` — `npx hyperframes init --resolution portrait`가 만든 설정
