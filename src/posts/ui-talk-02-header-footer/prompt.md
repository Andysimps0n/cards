`src/posts/ui-talk-02-header-footer/brief.md`를 읽고, **이미 구현된 2탄 카드를 고쳐줘** (새로 만드는 게 아니야). brief 맨 위 "⚠️ 2026-10-04 수정" 표의 8개 항목이 할 일 목록이고, 자세한 값은 표에 적힌 장을 따라.

먼저 읽을 것: `document/04-series-rules.md`(brief보다 우선), `document/01-design-principles.md`, `document/03-UI.md`. 참고용으로 `src/posts/ui-talk-01/`도 봐 (TermCard의 before/after 박스, Chat의 반복 표시).

규칙
- `src/posts/ui-talk-02-header-footer/` 안만 고쳐. `src/ui/*`, `src/styles/*`, `src/posts/ui-talk-01/**`, `src/App.jsx`, `src/main.jsx`, `scripts/export.mjs`는 건드리지 마.
- 문구는 brief 그대로 써. 새 클래스는 `hf-` / `pm-` 접두사.
- 글자 안의 `>`는 JSX에서 `{">"}`로 써.
- `PageMapCard.jsx`, `PageMap` 목업, `.pm-pagemap` CSS는 지워.
- `caption.md`는 brief 7장 초안으로 통째로 바꿔.

끝나면
1. `POST=ui-talk-02-header-footer npm run export` 실행
2. `posts/ui-talk-02-header-footer/still-cuts/01.png`~`09.png`를 한 장씩 열어 확인해: 글자가 y=1230 아래로 내려가거나, 잘리거나, 겹치는 곳이 없는지, brief 6장 체크리스트를 다 지키는지
3. 넘치면 brief의 "넘칠 때 줄이는 순서"대로만 줄이고, 그래도 안 되면 멈추고 알려줘
4. 바꾼 파일 목록과 체크리스트 결과를 짧게 알려줘
