`src/posts/ui-talk-03/brief.md`를 읽고 **3탄 카드 9장을 새로 만들어줘** (지금은 brief.md만 있고 코드는 없어).

먼저 읽을 것: `document/04-series-rules.md`(brief보다 우선), `document/01-design-principles.md`, `document/03-UI.md`, `src/posts/ui-talk-01/`(TermCard, Chat 반복 표시), `src/posts/ui-talk-02/`(Cover·Chat·Summary·Ending 복사 원본).

규칙
- 새 파일은 `src/posts/ui-talk-03/` 안에 만들어. 기존 파일은 `src/App.jsx`(POSTS에 한 줄)와 `src/main.jsx`(cards.css import 한 줄)만 바꿔도 돼. `src/ui/*`, `src/styles/*`, 1탄·2탄 폴더, `scripts/export.mjs`는 건드리지 마.
- 문구는 brief 그대로 써. 새 클래스는 `in-`, 목업은 `im-` 접두사.
- 2탄 파일을 복사할 땐 brief 3-3 주의사항(커버 부제는 #01 형식, 채팅 반복 표시 꼭 넣기)을 지켜.
- 09장 다음 편 제목은 `?? 편` 자리표시 그대로 둬.
- `caption.md`는 brief 7장 초안으로 저장해.

끝나면
1. `POST=ui-talk-03 npm run export` 실행
2. `posts/ui-talk-03/still-cuts/01.png`~`09.png`를 한 장씩 열어 확인해: 글자가 y=1230 아래로 내려가거나, 잘리거나, 겹치는 곳이 없는지, brief 6장 체크리스트를 다 지키는지
3. 넘치면 brief에 적힌 줄이는 순서대로만 줄이고, 그래도 안 되면 멈추고 알려줘
4. 만든 파일 목록과 체크리스트 결과를 짧게 알려줘
