# BRIEF · AI가 알아먹는 UI 용어집 6탄: 검색하고 거르는 UI (React + Vite)

> 이 문서는 Cursor가 그대로 따라 만들 수 있게 쓴 명세예요. **문구는 확정본**이라 바꾸지 말고, 넘치면 아래 "넘칠 때" 규칙대로만 줄여요.
> 시리즈 공통 규칙은 `document/04-series-rules.md`가 이 문서보다 우선이에요 (말투 규칙 포함). 시작 전에 `document/00-README.md`, `01-design-principles.md`, `03-UI.md`, `04-series-rules.md`를 읽어요.
> 구현은 **#01(`src/posts/ui-talk-01/`)의 9장 구조**를 따르고, 새 규칙이 이미 반영된 **4탄(`src/posts/ui-talk-04/`)의 Cover·Chat·TermCard·Summary·Ending**을 복사 원본으로 써요.

---

## 0. 메타

| 항목 | 값 |
|---|---|
| 시리즈 | 「AI한테 이렇게 말해」 (`series="talk"`, 배지 숨김) · 커버 제목 `AI가 알아먹는 UI 용어집 6탄` |
| 테마 | 검색하고 거르는 UI (찾고, 남기고, 줄 세우고, 고른 조건을 보여 주는 칸) |
| 편 종류 | **용어 편**: 단계 라벨은 `UI 용어 ①`~`UI 용어 ⑤` |
| 용어 5개 | Search Bar · Filter · Sort · Chip · Autocomplete |
| 이번 편의 핵심 | 헷갈리는 짝 두 개: **Filter vs Sort** (빼기 vs 줄 세우기), **Autocomplete vs 3탄 Dropdown** (타이핑하며 추천 vs 정해진 목록에서 고르기). Chip은 **Badge**(상태만 보여 주고 보통 못 지움)와 구분. → 04·05·06·07장 팁과 08장 정리표에 넣음 |
| 필러 색 | 🎨 UI/UX 핑크 (`<Post pillar="ui">`) |
| 캔버스 / 장 수 | 1080 × 1350 / 9장 (`<Post total="09">` 기본값) |
| slug | `ui-talk-06` |
| 코드 위치 | `src/posts/ui-talk-06/` |
| 클래스 접두사 | 카드 `sf-`, 목업 `sm-` (#01·2탄 `hf-`/`pm-`·3탄 `in-`/`im-`·4탄 `sx-`/`xm-`·5탄 `zn-`/`zm-`과 충돌 방지) |
| 미리보기 | `npm run dev` → `http://127.0.0.1:5173/?post=ui-talk-06` (한 장만: `&card=03`) |
| 출력(PNG) | `POST=ui-talk-06 npm run export` (일부만: `... npm run export -- 03 05`) → 프로젝트 루트 `posts/ui-talk-06/still-cuts/01.png` … `09.png` |
| 계정명 | `src/ui/Post.jsx`가 자동으로 넣음 (Andy가 직접 관리). 이 편 코드와 문서에는 계정명을 적거나 바꾸지 않음 |
| 캡션 | `src/posts/ui-talk-06/caption.md` (7장 초안 그대로 저장) |

### 장 순서 한눈에

| # | 역할 | 컴포넌트 (`cards/`) | 복사 원본 |
|---|---|---|---|
| 01 | 커버 | `Cover.jsx` | 4탄 `Cover.jsx` (= #01 두 줄 부제) |
| 02 | 이런 상황이 답답하시죠 (채팅) | `Chat.jsx` | 4탄 `Chat.jsx` (나→AI 두 번 + `아니 그게 아니라,,`, 반복 표시 없음) |
| 03 | UI 용어 ① Search Bar | `SearchBarCard.jsx` → `TermCard.jsx` | 4탄 `TermCard.jsx` |
| 04 | UI 용어 ② Filter | `FilterCard.jsx` → `TermCard` | 〃 |
| 05 | UI 용어 ③ Sort | `SortCard.jsx` → `TermCard` | 〃 |
| 06 | UI 용어 ④ Chip | `ChipCard.jsx` → `TermCard` | 〃 |
| 07 | UI 용어 ⑤ Autocomplete | `AutocompleteCard.jsx` → `TermCard` | 〃 |
| 08 | 한 눈에 정리 (정리표) | `Summary.jsx` | 4탄 `Summary.jsx` |
| 09 | 오늘의 정리 (엔딩) | `Ending.jsx` | 4탄 `Ending.jsx` (공부 노트형. 다음 편은 `?? 편` 자리표시) |

### 다시 쓸 수 있는 것 / 새로 만드는 것

| 대상 | 판단 |
|---|---|
| `src/ui/Post.jsx`, `QuestTag.jsx`, `Icon.jsx`, `Filters.jsx` | 그대로 import 해서 사용 (수정 금지) |
| `src/styles/mock.css`의 `.phone`, `.scr`, `.notch`, `.app`(+`.hero`, `.ln`, `.cards`), `.panel`, `.ping`, `.cursor` | 그대로 클래스 사용 가능 (수정 금지) |
| `src/ui/Mock.jsx` | 검색·거르기 목업이 없고 `Phone`도 export 안 돼서 **쓰지 않음** |
| 4탄 `TermCard.jsx` | `mock`을 JSX로 받고 `tip`이 있는 구조라, **이 편 `cards/TermCard.jsx`로 복사해서 `sx-` → `sf-`로 바꿈** |
| 4탄 `Cover/Chat/Summary/Ending.jsx` | 새 시리즈 규칙이 반영된 구조라 복사해서 `sx-` → `sf-`로 바꾸고 문구·목업만 교체. Ending 다음 편은 `?? 편`이라 설명 줄은 렌더링하지 않아요 |
| 목업 6개 | 이 편 `mocks.jsx`에 새로 만듦 (`sm-` 접두사). 용어 카드용 5개 + 채팅용 `PickListMock` 1개 |

---

## 1. 공통 규칙 (모든 장)

1. **수정 금지**: `src/styles/*`, `src/ui/*`, `src/posts/ui-talk-01/**`, `src/posts/ui-talk-02/**`, `src/posts/ui-talk-03/**`, `src/posts/ui-talk-04/**`. 5탄 폴더는 **엔딩 다음 편 제목·설명·캡션·brief 8장(과 09장 다음 편 칸)**만 이 작업에서 고쳐요. 바꿔도 되는 기존 파일은 `src/App.jsx`(편 등록 한 줄), `src/main.jsx`(css import 한 줄), 그리고 5탄 엔딩·캡션·brief·(엔딩 설명용 CSS)예요. `scripts/export.mjs`는 이미 `POST=`를 지원해서 고치지 않아요.
2. **클래스 충돌 금지**: 새 클래스는 모두 `sf-`(목업은 `sm-`). 다른 편 클래스를 가져다 쓰지 말고 복사 후 이름을 바꿔요. 그대로 써도 되는 공용 클래스: `.display`, `.hand`, `.hl`, `.chip`, `.card`, `.card.warm`, `.layer`, `.footer`, `.quest-tag`, `.card-head`, 위 표의 `mock.css` 클래스.
3. 색·폰트·크기는 `var(--…)` 토큰과 이 문서의 px 값만 써요.
4. **말투**: 카드 글자와 캡션은 공부 노트 말투. 퀘스트·주문(서)·탐험·모험·지점·보물·NEXT QUEST는 쓰지 않아요 (`04-series-rules.md` 7장). 크레파스·지도풍 그림은 장식으로만 남아도 돼요.
5. 배지·`QUEST #` 번호·진행 루트(점 5개)는 넣지 않아요 (03-UI). `.card-head`는 #01처럼 두되 `.quest-tag`는 숨겨져요.
6. 제목 3줄 이하, 글자 넘침·잘림·겹침 없음. 본문 최소 28px, Gaegu 최소 32px. 예외: 목업 안 작은 실제 글자 20~22px, 02장 AI 말풍선 28px.
7. 내용은 **y=1230px 위**에서 끝나요 (푸터가 바닥 52px 위). 좌우 88px 여백.
8. **형광펜(`.hl`)은 한 장에 한 단어(구절)만**, 명세에 적힌 곳에만.
9. 크레파스 필터(`url(#wax)`, `#wax-stroke`, `#rough`)는 테두리·면·선에만. 글자가 든 요소에는 `filter` 금지.
10. 없는 통계·인용·수치를 넣지 않아요.
11. 미리보기(`npm run dev`)에서 9장을 눈으로 확인하고 장별 완료 기준을 체크해요.

### 넘칠 때 줄이는 순서
1. 용어 카드 목업 칸 높이를 540 → 500px
2. 용어 카드 팁 카드 패딩을 줄이기 (`18px 28px 20px`)
3. before/after 박스 패딩을 #01 값의 80%로
4. 그래도 넘치면 문구를 바꾸지 말고 멈추고 Andy에게 물어보기 (`when` 한 문장과 팁은 지우지 않아요)

---

## 2. 파일 구성과 등록

### 2-1. 만들 파일

```
src/posts/ui-talk-06/
├─ brief.md          # 이 문서
├─ caption.md        # 7장 초안
├─ cards.jsx         # 카드 순서 배열
├─ cards.css         # 이 편 스타일 전부 (sf-, sm-)
├─ ids.js            # export용 카드 id
├─ mocks.jsx         # 목업 6개
└─ cards/
   ├─ Cover.jsx
   ├─ Chat.jsx
   ├─ TermCard.jsx           # 03~07 공용 레이아웃
   ├─ SearchBarCard.jsx      # 03
   ├─ FilterCard.jsx         # 04
   ├─ SortCard.jsx           # 05
   ├─ ChipCard.jsx           # 06
   ├─ AutocompleteCard.jsx   # 07
   ├─ Summary.jsx            # 08
   └─ Ending.jsx             # 09
```

### 2-2. `cards.jsx`, `ids.js`

```jsx
/* 이 배열 순서가 미리보기 스크롤 순서이자 export 순서입니다. */
export const cards = [
  { id: "01", label: "cover", Card: Cover },
  { id: "02", label: "chat", Card: Chat },
  { id: "03", label: "Search Bar", Card: SearchBarCard },
  { id: "04", label: "Filter", Card: FilterCard },
  { id: "05", label: "Sort", Card: SortCard },
  { id: "06", label: "Chip", Card: ChipCard },
  { id: "07", label: "Autocomplete", Card: AutocompleteCard },
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
import { cards as talk06 } from "./posts/ui-talk-06/cards.jsx";
// POSTS 안에
  "ui-talk-06": talk06,
```

```jsx
// src/main.jsx
import "./posts/ui-talk-06/cards.css";
```

### 2-4. export

- `POST=ui-talk-06 npm run export` → `posts/ui-talk-06/still-cuts/01~09.png`
- `scripts/export.mjs`는 수정하지 않아요 (`POST` 환경변수와 `ids.js`를 이미 읽음)
- 이 VM에서 Mac 경로 때문에 실패하면, 같은 Chrome 캡처로 `posts/ui-talk-06/still-cuts/01.png`~`09.png`에 뽑아요

---

## 3. 새 컴포넌트 명세

### 3-1. `cards/TermCard.jsx` (03~07 공용)

4탄 `TermCard.jsx`를 복사해서 `sx-` → `sf-`만 바꿔요.
- `mock`은 JSX로 받아요 (`mock={<SearchBarMock />}`)
- `when`은 `mean` 바로 아래 (시리즈 규칙, 필수)
- before/after 라벨은 `잘못된 설명` / `용어를 알고 난 후`
- `Autocomplete`처럼 긴 이름은 `wrapName`으로 발음을 다음 줄로 내려요

**props**: `name, page, mock, stage, term, pron, mean, when, tip, before, after, wrapName`

```jsx
<Post name={name} pillar="ui" page={page}>
  <div className="card-head"><QuestTag series="talk" showType={false} /></div>
  <div className="sf-stage">{stage}</div>
  <div className="sf-name"><h1 className="display">{term}</h1><span className="sf-pron">{pron}</span></div>
  <p className="sf-mean">{mean}</p>
  <p className="sf-when">{when}</p>
  <div className="sf-row">
    <div className="sf-mock">{mock}</div>
    <div className="sf-talk">
      <div className="sf-before">
        <div className="sf-lab"><span className="sf-mark"><Icon name="x" color="var(--ink-soft)" stroke={10} /></span>잘못된 설명</div>
        <p>{before}</p>
      </div>
      <div className="sf-down"><Icon name="arrow" color="var(--p-deep)" stroke={8} /></div>
      <div className="card sf-after">
        <div className="sf-lab"><span className="sf-mark"><Icon name="star" color="var(--sun-deep)" stroke={8} /></span>용어를 알고 난 후</div>
        <p>{after}</p>
      </div>
    </div>
  </div>
  <div className="card sf-tip">
    <span className="sf-tip-label">✏️ 팁</span>
    <span className="sf-tip-text">{tip}</span>
  </div>
</Post>
```

| 선택자 | 값 (4탄 `sx-*` = 3탄 `in-*` = #01 `term-*` 기준) |
|---|---|
| `.sf-stage` | `margin-top: 44px;` Gaegu 700 42px `var(--p-deep)` |
| `.sf-name` | `display:flex; align-items:baseline; gap:24px;` / `h1`: 104px lh 1.12 |
| `.sf-pron` | Pretendard 600 38px `var(--ink-soft)` |
| `.sf-mean` | `margin-top: 14px;` 38px lh 1.5 600 |
| `.sf-when` | `margin-top: 6px;` 32px lh 1.45 500 `var(--ink-soft)` |
| `.sf-row` | `margin-top: 32px; display:grid; grid-template-columns: 340px 1fr; gap: 36px; align-items:center;` |
| `.sf-mock` | `display:flex; justify-content:center; align-items:center; height: 540px;` |
| `.sf-talk`, `.sf-lab`, `.sf-before(+::before, p)`, `.sf-down`, `.sf-after(.card, p, b)`, `.sf-mark` | 4탄 `sx-talk` 등과 같은 값 |
| `.sf-tip.card` | `margin-top: 24px; padding: 20px 32px 22px; display:flex; align-items:baseline; gap: 16px;` + `::before { background: var(--paper-warm); border-color: var(--sun-deep); }` |
| `.sf-tip-label` | `flex:none;` Gaegu 700 34px `var(--p-deep)` |
| `.sf-tip-text` | 30px lh 1.45 600 `var(--ink)` / 안의 `b`는 800 `var(--p-deep)` |

### 3-2. `cards/Summary.jsx` (08)

4탄 `Summary.jsx`를 복사해서 `sx-summary-*` → `sf-summary-*`, 행만 교체. "이름 | 기능" 두 칸, 표 아래 주석 없음. 값은 #01 `compare-*`와 같음 (이름 칸 280px, 행 최소 128px, 이름 Jua 38px + `small` 26px, 기능 30px 600).
`Autocomplete`가 이름 칸에서 잘리면 그 행만 `sf-summary-name-wrap`으로 두 줄 허용 (`white-space: normal`).

### 3-3. `cards/Chat.jsx`, `Cover.jsx`, `Ending.jsx`

4탄 파일을 복사해서 `sx-` → `sf-`로 바꾸고 문구·목업만 5장대로 교체. 크기·배치는 그대로.

- **Cover**: #01·4탄처럼 `p.sf-cover-sub` 두 줄. 2탄 목록 형식(`cover-agenda`)은 쓰지 않아요
- **Chat**: 제목 `이런 상황이 답답하시죠,,`, 나→AI 두 번 + `아니 그게 아니라,,` (반복 표시 없음). 대화 묶음은 `.sf-chat-thread { margin: 30px; display: flex; flex-direction: column; gap: 50px; }`
- **Ending**: 다음 편 제목 `?? 편` (주제 미정, 자리표시). 설명 줄은 렌더링하지 않음

---

## 4. 목업 명세 (`mocks.jsx` + `cards.css`의 mocks 구역)

공통
- 용어 카드 5개 + 채팅용 `PickListMock` 모두 폰 300×560: `<div className="phone"><div className="scr"><div className="sm-screen">…</div></div><div className="notch" /></div>` (공용 `.phone/.scr/.notch` 사용)
- `.sm-screen { position:absolute; inset:0; padding: 50px 22px 22px; display:flex; flex-direction:column; gap: 14px; }`
- 화면 위쪽에 공통으로 제목 막대 `.sm-ttl` (`height:14px; width:110px; border-radius:7px; background: var(--ink-soft);`) + `.sm-ln` 막대(`height:12px; border-radius:6px; background: var(--paper-line);`)
- 강조 요소만 핑크(`--p` / `--p-deep`), 나머지는 회색 막대. 테두리 크레파스는 `::after`에 `filter:url(#wax-stroke)` (글자에는 필터 금지)
- 실제 글자는 꼭 필요한 곳에만, Pretendard 700 20~22px `var(--ink)`
- 같은 목업을 02장 AI 말풍선 안에 0.22배로 다시 써요 (`PickListMock`, `SortMock`)

### 4-1. `SearchBarMock` (03)
1. `.sm-ttl` + `.sm-ln` 80%
2. 검색 칸 `.sm-search` (높이 52, 흰 바탕, 3px `--p-deep` 테두리, radius 12): 왼쪽 돋보기(원 18px + 손잡이, `--p-deep` 선, 글자 아님), 오른쪽은 `.sm-ln` 막대(플레이스홀더)
3. 둘레에 공용 `.ping` (노란 점선 원)
4. 아래 상품 행 3개 (높이 44, 왼쪽 작은 네모 + `.sm-ln`)
- **검색어를 치는 칸**이 바로 보여야 해요. 펼친 목록·칩은 넣지 않아요

### 4-2. `FilterMock` (04)
1. `.sm-ttl` + 실제 글자 `색상` (22px)
2. 선택 행 3개 (높이 48): 왼쪽 네모 28px, 오른쪽 `.sm-ln`
   - **1행만 체크됨**: 바탕 `var(--p)`, 테두리 `--p-deep`, 가운데 `✓` + 실제 글자 `블랙`
   - 2·3행 빈 칸: 흰 바탕, 테두리 `--ink-faint`
3. 아래 상품 행 **2개만** 또렷, 흐린 행 2개(`opacity:.35`) → 조건에 안 맞는 걸 **뺀** 느낌
- Sort와 다르게 **개수가 줄어든** 모양이 바로 보여야 해요

### 4-3. `SortMock` (05)
1. `.sm-ttl`
2. 정렬 칸 `.sm-select` (높이 52, 3px `--p-deep` 테두리, radius 12): 왼쪽 실제 글자 `최신순`, 오른쪽 `▼`
3. 상품 행 **4개 모두** 또렷 (왼쪽 작은 네모 + `.sm-ln`) → 개수는 그대로, 줄만 세움
- Filter(빠진 행)와 다르게 **모두 남아 있는** 모양이 바로 보여야 해요

### 4-4. `ChipMock` (06)
1. `.sm-ttl` + `.sm-ln` 70%
2. 칩 줄 `.sm-chips`: 알약 2개
   - `블랙` + `×` (바탕 `var(--p)`, 3px `--p-deep` 테두리, radius 999)
   - `3만원대` + `×` (같은 모양)
3. 둘레에 공용 `.ping`
4. 아래 상품 행 2개
- **x로 지울 수 있는 작은 태그**가 바로 보여야 해요. Badge처럼 x 없는 상태 라벨로 그리지 않아요

### 4-5. `AutocompleteMock` (07)
1. `.sm-ttl`
2. 검색 칸 `.sm-search`: 왼쪽 돋보기, 실제 글자 `블` (`--ink` 20px 700)
3. 바로 아래 추천 목록 `.sm-suggest` (흰 바탕 + 5px `--p-deep` 크레파스 테두리, radius 14):
   - 행 3개(높이 44). **1행만** 실제 글자 `블랙 원피스` + `var(--p)` 배경
   - 2·3행은 `.sm-ln` 막대
4. 목록 아래 흐린 본문 막대 1줄 (`opacity:.45`)
- **입력 칸에 글자가 있고**, 아래 추천이 그 글자와 이어져야 해요. 3탄 Dropdown(빈 칸 + 정해진 지역 목록)과 다르게 보여야 해요

### 4-6. `PickListMock` (02장 AI 1)
1. `.sm-ttl` + `.sm-ln` 80%
2. 선택 칸 `.sm-select`: 왼쪽 실제 글자 `전체`, 오른쪽 `▼`
3. 펼친 목록 `.sm-suggest`: 행 4개, 둘째 행만 `var(--p)` + `✓`, 나머지는 `.sm-ln`
- **검색 칸이 없고** 정해진 목록만 펼쳐짐. Autocomplete·Search Bar와 다르게 보여야 해요
- 3탄 `DropdownMock`을 import 하지 말고, 이 편 `sm-`로 그려요

---

## 5. 장별 명세

> `HL("x")` = `<span className="hl">x</span>`, `B("x")` = `<b>x</b>`, `<br>` = `<br />`. 줄바꿈 위치까지 확정이에요.

### 01 · 커버 (`cards/Cover.jsx`)

| 자리 | 값 |
|---|---|
| 제목 `h1.display.sf-cover-title` | `AI가 알아먹는<br>{HL("UI 용어집")} 6탄` |
| 부제 `p.sf-cover-sub` | `AI한테 설명하다 지친<br>나를 위한 검색하고 거르는 UI 5개` |
| 나머지 | blob, 점선 루트, X 표시, 별 2개, `card-head`(QuestTag + 나침반) 4탄/#01 그대로 |

- 형광펜: **"UI 용어집"**
- 크기: 제목 112px lh 1.24, 부제 38px (#01·4탄과 같음). 제목+부제는 `.sf-cover-copy`로 묶어 세로 가운데
- 키커, 메모, "밀어서 …" 없음 (시리즈 규칙)
- 완료 기준: 4탄 커버와 나란히 놓았을 때 위치·크기가 같고 "6탄"·부제만 다름. 부제가 2줄이고 잘리지 않음

### 02 · 이런 상황이 답답하시죠 (`cards/Chat.jsx`)

| 자리 | 값 |
|---|---|
| 제목 | `이런 상황이 답답하시죠,,` |
| 나 1 | `위에 검색어 넣는 칸<br>하나 만들어줘` (캡션 인용과 같은 문장) |
| AI 1 | 미니 `<PickListMock />` + `(누르면 펼쳐지는<br>목록을 만들어 옴)` |
| 나 2 | `가격대랑 색상으로<br>맞는 것만 남기게 해줘` |
| AI 2 | 미니 `<SortMock />` + `(최신순으로 줄만<br>바꿔 옴)` |
| 나 3 (마지막) | `아니 그게 아니라,,` |
| 결론 카드 | `{HL("Search Bar, Filter")}라고<br>한 마디면 끝났을 일` |

- 순서: 나 1 → AI 1 → 나 2 → AI 2 → 나 3 (시리즈 규칙)
- 말풍선 글자는 #01·4탄 구현처럼 **따옴표 없이** 써요
- AI 쪽은 실제 대사가 아니라 괄호 안 장면 설명
- **주석 없음**: 실제/예시 장면 여부 주석을 넣지 않아요 (시리즈 규칙)
- 크기는 #01·4탄 값 그대로 (제목 72px, 말풍선 30px, AI 말풍선 28px, 원 56px, 미니 목업 `scale(.22)` 66×124, 결론 카드 44px)
- 형광펜: **"Search Bar, Filter"**
- 완료 기준
  - 말풍선이 모두 2줄 이하, "나" 원과 겹치지 않음
  - 미니 목업 두 개가 서로 다르게 보임 (펼친 목록 / 최신순 정렬)
  - 결론 카드가 y=1230 위, 그 아래 주석 없음

### 03 · UI 용어 ① Search Bar (`cards/SearchBarCard.jsx`)

| prop | 값 |
|---|---|
| `page` | `"03"` |
| `mock` | `<SearchBarMock />` |
| `stage` | `UI 용어 ①` |
| `term` / `pron` | `Search Bar` / `[서치 바]` |
| `mean` | `검색어를 입력하는 칸이에요.` |
| `when` | `목록에서 원하는 걸 글자로 찾을 때 써요.` |
| `before` | `"위에 검색어 넣는 칸 만들어줘"` |
| `after` | `"상품 목록 위에 {B("Search Bar")}를 넣어줘"` |
| `tip` | `치다 보면 추천이 뜨면 {B("Search Bar")} + {B("Autocomplete")}예요.` |

### 04 · UI 용어 ② Filter (`cards/FilterCard.jsx`)

| prop | 값 |
|---|---|
| `page` | `"04"` |
| `mock` | `<FilterMock />` |
| `stage` | `UI 용어 ②` |
| `term` / `pron` | `Filter` / `[필터]` |
| `mean` | `조건에 맞는 것만 남기는 칸이에요.` |
| `when` | `가격대, 색상처럼 조건으로 걸러 볼 때 써요.` |
| `before` | `"가격대랑 색상으로 맞는 것만 남기게 해줘"` |
| `after` | `"상품은 {B("Filter")}로 가격대와 색상을 고르게 해줘"` |
| `tip` | `{B("Filter")}는 빼기, {B("Sort")}는 줄 세우기예요.` |

### 05 · UI 용어 ③ Sort (`cards/SortCard.jsx`)

| prop | 값 |
|---|---|
| `page` | `"05"` |
| `mock` | `<SortMock />` |
| `stage` | `UI 용어 ③` |
| `term` / `pron` | `Sort` / `[소트]` |
| `mean` | `순서만 바꾸는 칸이에요.` |
| `when` | `최신순, 낮은 가격순처럼 줄만 바꿀 때 써요.` |
| `before` | `"최신순이랑 낮은 가격순으로 줄 세우게 해줘"` |
| `after` | `"목록은 {B("Sort")}로 최신순을 고르게 해줘"` |
| `tip` | `{B("Sort")}는 개수가 그대로, {B("Filter")}는 조건에 안 맞는 걸 빼요.` |

### 06 · UI 용어 ④ Chip (`cards/ChipCard.jsx`)

| prop | 값 |
|---|---|
| `page` | `"06"` |
| `mock` | `<ChipMock />` |
| `stage` | `UI 용어 ④` |
| `term` / `pron` | `Chip` / `[칩]` |
| `mean` | `고른 조건을 작은 태그로 보여 주고 x로 지우는 칸이에요.` |
| `when` | `Filter로 고른 조건을 한눈에 보고 쉽게 지울 때 써요.` |
| `before` | `"고른 조건을 작은 네모에 넣고 x로 지우게 해줘"` |
| `after` | `"고른 Filter는 {B("Chip")}으로 보여 주고 x로 지우게 해줘"` |
| `tip` | `{B("Chip")}은 눌러서 지워요. {B("Badge")}는 상태만 보여 주고 보통 못 지워요.` |

### 07 · UI 용어 ⑤ Autocomplete (`cards/AutocompleteCard.jsx`)

| prop | 값 |
|---|---|
| `page` | `"07"` |
| `mock` | `<AutocompleteMock />` |
| `stage` | `UI 용어 ⑤` |
| `term` / `pron` | `Autocomplete` / `[오토컴플리트]` |
| `mean` | `입력하는 중에 아래에 추천 검색어가 뜨는 칸이에요.` |
| `when` | `검색어를 다 치기 전에 비슷한 말을 추천할 때 써요.` |
| `before` | `"치면 밑에 추천 검색어가 뜨게 해줘"` |
| `after` | `"Search Bar에 {B("Autocomplete")}를 붙여 줘"` |
| `tip` | `{B("Autocomplete")}는 치면서 추천, 3탄 {B("Dropdown")}은 정해진 목록에서 고르기예요.` |
| `wrapName` | `true` (`Autocomplete` 104px가 `[오토컴플리트]`와 한 줄에 안 들어가면 발음이 다음 줄로) |

**03~07 공통**
- 형광펜: 없음 (강조는 `<b>`만)
- 완료 기준
  - `when` 한 문장이 1줄 (넘치면 2줄까지)
  - before/after 박스 글자가 오른쪽 칸 안에서 넘치지 않음
  - 팁 카드가 1~2줄, y=1230 위에서 끝남
  - 목업에서 강조 요소(검색 칸 / 체크된 조건+빠진 행 / 최신순+모든 행 / x 있는 칩 / 치는 중 추천)가 바로 보임
  - 04 ↔ 05는 짝 장이라 나란히 놓았을 때 레이아웃 위치가 같음

### 08 · 한 눈에 정리 (`cards/Summary.jsx`)

| 자리 | 값 |
|---|---|
| stage | `한 눈에 정리` |
| title | `헷갈릴 땐 {HL("이 표")} 하나` |
| 메모 | `저장 필수!` |
| 머리줄 | `이름` / `기능` |

| `name` | `ko` (작은 글자) | `job` |
|---|---|---|
| `Search Bar` | `서치 바` | `검색어를 입력하는 칸이에요.` |
| `Filter` | `필터` | `조건에 맞는 것만 남겨요.` |
| `Sort` | `소트` | `최신순처럼 순서만 바꿔요.` |
| `Chip` | `칩` | `고른 조건을 작은 태그로 보여 주고 지워요.` |
| `Autocomplete` | `오토컴플리트` | `치다 보면 추천 검색어가 떠요.` |

- 표 아래 주석 없음
- 형광펜: **"이 표"**
- 완료 기준: 5행이 표 안에 들어가고 y=1230 위, 기능 칸 각 1~2줄, `Autocomplete`가 이름 칸(280px)에서 잘리지 않음 (필요하면 그 행만 두 줄)

### 09 · 오늘의 정리 (`cards/Ending.jsx`, 4탄 구조 복사)

```jsx
const LOOT = ["Search Bar", "Filter", "Sort", "Chip", "Autocomplete"];
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

- 장식: 4탄과 같은 노트 + 체크 낙서, 다음 편 카드 오른쪽 위 연필 낙서 (지도·깃발·점선 루트·열쇠 없음)
- 완료 기준: 화면에 `QUEST`·`퀘스트`·`탐험`·`NEXT` 글자 없음 / 칩 5개가 2줄 안 / CTA가 낙서·메모와 겹치지 않음

---

## 6. 마무리 체크리스트

- [ ] `?post=ui-talk-06`에서 9장이 순서대로 보임
- [ ] `POST=ui-talk-06 npm run export`로 1080×1350 PNG 9장 (또는 같은 Chrome 캡처)
- [ ] 모든 장에 계정명(`Post.jsx`)과 `NN / 09`
- [ ] 배지·`QUEST #`·진행 루트·모험 표현 없음 (말투 규칙)
- [ ] 01 커버 `AI가 알아먹는 UI 용어집 6탄`, 부제 #01 두 줄
- [ ] 02 제목 `이런 상황이 답답하시죠,,`, 나→AI 두 번 + `아니 그게 아니라,,`(반복 표시 없음), 주석 없음, 첫 말이 캡션 인용과 같은 문장
- [ ] 03~07 단계 라벨 `UI 용어 ①`~`⑤`, 모두 `when` 한 문장과 팁 카드
- [ ] 04·05 팁에 Filter vs Sort, 07 팁에 Autocomplete vs 3탄 Dropdown, 06 팁에 Chip vs Badge
- [ ] 08 "이름 | 기능" 5행, 표 아래 주석 없음
- [ ] 형광펜은 01 "UI 용어집", 02 "Search Bar, Filter", 08 "이 표" 3곳뿐
- [ ] 새 클래스는 모두 `sf-` / `sm-`
- [ ] 5탄 엔딩 다음 편이 `검색하고 거르는 UI 편` + 설명 2줄, 캡션 다음 편 줄도 같음
- [ ] 바뀐 기존 파일은 `App.jsx`, `main.jsx`, 5탄 Ending·caption·brief·(엔딩 설명용 CSS)뿐. #01·2탄·3탄·4탄 미리보기가 예전과 같음
- [ ] `caption.md` 저장

---

## 7. caption.md 초안

```
# AI가 알아먹는 UI 용어집 6탄: 검색하고 거르는 UI 캡션

위에 검색어 넣는 그 칸, 이름이 뭐더라? 🤔

"위에 검색어 넣는 칸 하나 만들어줘"
이렇게 말하면 AI가 누르면 펼쳐지는 목록을 만들어 오기도 해요.
"Search Bar" 한 단어면 바로 알아듣는데 말이에요.

그래서 오늘은 검색하고 거르는 UI 5개를 공부해서 정리했어요 📒

🔍 Search Bar (서치 바): 검색어를 입력하는 칸
🎛️ Filter (필터): 조건에 맞는 것만 남기기. 가격대, 색상처럼요
↕️ Sort (소트): 순서만 바꾸기. 최신순, 낮은 가격순
🏷️ Chip (칩): 고른 조건을 작은 태그로 보여 주고 x로 지워요
⌨️ Autocomplete (오토컴플리트): 입력하는 중에 아래에 추천 검색어가 떠요

👀 헷갈리는 짝
└ Filter는 빼기, Sort는 줄 세우기예요
└ Autocomplete는 치면서 추천, 3탄 Dropdown은 정해진 목록에서 고르기예요
└ Chip은 눌러서 지워요. Badge는 상태만 보여 주고 보통 못 지워요

✏️ 이렇게 말해보세요
잘못된 설명: "위에 검색어 넣는 칸"
용어를 알고 난 후: "상품 목록 위에 Search Bar를 넣어줘"
잘못된 설명: "가격대랑 색상으로 맞는 것만 남기게 해줘"
용어를 알고 난 후: "상품은 Filter로 가격대와 색상을 고르게 해줘"
잘못된 설명: "최신순이랑 낮은 가격순으로 줄 세우게 해줘"
용어를 알고 난 후: "목록은 Sort로 최신순을 고르게 해줘"
잘못된 설명: "고른 조건을 작은 네모에 넣고 x로 지우게 해줘"
용어를 알고 난 후: "고른 Filter는 Chip으로 보여 주고 x로 지우게 해줘"
잘못된 설명: "치면 밑에 추천 검색어가 뜨게 해줘"
용어를 알고 난 후: "Search Bar에 Autocomplete를 붙여 줘"

8번째 장 정리표는 헷갈릴 때 꺼내 보기 좋아요.

🔖 저장해두고 다음에 AI한테 써먹어보세요
👀 팔로우하고 다음 편도 같이 봐요!
💬 이름 몰라서 설명만 길어졌던 UI 있으면 댓글로 알려주세요. 다음 편에 넣어볼게요

.
#UI용어 #UIUX #UI디자인 #웹디자인 #앱디자인 #프론트엔드 #웹개발 #개발자 #개발공부 #코딩공부 #AI코딩 #바이브코딩 #프롬프트 #프롬프트엔지니어링 #ChatGPT #Claude #디자인용어 #검색 #필터 #칩
```

---

## 8. 열려 있는 결정

- (해결됨) **커버 부제 형식**: #01 두 줄 형식으로 통일. 이 편도 `p.sf-cover-sub` 두 줄
- **다음 편(7탄) 주제**: 09장 다음 편 제목은 `?? 편` 자리표시, 설명 줄은 비워 둠. 정해지면 `Ending.jsx`의 제목과 설명 2줄, 캡션의 "👀 팔로우하고 다음 편도 같이 봐요!" 줄(주제 넣기)을 바꿔요
- (해결됨) **이전 편(5탄) 다음 편 예고**: 5탄 엔딩·캡션의 다음 편을 `검색하고 거르는 UI 편` + 설명 2줄로 맞춰 둠
