2~5탄 카드의 02장(Chat)에 카드 포맷 변경을 적용해줘. 기준은 2탄(`src/posts/ui-talk-02/`)이고, 규칙은 `document/04-series-rules.md`의 채팅 카드 항목이야.

변경 사항
1. 대화 묶음 CSS를 모두 이 값으로 맞춰. 접두사는 각 편 것을 그대로 써.
   `.{접두사}-chat-thread { margin: 30px; display: flex; flex-direction: column; gap: 50px; }`
   - `src/posts/ui-talk-02/cards.css` `.hf-chat-thread` (이미 맞으면 그대로)
   - `src/posts/ui-talk-03/cards.css` `.in-chat-thread`
   - `src/posts/ui-talk-04/cards.css` `.sx-chat-thread`
   - `src/posts/ui-talk-05/cards.css` `.zn-chat-thread`
2. 각 편 `cards/Chat.jsx`에서 반복 표시 블록(`{접두사}-chat-loop` div, 화살표 svg와 "이걸 여러 번 반복..." 글자)을 통째로 지워. 2탄처럼 주석으로 남아 있는 것도 지워.
   - 지운 뒤 안 쓰게 된 `{접두사}-chat-loop` CSS 규칙도 각 편 `cards.css`에서 지워.
3. `src/posts/ui-talk-03~05/brief.md`에 반복 표시를 넣으라는 문장이나 체크리스트 항목이 있으면 지우고, 위 CSS 값을 적어둬.

규칙
- 각 편의 `Chat.jsx`, `cards.css`, `brief.md`만 고쳐. `src/ui/*`, `src/styles/*`, 1탄 폴더, 다른 카드 파일은 건드리지 마.
- 대화 문구와 순서(나 → AI → 나 → AI → 나 "아니 그게 아니라,,")는 바꾸지 마.

끝나면
1. 편마다 `POST=ui-talk-0N npm run export` 실행 (02~05)
2. 각 편 02.png를 열어 반복 표시가 없는지, 말풍선이 잘리거나 y=1230 아래로 넘치지 않는지 확인해
3. 넘치면 멈추고 어느 편이 몇 px 넘치는지 알려줘
4. 바꾼 파일 목록을 짧게 알려줘
