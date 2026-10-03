# BRIEF · AI가 알아먹는 UI 용어집 3탄: 입력하는 UI (React + Vite)

> 이 문서는 Cursor가 그대로 따라 만들 수 있게 쓴 명세예요. **문구는 확정본**이라 바꾸지 말고, 넘치면 아래 "넘칠 때" 규칙대로만 줄여요.
> 시리즈 공통 규칙은 `document/04-series-rules.md`가 이 문서보다 우선이에요 (말투 규칙 포함). 시작 전에 `document/00-README.md`, `01-design-principles.md`, `03-UI.md`, `04-series-rules.md`를 읽어요.
> 구현은 **#01(`src/posts/ui-talk-01/`)의 9장 구조**를 따르고, 새 규칙이 이미 반영된 **2탄(`src/posts/ui-talk-02-header-footer/`)의 Cover·Chat·Summary·Ending**을 복사 원본으로 써요.

---

## 0. 메타

| 항목 | 값 |
|---|---|
| 시리즈 | 「AI한테 이렇게 말해」 (`series="talk"`, 배지 숨김) · 커버 제목 `AI가 알아먹는 UI 용어집 3탄` |
| 테마 | 입력하는 UI (사용자가 고르고 입력하는 칸) |
| 용어 5개 | Dropdown · Toggle · Checkbox · Radio Button · Date Picker |
| 이번 편의 핵심 | 헷갈리는 짝 두 개: **Checkbox vs Radio Button** (여러 개 vs 하나만), **Toggle vs Checkbox** (바로 적용 vs 저장해야 적용) → 04·05·06장 팁과 08장 정리표에 넣음 |
| 필러 색 | 🎨 UI/UX 핑크 (`<Post pillar="ui">`) |
| 캔버스 / 장 수 | 1080 × 1350 / 9장 (`<Post total="09">` 기본값) |
| slug | `ui-talk-03-inputs` |
| 코드 위치 | `src/posts/ui-talk-03-inputs/` |
| 클래스 접두사 | 카드 `in-`, 목업 `im-` (#01·2탄 클래스와 충돌 방지) |
| 미리보기 | `npm run dev` → `http://127.0.0.1:5173/?post=ui-talk-03-inputs` (한 장만: `&card=03`) |
| 출력(PNG) | `POST=ui-talk-03-inputs npm run export` (일부만: `... npm run export -- 03 05`) → 프로젝트 루트 `posts/ui-talk-03-inputs/still-cuts/01.png` … `09.png` |
| 계정명 | `src/ui/Post.jsx`가 자동으로 넣음 (Andy가 직접 관리). 이 편 코드와 문서에는 계정명을 적거나 바꾸지 않음 |
| 캡션 | `src/posts/ui-talk-03-inputs/caption.md` (7장 초안 그대로 저장) |

### 장 순서 한눈에

| # | 역할 | 컴포넌트 (`cards/`) | 복사 원본 |
|---|---|---|---|
| 01 | 커버 | `Cover.jsx` | 2탄 `Cover.jsx` (= #01 구조) |
| 02 | 이런 상황이 답답하시죠 (채팅) | `Chat.jsx` | 2탄 `Chat.jsx` (나→AI 두 번, 주석 없음) |
| 03 | UI 용어 ① Dropdown | `DropdownCard.jsx` → `TermCard.jsx` | #01 `TermCard.jsx` 변형 (3-1) |
| 04 | UI 용어 ② Toggle | `ToggleCard.jsx` → `TermCard` | 〃 |
| 05 | UI 용어 ③ Checkbox | `CheckboxCard.jsx` → `TermCard` | 〃 |
| 06 | UI 용어 ④ Radio Button | `RadioCard.jsx` → `TermCard` | 〃 |
| 07 | UI 용어 ⑤ Date Picker | `DatePickerCard.jsx` → `TermCard` | 〃 |
| 08 | 한 눈에 정리 (정리표) | `Summary.jsx` | 2탄 `Summary.jsx` (= #01 `Compare.jsx`) |
| 09 | 오늘의 정리 (엔딩) | `Ending.jsx` | 2탄 `Ending.jsx` (공부 노트형) |

### 다시 쓸 수 있는 것 / 새로 만드는 것

| 대상 | 판단 |
|---|---|
| `src/ui/Post.jsx`, `QuestTag.jsx`, `Icon.jsx`, `Filters.jsx` | 그대로 import 해서 사용 (수정 금지) |
| `src/styles/mock.css`의 `.phone`, `.scr`, `.notch`, `.app`(+`.hero`, `.ln`, `.cards`), `.panel`, `.ping`, `.cursor` | 그대로 클래스 사용 가능 (수정 금지) |
| `src/ui/Mock.jsx` (modal/sheet/drawer/toast/tooltip) | 입력 UI 목업이 없고 `Phone`도 export 안 돼서 **쓰지 않음** |
| #01 `TermCard.jsx` | `mock`을 공용 `Mock` 종류 문자열로만 받고 `feats`·before/after 구조라, **이 편 `cards/TermCard.jsx`로 복사해서 바꿈** (`mock`은 JSX로 받고, `feats` 대신 `tip`) |
| 2탄 `Cover/Chat/Summary/Ending.jsx` | 새 시리즈 규칙이 반영된 구조라 복사해서 `hf-` → `in-`로 바꾸고 문구만 교체 |
| 목업 5개 | 이 편 `mocks.jsx`에 새로 만듦 (`im-` 접두사) |

---

## 1. 공통 규칙 (모든 장)

1. **수정 금지**: `src/styles/*`, `src/ui/*`, `src/posts/ui-talk-01/**`, `src/posts/ui-talk-02-header-footer/**`. 바꿔도 되는 기존 파일은 `src/App.jsx`(편 등록 한 줄), `src/main.jsx`(css import 한 줄) 두 개뿐이에요. `scripts/export.mjs`는 이미 `POST=`를 지원해서 고치지 않아요.
2. **클래스 충돌 금지**: 새 클래스는 모두 `in-`(목업은 `im-`). 다른 편 클래스를 가져다 쓰지 말고 복사 후 이름을 바꿔요. 그대로 써도 되는 공용 클래스: `.display`, `.hand`, `.hl`, `.chip`, `.card`, `.card.warm`, `.layer`, `.footer`, `.quest-tag`, `.card-head`, 위 표의 `mock.css` 클래스.
3. 색·폰트·크기는 `var(--…)` 토큰과 이 문서의 px 값만 써요.
4. **말투**: 카드 글자와 캡션은 공부 노트 말투. 퀘스트·주문(서)·탐험·모험·지점·보물·NEXT QUEST는 쓰지 않아요 (`04-series-rules.md` 7장). 크레파스·지도풍 그림은 장식으로만 남아도 돼요.
5. 배지·`QUEST #` 번호·진행 루트(점 5개)는 넣지 않아요 (03-UI). `.card-head`는 #01처럼 두되 `.quest-tag`는 숨겨져요.
6. 제목 3줄 이하, 글자 넘침·잘림·겹침 없음. 본문 최소 28px, Gaegu 최소 32px. 예외: 목업 안 작은 실제 글자 20~22px, 02장 AI 말풍선 28px.
7. 내용은 **y=1230px 위**에서 끝나요 (푸터가 바닥 52px 위). 좌우 88px 여백.
8. **형광펜(`.hl`)은 한 장에 한 단어(구절)만**, 명세에 적힌 곳에만.
9. 크레파스 필터(`url(#wax)`, `#wax-stroke`, `#rough`)는 테두리·면·선에만. 글자가 든 요소에는 `filter` 금지.
10. 없는 통계·인용·수치를 넣지 않아요.
11. 미리보기(`npm run dev`)에서 9장을 눈으로 확인하고 장별 완료 기준을 체크해요. export는 Andy가 하라고 할 때.

### 넘칠 때 줄이는 순서
1. 용어 카드 목업 칸 높이를 540 → 500px
2. 용어 카드 팁 카드 패딩을 줄이기 (`18px 28px 20px`)
3. before/after 박스 패딩을 #01 값의 80%로
4. 그래도 넘치면 문구를 바꾸지 말고 멈추고 Andy에게 물어보기 (`when` 한 문장과 팁은 지우지 않아요)

---

## 2. 파일 구성과 등록

### 2-1. 만들 파일

```
src/posts/ui-talk-03-inputs/
├─ brief.md          # 이 문서
├─ caption.md        # 7장 초안
├─ cards.jsx         # 카드 순서 배열
├─ cards.css         # 이 편 스타일 전부 (in-, im-)
├─ ids.js            # export용 카드 id
├─ mocks.jsx         # 목업 5개
└─ cards/
   ├─ Cover.jsx
   ├─ Chat.jsx
   ├─ TermCard.jsx       # 03~07 공용 레이아웃
   ├─ DropdownCard.jsx   # 03
   ├─ ToggleCard.jsx     # 04
   ├─ CheckboxCard.jsx   # 05
   ├─ RadioCard.jsx      # 06
   ├─ DatePickerCard.jsx # 07
   ├─ Summary.jsx        # 08
   └─ Ending.jsx         # 09
```

### 2-2. `cards.jsx`, `ids.js`

```jsx
/* 이 배열 순서가 미리보기 스크롤 순서이자 export 순서입니다. */
export const cards = [
  { id: "01", label: "cover", Card: Cover },
  { id: "02", label: "chat", Card: Chat },
  { id: "03", label: "Dropdown", Card: DropdownCard },
  { id: "04", label: "Toggle", Card: ToggleCard },
  { id: "05", label: "Checkbox", Card: CheckboxCard },
  { id: "06", label: "Radio Button", Card: RadioCard },
  { id: "07", label: "Date Picker", Card: DatePickerCard },
  { id: "08", label: "summary", Card: Summary },
  { id: "09", label: "ending", Card: Ending },
];
```

```js
export const CARD_IDS = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];
```

### 2-3. 등록 (App.jsx, main.jsx)

`src/App.jsx`에는 이미 `POSTS` 목록이 있어요. 한 줄씩만 추가해요 (`?post=`가 없으면 지금처럼 ui-talk-01이 나와야 해요).

```jsx
import { cards as talk03 } from "./posts/ui-talk-03-inputs/cards.jsx";
// POSTS 안에
  "ui-talk-03-inputs": talk03,
```

```jsx
// src/main.jsx
import "./posts/ui-talk-03-inputs/cards.css";
```

### 2-4. export

- `POST=ui-talk-03-inputs npm run export` → `posts/ui-talk-03-inputs/still-cuts/01~09.png`
- `scripts/export.mjs`는 수정하지 않아요 (`POST` 환경변수와 `ids.js`를 이미 읽음)

---

## 3. 새 컴포넌트 명세

### 3-1. `cards/TermCard.jsx` (03~07 공용)

#01 `TermCard.jsx`를 복사해서 아래만 바꿔요.
- `mock`은 문자열이 아니라 JSX로 받아요 (`mock={<DropdownMock />}`). 공용 `Mock` import는 지워요
- `feats`(칩 3개) 대신 **`tip`(팁 카드)**을 목업 줄 아래에 둬요
- `when`은 #01처럼 `mean` 바로 아래 (시리즈 규칙, 필수)
- before/after 라벨은 #01과 같은 `잘못된 설명` / `용어를 알고 난 후`

**props**: `name, page, mock, stage, term, pron, mean, when, tip, before, after`

```jsx
<Post name={name} pillar="ui" page={page}>
  <div className="card-head"><QuestTag series="talk" showType={false} /></div>
  <div className="in-stage">{stage}</div>
  <div className="in-name"><h1 className="display">{term}</h1><span className="in-pron">{pron}</span></div>
  <p className="in-mean">{mean}</p>
  <p className="in-when">{when}</p>
  <div className="in-row">
    <div className="in-mock">{mock}</div>
    <div className="in-talk">
      <div className="in-before">
        <div className="in-lab"><span className="in-mark"><Icon name="x" color="var(--ink-soft)" stroke={10} /></span>잘못된 설명</div>
        <p>{before}</p>
      </div>
      <div className="in-down"><Icon name="arrow" color="var(--p-deep)" stroke={8} /></div>
      <div className="card in-after">
        <div className="in-lab"><span className="in-mark"><Icon name="star" color="var(--sun-deep)" stroke={8} /></span>용어를 알고 난 후</div>
        <p>{after}</p>
      </div>
    </div>
  </div>
  <div className="card in-tip">
    <span className="in-tip-label">✏️ 팁</span>
    <span className="in-tip-text">{tip}</span>
  </div>
</Post>
```

| 선택자 | 값 (#01 `term-*` 기준) |
|---|---|
| `.in-stage` | `margin-top: 44px;` Gaegu 700 42px `var(--p-deep)` |
| `.in-name` | `display:flex; align-items:baseline; gap:24px;` / `h1`: 104px lh 1.12 |
| `.in-pron` | Pretendard 600 38px `var(--ink-soft)` |
| `.in-mean` | `margin-top: 14px;` 38px lh 1.5 600 |
| `.in-when` | `margin-top: 6px;` 32px lh 1.45 500 `var(--ink-soft)` |
| `.in-row` | `margin-top: 32px; display:grid; grid-template-columns: 340px 1fr; gap: 36px; align-items:center;` |
| `.in-mock` | `display:flex; justify-content:center; align-items:center; height: 540px;` (#01은 580, 팁 자리 때문에 줄임) |
| `.in-talk`, `.in-lab`, `.in-before(+::before, p)`, `.in-down`, `.in-after(.card, p, b)`, `.in-mark` | #01 `term-talk`, `term-lab`, `term-before`, `term-down`, `term-after`, `term-mark`와 같은 값 |
| `.in-tip.card` | `margin-top: 24px; padding: 20px 32px 22px; display:flex; align-items:baseline; gap: 16px;` + `::before { background: var(--paper-warm); border-color: var(--sun-deep); }` (#01 `.chat-punch` 모양) |
| `.in-tip-label` | `flex:none;` Gaegu 700 34px `var(--p-deep)` |
| `.in-tip-text` | 30px lh 1.45 600 `var(--ink)` / 안의 `b`는 800 `var(--p-deep)` |

### 3-2. `cards/Summary.jsx` (08)

2탄 `Summary.jsx`를 복사해서 `hf-summary-*` → `in-summary-*`, 행만 교체 (5장 08). "이름 | 기능" 두 칸, 표 아래 주석 없음 (03-UI, 04-series-rules 4장). 값은 #01 `compare-*`와 같음 (이름 칸 280px, 행 최소 128px, 이름 Jua 38px + `small` 26px, 기능 30px 600).

### 3-3. `cards/Chat.jsx`, `Cover.jsx`, `Ending.jsx`

2탄 파일을 복사해서 `hf-` → `in-`로 바꾸고 문구·목업만 5장대로 교체. 크기·배치는 그대로.

- **Cover**: 2탄 `Cover.jsx`는 Andy가 부제를 "오늘의 내용" 목록(`hf-cover-agenda`)으로 바꿔 둔 상태예요. 이 편 부제는 **#01처럼 `p.in-cover-sub` 두 줄**이라, 목록 부분은 가져오지 말고 #01 `Cover.jsx`의 `cover-sub` 구조를 써요 (8장 열린 결정 참고)
- **Chat**: 2탄 `Chat.jsx`는 지금 반복 표시가 빠져 있고 제목도 규칙과 달라요(2탄 brief에서 고치는 중). 복사한 뒤 제목은 5장 02대로, **반복 표시는 #01 `Chat.jsx`의 `chat-loop` 마크업과 #01 `cards.css`의 `.chat-loop` 규칙을 `in-chat-loop`으로 복사**해서 꼭 넣어요
- **Ending**: 2탄 `Ending.jsx`의 다음 편 제목 클래스는 `hf-ending-next-title`이에요 → `in-ending-next-title`

---

## 4. 목업 명세 (`mocks.jsx` + `cards.css`의 mocks 구역)

공통
- 5개 모두 폰 300×560: `<div className="phone"><div className="scr"><div className="im-screen">…</div></div><div className="notch" /></div>` (공용 `.phone/.scr/.notch` 사용)
- `.im-screen { position:absolute; inset:0; padding: 50px 22px 22px; display:flex; flex-direction:column; gap: 14px; }`
- 화면 위쪽에 공통으로 제목 막대 `.im-ttl` (`height:14px; width:110px; border-radius:7px; background: var(--ink-soft);`) + `.im-ln` 막대(`height:12px; border-radius:6px; background: var(--paper-line);`)
- 강조 요소만 핑크(`--p` / `--p-deep`), 나머지는 회색 막대. 테두리 크레파스는 `::after`에 `filter:url(#wax-stroke)` (글자에는 필터 금지)
- 실제 글자는 꼭 필요한 곳에만, Pretendard 700 20~22px `var(--ink)`
- 같은 목업을 02장 AI 말풍선 안에 0.22배로 다시 써요 (`RadioMock`, `CheckboxMock`)

### 4-1. `DropdownMock` (03)
1. `.im-ttl` + `.im-ln` 80%
2. 라벨 막대 90px + 선택 칸 `.im-select` (높이 52, 흰 바탕, 3px `--p-deep` 테두리, radius 12, 왼쪽 실제 글자 `서울`, 오른쪽 `▼` 삼각형 `--p-deep`)
3. 바로 아래 펼쳐진 목록 `.im-list` (공용 `.panel`처럼 흰 바탕 + 5px `--p-deep` 크레파스 테두리, radius 14, 그림자 없이): 행 4개(높이 44), 둘째 행만 `var(--p)` 배경 + 오른쪽 `✓`, 나머지는 `.im-ln` 막대
4. 목록 아래 흐린 본문 막대 2줄 (`opacity:.45`)
- 커서(공용 `.cursor` SVG)를 선택 칸 오른쪽 `▼` 위에

### 4-2. `ToggleMock` (04)
1. `.im-ttl` (설정 화면 제목)
2. 설정 행 3개 (높이 64, 사이 2px `--paper-line` 구분선): 왼쪽 라벨, 오른쪽 스위치 `.im-toggle`
   - 1행: 실제 글자 `알림` + **켜짐** 스위치 (트랙 64×36 radius 18 `var(--p)`, 흰 손잡이 28px 오른쪽, 트랙 테두리 4px `--p-deep` 크레파스)
   - 2행: 실제 글자 `다크 모드` + 꺼짐 스위치 (트랙 `var(--paper-line)`, 손잡이 왼쪽 흰색 + 3px `--ink-faint` 테두리)
   - 3행: 라벨 막대 + 꺼짐 스위치
- 1행 스위치 둘레에 공용 `.ping` (노란 점선 원, 지름 60px)
- **저장 버튼 없음** (바로 적용된다는 뜻)

### 4-3. `CheckboxMock` (05)
1. `.im-ttl` + 실제 글자 `관심 분야` (22px)
2. 행 4개 (높이 48): 왼쪽 네모 `.im-check` 28px (radius 7, 4px 테두리), 오른쪽 `.im-ln`
   - 1·3행 체크됨: 바탕 `var(--p)`, 테두리 `--p-deep`, 가운데 `✓` (`--ink`, 800 20px)
   - 2·4행 빈 칸: 흰 바탕, 테두리 `--ink-faint`
3. 맨 아래 저장 버튼 `.im-save` (높이 44 pill `var(--p)`, 실제 글자 `저장`) → Toggle과 다른 점(저장해야 적용)을 보여줌

### 4-4. `RadioMock` (06)
1. `.im-ttl` + 실제 글자 `배송 방법`
2. 행 3개 (높이 52): 왼쪽 동그라미 `.im-radio` 28px (원, 4px 테두리), 오른쪽 `.im-ln`
   - 2행만 선택: 테두리 `--p-deep`, 안쪽 점 14px `var(--p-deep)`, 행 배경 `var(--p)` opacity .35 radius 12
   - 나머지: 흰 바탕, 테두리 `--ink-faint`
3. 맨 아래 버튼 막대 (pill `var(--paper-line)`)

### 4-5. `DatePickerMock` (07)
1. `.im-ttl` + 입력 칸 (높이 52, 3px `--p-deep` 테두리, radius 12, 왼쪽 실제 글자 `2026. 10. 17`, 오른쪽 달력 아이콘: 작은 네모 + 위 고리 2개, `--p-deep` 선)
2. 아래 펼쳐진 달력 `.im-cal` (흰 바탕 + 5px `--p-deep` 크레파스 테두리, radius 16, padding 14):
   - 머리줄: `‹` / 실제 글자 `2026년 10월` / `›`
   - 7칸 × 5줄 날짜 칸 (각 30×26), 숫자 대신 작은 점·막대로 추상화하고 **한 칸만** 실제 숫자 `17` + `var(--p)` 원(지름 30) 배경
3. 달력 아래 흐린 막대 1줄

---

## 5. 장별 명세

> `HL("x")` = `<span className="hl">x</span>`, `B("x")` = `<b>x</b>`, `<br>` = `<br />`. 줄바꿈 위치까지 확정이에요.

### 01 · 커버 (`cards/Cover.jsx`)

| 자리 | 값 |
|---|---|
| 제목 `h1.display.in-cover-title` | `AI가 알아먹는<br>{HL("UI 용어집")} 3탄` |
| 부제 `p.in-cover-sub` | `AI한테 설명하다 지친<br>나를 위한 입력 UI 5개` |
| 나머지 | blob, 점선 루트, X 표시, 별 2개, `card-head`(QuestTag + 나침반) 2탄/#01 그대로 |

- 형광펜: **"UI 용어집"**
- 크기: 제목 112px lh 1.24, 부제 38px (#01과 같음). 제목+부제는 `.in-cover-copy`로 묶어 세로 가운데
- 키커, 메모, "밀어서 …" 없음 (시리즈 규칙)
- 완료 기준: #01·2탄 커버와 나란히 놓았을 때 위치·크기가 같고 "3탄"·부제만 다름

### 02 · 이런 상황이 답답하시죠 (`cards/Chat.jsx`)

| 자리 | 값 |
|---|---|
| 제목 | `이런 상황이 답답하시죠,,` |
| 나 1 | `누르면 밑으로 목록 나오는<br>박스 하나 만들어줘` (캡션 인용과 같은 문장) |
| AI 1 | 미니 `<RadioMock />` + `(동그라미 선택지를<br>줄줄이 늘어놓아 옴)` |
| 나 2 | `알림은 옆으로 밀리는<br>동그란 버튼으로 해줘` |
| AI 2 | 미니 `<CheckboxMock />` + `(체크 표시 네모를<br>넣어 옴)` |
| 반복 | `이걸 여러 번 반복...` (반복 화살표 SVG) |
| 나 3 (마지막) | `아니 그게 아니라,,` |
| 결론 카드 | `{HL("Dropdown, Toggle")}이라고<br>한 마디면 끝났을 일` |

- 순서: 나 1 → AI 1 → 나 2 → AI 2 → 반복 → 나 3 (시리즈 규칙)
- 말풍선 글자는 #01·2탄 구현처럼 **따옴표 없이** 써요
- AI 쪽은 실제 대사가 아니라 괄호 안 장면 설명
- **주석 없음**: 실제/예시 장면 여부 주석을 넣지 않아요 (시리즈 규칙)
- 크기는 #01·2탄 값 그대로 (제목 72px, 말풍선 30px, AI 말풍선 28px, 원 56px, 미니 목업 `scale(.22)` 66×124, 반복 32px, 결론 카드 44px)
- 형광펜: **"Dropdown, Toggle"**
- 완료 기준
  - 말풍선이 모두 2줄 이하, "나" 원과 겹치지 않음
  - 미니 목업 두 개가 서로 다르게 보임 (동그라미 목록 / 체크 네모)
  - 결론 카드가 y=1230 위, 그 아래 주석 없음

### 03 · UI 용어 ① Dropdown (`cards/DropdownCard.jsx`)

| prop | 값 |
|---|---|
| `page` | `"03"` |
| `mock` | `<DropdownMock />` |
| `stage` | `UI 용어 ①` |
| `term` / `pron` | `Dropdown` / `[드롭다운]` |
| `mean` | `누르면 목록이 펼쳐지고 하나를 고르는 칸이에요.` |
| `when` | `고를 게 많아서 화면에 다 펼치기 어려울 때 써요.` |
| `before` | `"누르면 밑으로 목록 나오는 박스 만들어줘"` |
| `after` | `"지역 선택은 {B("Dropdown")}으로 해줘"` |
| `tip` | `고를 게 몇 개뿐이면 다 펼쳐 둔 {B("Radio Button")}이 더 편할 수 있어요.` |

### 04 · UI 용어 ② Toggle (`cards/ToggleCard.jsx`)

| prop | 값 |
|---|---|
| `page` | `"04"` |
| `mock` | `<ToggleMock />` |
| `stage` | `UI 용어 ②` |
| `term` / `pron` | `Toggle` / `[토글]` |
| `mean` | `켜짐과 꺼짐을 바로 바꾸는 스위치예요.` |
| `when` | `알림, 다크 모드처럼 누르는 즉시 적용되는 설정에 써요.` |
| `before` | `"옆으로 밀리는 동그란 버튼 만들어줘"` |
| `after` | `"알림 설정을 {B("Toggle")}로 바꿔줘"` |
| `tip` | `{B("Toggle")}은 누르면 바로 적용, {B("Checkbox")}는 저장을 눌러야 적용돼요.` |

### 05 · UI 용어 ③ Checkbox (`cards/CheckboxCard.jsx`)

| prop | 값 |
|---|---|
| `page` | `"05"` |
| `mock` | `<CheckboxMock />` |
| `stage` | `UI 용어 ③` |
| `term` / `pron` | `Checkbox` / `[체크박스]` |
| `mean` | `여러 개를 동시에 고르는 네모 칸이에요.` |
| `when` | `관심사, 약관 동의처럼 하나 이상 고를 때 써요.` |
| `before` | `"체크 표시 들어가는 네모 만들어줘"` |
| `after` | `"관심 분야는 {B("Checkbox")}로 여러 개 고르게 해줘"` |
| `tip` | `여러 개 고르면 {B("Checkbox")}, 하나만 고르면 {B("Radio Button")}이에요.` |

### 06 · UI 용어 ④ Radio Button (`cards/RadioCard.jsx`)

| prop | 값 |
|---|---|
| `page` | `"06"` |
| `mock` | `<RadioMock />` |
| `stage` | `UI 용어 ④` |
| `term` / `pron` | `Radio Button` / `[라디오 버튼]` |
| `mean` | `여러 개 중 딱 하나만 고르는 동그라미예요.` |
| `when` | `배송 방법처럼 하나만 골라야 할 때 써요.` |
| `before` | `"하나 누르면 다른 게 풀리는 동그라미 만들어줘"` |
| `after` | `"결제 방법은 {B("Radio Button")}으로 하나만 고르게 해줘"` |
| `tip` | `동그라미는 하나만, 네모는 여러 개. 모양으로 기억해요.` |

- `Radio Button` 104px가 `[라디오 버튼]`과 한 줄에 안 들어가면 `.in-name`에 `flex-wrap: wrap`을 줘서 발음이 다음 줄로 내려가도 돼요 (이 장만)

### 07 · UI 용어 ⑤ Date Picker (`cards/DatePickerCard.jsx`)

| prop | 값 |
|---|---|
| `page` | `"07"` |
| `mock` | `<DatePickerMock />` |
| `stage` | `UI 용어 ⑤` |
| `term` / `pron` | `Date Picker` / `[데이트 피커]` |
| `mean` | `달력을 띄워 날짜를 고르는 입력칸이에요.` |
| `when` | `예약일, 생일처럼 날짜를 받을 때 써요.` |
| `before` | `"누르면 달력 뜨는 칸 만들어줘"` |
| `after` | `"예약 날짜는 {B("Date Picker")}로 받아줘"` |
| `tip` | `기간을 고를 땐 "시작일과 종료일을 {B("Date Picker")}로"라고 말해요.` |

**03~07 공통**
- 형광펜: 없음 (강조는 `<b>`만)
- 완료 기준
  - `when` 한 문장이 1줄 (넘치면 2줄까지)
  - before/after 박스 글자가 오른쪽 칸 안에서 넘치지 않음
  - 팁 카드가 1~2줄, y=1230 위에서 끝남
  - 목업에서 강조 요소(펼친 목록 / 켜진 스위치 / 체크된 네모 / 선택된 동그라미 / 고른 날짜)가 바로 보임
  - 04 ↔ 05, 05 ↔ 06은 짝 장이라 나란히 놓았을 때 레이아웃 위치가 같음

### 08 · 한 눈에 정리 (`cards/Summary.jsx`)

| 자리 | 값 |
|---|---|
| stage | `한 눈에 정리` |
| title | `헷갈릴 땐 {HL("이 표")} 하나` |
| 메모 | `저장 필수!` |
| 머리줄 | `이름` / `기능` |

| `name` | `ko` (작은 글자) | `job` |
|---|---|---|
| `Dropdown` | `드롭다운` | `누르면 목록이 펼쳐지고 하나를 골라요.` |
| `Toggle` | `토글` | `켜고 끄면 바로 적용돼요.` |
| `Checkbox` | `체크박스` | `여러 개를 고를 수 있어요. 보통 저장해야 적용돼요.` |
| `Radio Button` | `라디오 버튼` | `여러 개 중 딱 하나만 골라요.` |
| `Date Picker` | `데이트 피커` | `달력을 띄워 날짜를 골라요.` |

- 표 아래 주석 없음
- 형광펜: **"이 표"**
- 완료 기준: 5행이 표 안에 들어가고 y=1230 위, 기능 칸 각 1~2줄, `Radio Button`·`Date Picker`가 이름 칸(280px)에서 잘리지 않음

### 09 · 오늘의 정리 (`cards/Ending.jsx`, 2탄 구조 복사)

```jsx
const LOOT = ["Dropdown", "Toggle", "Checkbox", "Radio Button", "Date Picker"];
```

| 자리 | 값 |
|---|---|
| 스탬프 | `오늘 배운<br />단어 5개` |
| 제목 | `오늘의 정리` |
| sub | `저장해두고<br>AI한테 써먹어보세요` |
| 칩 제목 | `✦ 이제 이렇게 말해요` |
| 칩 | `LOOT` 5개 |
| 다음 편 라벨 | `다음 편` |
| 다음 편 제목 | `?? 편` (주제 미정, 자리표시) |
| 다음 편 설명 | (비움. 설명 줄을 렌더링하지 않음) |
| CTA | `🔖 저장하고 써먹기` / `👀 팔로우하고 다음 편 보기` |
| 메모 | `다음 편에서 만나요!` |

- 장식: 2탄과 같은 노트 + 체크 낙서, 다음 편 카드 오른쪽 위 연필 낙서 (지도·깃발·점선 루트·열쇠 없음)
- 완료 기준: 화면에 `QUEST`·`퀘스트`·`탐험`·`NEXT` 글자 없음 / 칩 5개가 2줄 안 / CTA가 낙서·메모와 겹치지 않음

---

## 6. 마무리 체크리스트

- [ ] `?post=ui-talk-03-inputs`에서 9장이 순서대로 보임
- [ ] `POST=ui-talk-03-inputs npm run export`로 1080×1350 PNG 9장
- [ ] 모든 장에 계정명(`Post.jsx`)과 `NN / 09`
- [ ] 배지·`QUEST #`·진행 루트·모험 표현 없음 (말투 규칙)
- [ ] 01 커버 `AI가 알아먹는 UI 용어집 3탄`
- [ ] 02 제목 `이런 상황이 답답하시죠,,`, 나→AI 두 번 + 반복 표시 + `아니 그게 아니라,,`, 주석 없음, 첫 말이 캡션 인용과 같은 문장
- [ ] 03~07 단계 라벨 `UI 용어 ①`~`⑤`, 모두 `when` 한 문장과 팁 카드
- [ ] 08 "이름 | 기능" 5행, 표 아래 주석 없음
- [ ] 형광펜은 01 "UI 용어집", 02 "Dropdown, Toggle", 08 "이 표" 3곳뿐
- [ ] 새 클래스는 모두 `in-` / `im-`
- [ ] 바뀐 기존 파일은 `App.jsx`, `main.jsx` 두 개뿐. #01·2탄 미리보기가 예전과 같음
- [ ] `caption.md` 저장

---

## 7. caption.md 초안

```
# AI가 알아먹는 UI 용어집 3탄: 입력하는 UI 캡션

누르면 목록 나오는 그 박스, 이름이 뭐더라? 🤔

"누르면 밑으로 목록 나오는 박스 하나 만들어줘"
이렇게 말하면 AI가 엉뚱한 동그라미 선택지를 줄줄이 만들어 오기도 해요.
"Dropdown" 한 단어면 바로 알아듣는데 말이에요.

그래서 오늘은 고르고 입력하는 UI 5개를 공부해서 정리했어요 📒

🔽 Dropdown (드롭다운): 누르면 목록이 펼쳐지고 하나를 고르는 칸
🔘 Toggle (토글): 켜짐과 꺼짐을 바로 바꾸는 스위치
☑️ Checkbox (체크박스): 여러 개를 동시에 고르는 네모 칸
⚪ Radio Button (라디오 버튼): 여러 개 중 딱 하나만 고르는 동그라미
📅 Date Picker (데이트 피커): 달력을 띄워 날짜를 고르는 입력칸

👀 헷갈리는 짝
└ Checkbox는 여러 개, Radio Button은 하나만
└ Toggle은 누르면 바로 적용, Checkbox는 보통 저장해야 적용

✏️ 이렇게 말해보세요
잘못된 설명: "누르면 밑으로 목록 나오는 박스"
용어를 알고 난 후: "지역 선택은 Dropdown으로 해줘"
잘못된 설명: "옆으로 밀리는 동그란 버튼"
용어를 알고 난 후: "알림 설정을 Toggle로 바꿔줘"
잘못된 설명: "체크 표시 들어가는 네모"
용어를 알고 난 후: "관심 분야는 Checkbox로 여러 개 고르게 해줘"
잘못된 설명: "하나 누르면 다른 게 풀리는 동그라미"
용어를 알고 난 후: "결제 방법은 Radio Button으로 하나만 고르게 해줘"
잘못된 설명: "누르면 달력 뜨는 칸"
용어를 알고 난 후: "예약 날짜는 Date Picker로 받아줘"

8번째 장 정리표는 헷갈릴 때 꺼내 보기 좋아요.

🔖 저장해두고 다음에 AI한테 써먹어보세요
👀 팔로우하고 다음 편도 같이 봐요!
💬 이름 몰라서 설명만 길어졌던 UI 있으면 댓글로 알려주세요. 다음 편에 넣어볼게요

.
#UI용어 #UIUX #UI디자인 #웹디자인 #앱디자인 #프론트엔드 #웹개발 #개발자 #개발공부 #코딩공부 #AI코딩 #바이브코딩 #프롬프트 #프롬프트엔지니어링 #ChatGPT #Claude #디자인용어 #드롭다운 #토글 #체크박스
```

---

## 8. 열려 있는 결정 (Andy 확인 필요)

- **다음 편(4탄) 주제**: 09장 다음 편 제목은 `?? 편` 자리표시, 설명 줄은 비워 둠. 정해지면 `Ending.jsx`의 제목과 설명 2줄, 캡션의 "👀 팔로우하고 다음 편도 같이 봐요!" 줄(주제 넣기)을 바꿔요
- **커버 부제 형식**: 2탄은 Andy가 부제를 "오늘의 내용" 목록(`(?)` 붙은 설명 2~3줄)으로 바꿨어요. 3탄은 아직 #01 형식(`AI한테 설명하다 지친<br>나를 위한 입력 UI 5개`)이에요. 시리즈를 목록 형식으로 맞출지 정해 주세요
- (해결됨, 2026-10-04) 2탄 엔딩·캡션의 다음 편 예고를 `입력하는 UI 편`으로 바꿔서 2탄 → 3탄 순서가 맞아요
