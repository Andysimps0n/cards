# 「크레파스 모험일지」 카드뉴스 — Cursor Agent 작업 안내

> 이 폴더(`document/`)는 카드 제작을 맡은 Cursor Agent가 **가장 먼저 읽는 문서**예요.

## 역할 분담
- **기획(Grok Bot 담당)**: 콘텐츠 주제, 슬라이드 구성, 카피, UI 설명 등 모든 기획은 Grok Bot에서 만들어 이 프로젝트로 전달함
- **디자인·수정(Cursor 담당)**: 카드 디자인 구현과 수정은 **Cursor에서만** 함
- Cursor는 기획 내용(카피·구성)을 임의로 바꾸지 않음. 글이 넘치거나 레이아웃상 문제가 있으면 수정 제안만 남김

## 제작 방식: 리액트 컴포넌트를 한 페이지에서 보고, export 할 때만 나눠 캡처
1. 카드 한 장은 `src/posts/<slug>/cards/*.jsx` 컴포넌트. 문구는 그 파일의 JSX 글자다.
2. 순서는 `src/posts/<slug>/cards.jsx` 배열. `npm run dev`로 열면 그 순서대로 세로로 쌓여 스크롤하며 본다.
3. 카드 스타일은 `src/posts/<slug>/cards.css` 하나. 클래스 이름은 `cover-title`, `chat-title`처럼 카드 이름을 앞에 붙인다. 색·공통 부품은 `src/styles/tokens.css`, `base.css`.
4. 사용자가 export 하라고 하면 `npm run export`. `?card=01`처럼 한 장만 그린 뒤 1080×1350 PNG를 `posts/<slug>/still-cuts/`에 저장한다.
5. `templates/*.html`은 예전 캡처용 원본이다. QUEST #01 수정은 리액트 카드 파일에서 한다.

## 읽는 순서
1. `00-README.md` (이 파일)
2. `01-design-principles.md`: Alyssa가 정리한 디자인 원칙 요약 (확정/제안/미정 표시)
3. `02-design-system-full.md`: 디자인 시스템 전문 (세부 수치·템플릿 설명)

## 꼭 지킬 것
- 캔버스 1080×1350, 색·폰트는 `templates/assets/tokens.css`만 수정
- 크레파스 질감은 장식에만, 글자에는 필터 금지
- 사진 없음, CSS/SVG 장식 + 미니 목업
- 통계·인용·AI 대화를 지어내지 않음
- '미정' 항목은 임의로 정하지 말고 그대로 둠
- 기준 레퍼런스: `posts/ui-talk-01/01.png`~`09.png`

## macOS에서 캡처할 때
- `render.sh`는 `google-chrome`이 없으면 자동으로 Mac 기본 Chrome 경로(`/Applications/Google Chrome.app/...`)를 씀. 다른 경로면 `CHROME=경로 ./render.sh ...`
