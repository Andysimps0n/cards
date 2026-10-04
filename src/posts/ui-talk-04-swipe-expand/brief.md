# BRIEF · AI가 알아먹는 UI 용어집 4탄: 넘기고 펼치는 UI (React + Vite)

> 이 문서는 Cursor가 그대로 따라 만들 수 있게 쓴 명세예요. **문구는 확정본**이라 바꾸지 말고, 넘치면 아래 "넘칠 때" 규칙대로만 줄여요.
> 시리즈 공통 규칙은 `document/04-series-rules.md`가 이 문서보다 우선이에요 (말투 규칙 포함). 시작 전에 `document/00-README.md`, `01-design-principles.md`, `03-UI.md`, `04-series-rules.md`를 읽어요.
> 구현은 **#01(`src/posts/ui-talk-01/`)의 9장 구조**를 따르고, 새 규칙이 이미 반영된 **3탄(`src/posts/ui-talk-03-inputs/`)의 Cover·Chat·TermCard·Summary·Ending**을 복사 원본으로 써요.

---

## 0. 메타

| 항목 | 값 |
|---|---|
| 시리즈 | 「AI한테 이렇게 말해」 (`series="talk"`, 배지 숨김) · 커버 제목 `AI가 알아먹는 UI 용어집 4탄` |
| 테마 | 넘기고 펼치는 UI (같은 자리에서 바꾸거나, 아래로 펼치거나, 옆으로 넘기는 칸) |
| 용어 5개 | Tab · Accordion · Carousel · Pagination · Hamburger Menu |
| 이번 편의 핵심 | 헷갈리는 짝 두 개: **Tab vs Accordion** (옆으로 바꾸기 vs 아래로 펼치기), **Pagination vs 무한 스크롤** (페이지 번호 vs 내리면 더 나옴). 1탄 **Drawer vs Hamburger Menu**(열리는 판 vs 아이콘)도 07장 팁에 짧게. → 03·04·06·07장 팁과 08장 정리표에 넣음 |
| 필러 색 | 🎨 UI/UX 핑크 (`<Post pillar="ui">`) |
| 캔버스 / 장 수 | 1080 × 1350 / 9장 (`<Post total="09">` 기본값) |
| slug | `ui-talk-04-swipe-expand` |
| 코드 위치 | `src/posts/ui-talk-04-swipe-expand/` |
| 클래스 접두사 | 카드 `sx-`, 목업 `xm-` (#01·2탄 `hf-`/`pm-`·3탄 `in-`/`im-`과 충돌 방지) |
| 미리보기 | `npm run dev` → `http://127.0.0.1:5173/?post=ui-talk-04-swipe-expand` (한 장만: `&card=03`) |
| 출력(PNG) | `POST=ui-talk-04-swipe-expand npm run export` (일부만: `... npm run export -- 03 05`) → 프로젝트 루트 `posts/ui-talk-04-swipe-expand/still-cuts/01.png` … `09.png` |
| 계정명 | `src/ui/Post.jsx`가 자동으로 넣음 (Andy가 직접 관리). 이 편 코드와 문서에는 계정명을 적거나 바꾸지 않음 |
| 캡션 | `src/posts/ui-talk-04-swipe-expand/caption.md` (7장 초안 그대로 저장) |

### 장 순서 한눈에

| # | 역할 | 컴포넌트 (`cards/`) | 복사 원본 |
|---|---|---|---|
| 01 | 커버 | `Cover.jsx` | 3탄 `Cover.jsx` (= #01 두 줄 부제) |
| 02 | 이런 상황이 답답하시죠 (채팅) | `Chat.jsx` | 3탄 `Chat.jsx` (나→AI 두 번 + 반복 + `아니 그게 아니라,,`) |
| 03 | UI 용어 ① Tab | `TabCard.jsx` → `TermCard.jsx` | 3탄 `TermCard.jsx` |
| 04 | UI 용어 ② Accordion | `AccordionCard.jsx` → `TermCard` | 〃 |
| 05 | UI 용어 ③ Carousel | `CarouselCard.jsx` → `TermCard` | 〃 |
| 06 | UI 용어 ④ Pagination | `PaginationCard.jsx` → `TermCard` | 〃 |
| 07 | UI 용어 ⑤ Hamburger Menu | `HamburgerCard.jsx` → `TermCard` | 〃 |
| 08 | 한 눈에 정리 (정리표) | `Summary.jsx` | 3탄 `Summary.jsx` |
| 09 | 오늘의 정리 (엔딩) | `Ending.jsx` | 3탄 `Ending.jsx` (공부 노트형, 다음 편 설명 2줄 있음) |

### 다시 쓸 수 있는 것 / 새로 만드는 것

| 대상 | 판단 |
|---|---|
| `src/ui/Post.jsx`, `QuestTag.jsx`, `Icon.jsx`, `Filters.jsx` | 그대로 import 해서 사용 (수정 금지) |
| `src/styles/mock.css`의 `.phone`, `.scr`, `.notch`, `.app`(+`.hero`, `.ln`, `.cards`), `.panel`, `.ping`, `.cursor`, `.scrim`, `.drawer`, `.burger` | 그대로 클래스 사용 가능 (수정 금지) |
| `src/ui/Mock.jsx` (modal/sheet/drawer/toast/tooltip) | 넘김·펼침 목업이 없고 `Phone`도 export 안 돼서 **쓰지 않음**. Drawer 모양은 공용 `.drawer` 클래스로 그림 |
| 3탄 `TermCard.jsx` | `mock`을 JSX로 받고 `tip`이 있는 구조라, **이 편 `cards/TermCard.jsx`로 복사해서 `in-` → `sx-`로 바꿈** |
| 3탄 `Cover/Chat/Summary/Ending.jsx` | 새 시리즈 규칙이 반영된 구조라 복사해서 `in-` → `sx-`로 바꾸고 문구·목업만 교체. Ending에는 다음 편 설명 2줄을 넣어요 |
| 목업 5개 | 이 편 `mocks.jsx`에 새로 만듦 (`xm-` 접두사) |

---

## 1. 공통 규칙 (모든 장)

1. **수정 금지**: `src/styles/*`, `src/ui/*`, `src/posts/ui-talk-01/**`, `src/posts/ui-talk-02-header-footer/**`. 3탄 폴더는 **엔딩 다음 편 제목·설명·캡션·brief 8장만** 이 작업에서 고쳐요. 바꿔도 되는 기존 파일은 `src/App.jsx`(편 등록 한 줄), `src/main.jsx`(css import 한 줄), 그리고 3탄 엔딩·캡션·brief예요. `scripts/export.mjs`는 이미 `POST=`를 지원해서 고치지 않아요.
2. **클래스 충돌 금지**: 새 클래스는 모두 `sx-`(목업은 `xm-`). 다른 편 클래스를 가져다 쓰지 말고 복사 후 이름을 바꿔요. 그대로 써도 되는 공용 클래스: `.display`, `.hand`, `.hl`, `.chip`, `.card`, `.card.warm`, `.layer`, `.footer`, `.quest-tag`, `.card-head`, 위 표의 `mock.css` 클래스.
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
src/posts/ui-talk-04-swipe-expand/
├─ brief.md          # 이 문서
├─ caption.md        # 7장 초안
├─ cards.jsx         # 카드 순서 배열
├─ cards.css         # 이 편 스타일 전부 (sx-, xm-)
├─ ids.js            # export용 카드 id
├─ mocks.jsx         # 목업 5개
└─ cards/
   ├─ Cover.jsx
   ├─ Chat.jsx
   ├─ TermCard.jsx         # 03~07 공용 레이아웃
   ├─ TabCard.jsx          # 03
   ├─ AccordionCard.jsx    # 04
   ├─ CarouselCard.jsx     # 05
   ├─ PaginationCard.jsx   # 06
   ├─ HamburgerCard.jsx    # 07
   ├─ Summary.jsx          # 08
   └─ Ending.jsx           # 09
```

### 2-2. `cards.jsx`, `ids.js`

```jsx
/* 이 배열 순서가 미리보기 스크롤 순서이자 export 순서입니다. */
export const cards = [
  { id: "01", label: "cover", Card: Cover },
  { id: "02", label: "chat", Card: Chat },
  { id: "03", label: "Tab", Card: TabCard },
  { id: "04", label: "Accordion", Card: AccordionCard },
  { id: "05", label: "Carousel", Card: CarouselCard },
  { id: "06", label: "Pagination", Card: PaginationCard },
  { id: "07", label: "Hamburger Menu", Card: HamburgerCard },
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
import { cards as talk04 } from "./posts/ui-talk-04-swipe-expand/cards.jsx";
// POSTS 안에
  "ui-talk-04-swipe-expand": talk04,
```

```jsx
// src/main.jsx
import "./posts/ui-talk-04-swipe-expand/cards.css";
```

### 2-4. export

- `POST=ui-talk-04-swipe-expand npm run export` → `posts/ui-talk-04-swipe-expand/still-cuts/01~09.png`
- `scripts/export.mjs`는 수정하지 않아요 (`POST` 환경변수와 `ids.js`를 이미 읽음)
- 이 VM에서 Mac 경로 때문에 실패하면, 같은 Chrome 캡처로 `posts/ui-talk-04-swipe-expand/still-cuts/01.png`~`09.png`에 뽑아요

---

## 3. 새 컴포넌트 명세

### 3-1. `cards/TermCard.jsx` (03~07 공용)

3탄 `TermCard.jsx`를 복사해서 `in-` → `sx-`만 바꿔요.
- `mock`은 JSX로 받아요 (`mock={<TabMock />}`)
- `when`은 `mean` 바로 아래 (시리즈 규칙, 필수)
- before/after 라벨은 `잘못된 설명` / `용어를 알고 난 후`
- `Hamburger Menu`처럼 긴 이름은 `wrapName`으로 발음을 다음 줄로 내려요

**props**: `name, page, mock, stage, term, pron, mean, when, tip, before, after, wrapName`

```jsx
<Post name={name} pillar="ui" page={page}>
  <div className="card-head"><QuestTag series="talk" showType={false} /></div>
  <div className="sx-stage">{stage}</div>
  <div className="sx-name"><h1 className="display">{term}</h1><span className="sx-pron">{pron}</span></div>
  <p className="sx-mean">{mean}</p>
  <p className="sx-when">{when}</p>
  <div className="sx-row">
    <div className="sx-mock">{mock}</div>
    <div className="sx-talk">
      <div className="sx-before">
        <div className="sx-lab"><span className="sx-mark"><Icon name="x" color="var(--ink-soft)" stroke={10} /></span>잘못된 설명</div>
        <p>{before}</p>
      </div>
      <div className="sx-down"><Icon name="arrow" color="var(--p-deep)" stroke={8} /></div>
      <div className="card sx-after">
        <div className="sx-lab"><span className="sx-mark"><Icon name="star" color="var(--sun-deep)" stroke={8} /></span>용어를 알고 난 후</div>
        <p>{after}</p>
      </div>
    </div>
  </div>
  <div className="card sx-tip">
    <span className="sx-tip-label">✏️ 팁</span>
    <span className="sx-tip-text">{tip}</span>
  </div>
</Post>
```

| 선택자 | 값 (3탄 `in-*` = #01 `term-*` 기준) |
|---|---|
| `.sx-stage` | `margin-top: 44px;` Gaegu 700 42px `var(--p-deep)` |
| `.sx-name` | `display:flex; align-items:baseline; gap:24px;` / `h1`: 104px lh 1.12 |
| `.sx-pron` | Pretendard 600 38px `var(--ink-soft)` |
| `.sx-mean` | `margin-top: 14px;` 38px lh 1.5 600 |
| `.sx-when` | `margin-top: 6px;` 32px lh 1.45 500 `var(--ink-soft)` |
| `.sx-row` | `margin-top: 32px; display:grid; grid-template-columns: 340px 1fr; gap: 36px; align-items:center;` |
| `.sx-mock` | `display:flex; justify-content:center; align-items:center; height: 540px;` |
| `.sx-talk`, `.sx-lab`, `.sx-before(+::before, p)`, `.sx-down`, `.sx-after(.card, p, b)`, `.sx-mark` | 3탄 `in-talk` 등과 같은 값 |
| `.sx-tip.card` | `margin-top: 24px; padding: 20px 32px 22px; display:flex; align-items:baseline; gap: 16px;` + `::before { background: var(--paper-warm); border-color: var(--sun-deep); }` |
| `.sx-tip-label` | `flex:none;` Gaegu 700 34px `var(--p-deep)` |
| `.sx-tip-text` | 30px lh 1.45 600 `var(--ink)` / 안의 `b`는 800 `var(--p-deep)` |

### 3-2. `cards/Summary.jsx` (08)

3탄 `Summary.jsx`를 복사해서 `in-summary-*` → `sx-summary-*`, 행만 교체. "이름 | 기능" 두 칸, 표 아래 주석 없음. 값은 #01 `compare-*`와 같음 (이름 칸 280px, 행 최소 128px, 이름 Jua 38px + `small` 26px, 기능 30px 600).
`Hamburger Menu`가 이름 칸에서 잘리면 그 행만 `sx-summary-name-wrap`으로 두 줄 허용 (`white-space: normal`).

### 3-3. `cards/Chat.jsx`, `Cover.jsx`, `Ending.jsx`

3탄 파일을 복사해서 `in-` → `sx-`로 바꾸고 문구·목업만 5장대로 교체. 크기·배치는 그대로.

- **Cover**: #01·3탄처럼 `p.sx-cover-sub` 두 줄. 2탄 목록 형식(`cover-agenda`)은 쓰지 않아요 (8장, 커버 부제 #01 두 줄로 통일)
- **Chat**: 제목 `이런 상황이 답답하시죠,,`, 나→AI 두 번 + `sx-chat-loop` 반복 표시 + `아니 그게 아니라,,`
- **Ending**: 다음 편 제목 `페이지 구역 편` + 설명 2줄 (`sx-ending-desc`, 3탄에 없는 줄이니 2탄 `hf-ending-desc` 값을 복사: 32px `--ink-soft` 500 lh 1.45)

---

## 4. 목업 명세 (`mocks.jsx` + `cards.css`의 mocks 구역)

공통
- 5개 모두 폰 300×560: `<div className="phone"><div className="scr"><div className="xm-screen">…</div></div><div className="notch" /></div>` (공용 `.phone/.scr/.notch` 사용)
- `.xm-screen { position:absolute; inset:0; padding: 50px 22px 22px; display:flex; flex-direction:column; gap: 14px; }`
- 화면 위쪽에 공통으로 제목 막대 `.xm-ttl` (`height:14px; width:110px; border-radius:7px; background: var(--ink-soft);`) + `.xm-ln` 막대(`height:12px; border-radius:6px; background: var(--paper-line);`)
- 강조 요소만 핑크(`--p` / `--p-deep`), 나머지는 회색 막대. 테두리 크레파스는 `::after`에 `filter:url(#wax-stroke)` (글자에는 필터 금지)
- 실제 글자는 꼭 필요한 곳에만, Pretendard 700 20~22px `var(--ink)`
- 같은 목업을 02장 AI 말풍선 안에 0.22배로 다시 써요 (`AccordionMock`, `PaginationMock`)

### 4-1. `TabMock` (03)
1. `.xm-ttl` + `.xm-ln` 80%
2. 탭 줄 `.xm-tabs` (높이 48, 3칸): 1·3칸은 `.xm-ln` 막대, **2칸만** 실제 글자 `상의` + `var(--p)` 배경 + 아래 4px `--p-deep` 밑줄
3. 아래 본문: 연한 박스(높이 90, `var(--peach)`) + `.xm-ln` 2줄
- 선택된 탭이 바로 보여야 해요 (같은 자리에서 내용이 바뀐다는 뜻)

### 4-2. `AccordionMock` (04)
1. `.xm-ttl` + 실제 글자 `FAQ` (22px)
2. 행 3개. 접힌 행(높이 48): 왼쪽 `.xm-ln` + 오른쪽 `›`
3. **2행만 펼침**: 머리 줄에 실제 글자 `배송` + `⌄`, 바탕 `var(--p)` opacity .35, 아래 본문 막대 2줄 (흰 칸, 왼쪽 패딩)
- Tab과 다르게 **세로로 늘어나는** 모양이 바로 보여야 해요

### 4-3. `CarouselMock` (05)
1. `.xm-ttl`
2. 슬라이드 줄 `.xm-slide-row`: 큰 배너(높이 150, `var(--peach)`, radius 16, 5px `--p-deep` 테두리) + 오른쪽에 다음 장 살짝(폭 36, `var(--paper-line)`)
3. 점 3개 `.xm-dots`: 가운데만 `var(--p-deep)` 지름 12, 나머지는 `var(--ink-faint)` 지름 8
4. 배너 아래 흐린 막대 2줄
- 커서(공용 `.cursor` SVG)를 배너 오른쪽 아래
- **옆으로 넘긴다**는 게 바로 보여야 해요

### 4-4. `PaginationMock` (06)
1. `.xm-ttl` + `.xm-ln` 80%
2. 목록 행 4개 (높이 44, 왼쪽 작은 네모 + `.xm-ln`)
3. 맨 아래 페이지 번호 `.xm-pages`: `‹` / `1` / **`2`** / `3` / `›`
   - `2`만 지름 36 원, 바탕 `var(--p)`, 글자 `--ink` 700 20px
   - 나머지는 `--ink-soft` 20px
- Carousel(점·배너)과 다르게 **숫자 페이지**가 바로 보여야 해요

### 4-5. `HamburgerMock` (07)
1. 위쪽 앱바: 공용 `.burger`(줄 세 개, `--p-deep`) + `.xm-ttl` + 둘레에 공용 `.ping` (노란 점선 원)
2. 공용 `.scrim.light` + 공용 `.drawer` (왼쪽에서 70%): 프로필 점 + 메뉴 행 3개, 첫째 행만 `on`
- **줄 세 개 아이콘**이 강조되고, 옆에서 열리는 판은 Drawer라는 걸 07장 팁과 맞춰요
- 아이콘만 있고 판이 없으면 1탄 Drawer와 구분이 안 되니, 아이콘 + 열린 판을 같이 보여요

---

## 5. 장별 명세

> `HL("x")` = `<span className="hl">x</span>`, `B("x")` = `<b>x</b>`, `<br>` = `<br />`. 줄바꿈 위치까지 확정이에요.

### 01 · 커버 (`cards/Cover.jsx`)

| 자리 | 값 |
|---|---|
| 제목 `h1.display.sx-cover-title` | `AI가 알아먹는<br>{HL("UI 용어집")} 4탄` |
| 부제 `p.sx-cover-sub` | `AI한테 설명하다 지친<br>나를 위한 넘기고 펼치는 UI 5개` |
| 나머지 | blob, 점선 루트, X 표시, 별 2개, `card-head`(QuestTag + 나침반) 3탄/#01 그대로 |

- 형광펜: **"UI 용어집"**
- 크기: 제목 112px lh 1.24, 부제 38px (#01·3탄과 같음). 제목+부제는 `.sx-cover-copy`로 묶어 세로 가운데
- 키커, 메모, "밀어서 …" 없음 (시리즈 규칙)
- 완료 기준: 3탄 커버와 나란히 놓았을 때 위치·크기가 같고 "4탄"·부제만 다름. 부제가 2줄이고 잘리지 않음

### 02 · 이런 상황이 답답하시죠 (`cards/Chat.jsx`)

| 자리 | 값 |
|---|---|
| 제목 | `이런 상황이 답답하시죠,,` |
| 나 1 | `같은 자리에서 내용만<br>바꿔 보는 칸 만들어줘` (캡션 인용과 같은 문장) |
| AI 1 | 미니 `<AccordionMock />` + `(아래로 줄줄이<br>펼쳐지는 목록을 만들어 옴)` |
| 나 2 | `배너는 옆으로 넘겨<br>보게 해줘` |
| AI 2 | 미니 `<PaginationMock />` + `(아래쪽에 페이지 번호만<br>잔뜩 붙여 옴)` |
| 반복 | `이걸 여러 번 반복...` (반복 화살표 SVG) |
| 나 3 (마지막) | `아니 그게 아니라,,` |
| 결론 카드 | `{HL("Tab, Carousel")}이라고<br>한 마디면 끝났을 일` |

- 순서: 나 1 → AI 1 → 나 2 → AI 2 → 반복 → 나 3 (시리즈 규칙)
- 말풍선 글자는 #01·3탄 구현처럼 **따옴표 없이** 써요
- AI 쪽은 실제 대사가 아니라 괄호 안 장면 설명
- **주석 없음**: 실제/예시 장면 여부 주석을 넣지 않아요 (시리즈 규칙)
- 크기는 #01·3탄 값 그대로 (제목 72px, 말풍선 30px, AI 말풍선 28px, 원 56px, 미니 목업 `scale(.22)` 66×124, 반복 32px, 결론 카드 44px)
- 형광펜: **"Tab, Carousel"**
- 완료 기준
  - 말풍선이 모두 2줄 이하, "나" 원과 겹치지 않음
  - 미니 목업 두 개가 서로 다르게 보임 (세로로 펼친 목록 / 페이지 번호)
  - 결론 카드가 y=1230 위, 그 아래 주석 없음

### 03 · UI 용어 ① Tab (`cards/TabCard.jsx`)

| prop | 값 |
|---|---|
| `page` | `"03"` |
| `mock` | `<TabMock />` |
| `stage` | `UI 용어 ①` |
| `term` / `pron` | `Tab` / `[탭]` |
| `mean` | `같은 자리에서 내용을 바꿔 보는 칸이에요.` |
| `when` | `한 화면에서 카테고리를 나눠 볼 때 써요.` |
| `before` | `"같은 자리에서 내용만 바꿔 보는 칸 만들어줘"` |
| `after` | `"상품 분류는 {B("Tab")}으로 나눠줘"` |
| `tip` | `{B("Tab")}은 옆으로 바꾸고, {B("Accordion")}은 아래로 펼쳐요.` |

### 04 · UI 용어 ② Accordion (`cards/AccordionCard.jsx`)

| prop | 값 |
|---|---|
| `page` | `"04"` |
| `mock` | `<AccordionMock />` |
| `stage` | `UI 용어 ②` |
| `term` / `pron` | `Accordion` / `[아코디언]` |
| `mean` | `누르면 아래로 펼쳐지는 목록이에요.` |
| `when` | `FAQ처럼 질문을 접어 두고 필요할 때 열어 볼 때 써요.` |
| `before` | `"누르면 아래로 내용이 나오는 목록 만들어줘"` |
| `after` | `"자주 묻는 질문은 {B("Accordion")}으로 접어 줘"` |
| `tip` | `한 칸만 열어 두고 싶으면 "{B("Accordion")}은 하나만 열리게"라고 말해요.` |

### 05 · UI 용어 ③ Carousel (`cards/CarouselCard.jsx`)

| prop | 값 |
|---|---|
| `page` | `"05"` |
| `mock` | `<CarouselMock />` |
| `stage` | `UI 용어 ③` |
| `term` / `pron` | `Carousel` / `[캐러셀]` |
| `mean` | `옆으로 넘겨 보는 배너나 슬라이드예요.` |
| `when` | `홈 배너처럼 여러 장을 한 자리에서 넘길 때 써요.` |
| `before` | `"배너는 옆으로 넘겨 보게 해줘"` |
| `after` | `"메인 배너는 {B("Carousel")}로 넘겨 보게 해줘"` |
| `tip` | `자동으로 넘어가게 하려면 "{B("Carousel")}을 자동 재생으로"라고 말해요.` |

### 06 · UI 용어 ④ Pagination (`cards/PaginationCard.jsx`)

| prop | 값 |
|---|---|
| `page` | `"06"` |
| `mock` | `<PaginationMock />` |
| `stage` | `UI 용어 ④` |
| `term` / `pron` | `Pagination` / `[페이지네이션]` |
| `mean` | `1, 2, 3처럼 페이지 번호로 나눠 보는 칸이에요.` |
| `when` | `목록이 길어서 여러 장으로 나눌 때 써요.` |
| `before` | `"아래쪽에 1, 2, 3 숫자 넣어줘"` |
| `after` | `"상품 목록은 {B("Pagination")}으로 나눠줘"` |
| `tip` | `{B("Pagination")}은 페이지를 고르고, 무한 스크롤은 내리면 더 나와요.` |

### 07 · UI 용어 ⑤ Hamburger Menu (`cards/HamburgerCard.jsx`)

| prop | 값 |
|---|---|
| `page` | `"07"` |
| `mock` | `<HamburgerMock />` |
| `stage` | `UI 용어 ⑤` |
| `term` / `pron` | `Hamburger Menu` / `[햄버거 메뉴]` |
| `mean` | `줄 세 개 아이콘을 눌러 여는 메뉴예요.` |
| `when` | `화면이 좁아 메뉴를 접어 둘 때 써요.` |
| `before` | `"왼쪽 위에 줄 세 개 있는 버튼 만들어줘"` |
| `after` | `"모바일 메뉴는 {B("Hamburger Menu")}로 열어줘"` |
| `tip` | `{B("Hamburger Menu")}는 아이콘, 1탄의 {B("Drawer")}는 옆에서 열리는 판이에요.` |
| `wrapName` | `true` (`Hamburger Menu` 104px가 `[햄버거 메뉴]`와 한 줄에 안 들어가면 발음이 다음 줄로) |

**03~07 공통**
- 형광펜: 없음 (강조는 `<b>`만)
- 완료 기준
  - `when` 한 문장이 1줄 (넘치면 2줄까지)
  - before/after 박스 글자가 오른쪽 칸 안에서 넘치지 않음
  - 팁 카드가 1~2줄, y=1230 위에서 끝남
  - 목업에서 강조 요소(고른 탭 / 펼친 행 / 옆 배너 / 고른 페이지 번호 / 줄 세 개 + 열린 판)가 바로 보임
  - 03 ↔ 04는 짝 장이라 나란히 놓았을 때 레이아웃 위치가 같음

### 08 · 한 눈에 정리 (`cards/Summary.jsx`)

| 자리 | 값 |
|---|---|
| stage | `한 눈에 정리` |
| title | `헷갈릴 땐 {HL("이 표")} 하나` |
| 메모 | `저장 필수!` |
| 머리줄 | `이름` / `기능` |

| `name` | `ko` (작은 글자) | `job` |
|---|---|---|
| `Tab` | `탭` | `같은 자리에서 내용을 바꿔 봐요.` |
| `Accordion` | `아코디언` | `누르면 아래로 펼쳐져요.` |
| `Carousel` | `캐러셀` | `옆으로 넘겨 보는 배너예요.` |
| `Pagination` | `페이지네이션` | `1, 2, 3 페이지 번호로 나눠요.` |
| `Hamburger Menu` | `햄버거 메뉴` | `줄 세 개 아이콘을 눌러 메뉴를 열어요.` |

- 표 아래 주석 없음
- 형광펜: **"이 표"**
- 완료 기준: 5행이 표 안에 들어가고 y=1230 위, 기능 칸 각 1~2줄, `Hamburger Menu`가 이름 칸(280px)에서 잘리지 않음 (필요하면 그 행만 두 줄)

### 09 · 오늘의 정리 (`cards/Ending.jsx`, 3탄 구조 복사 + 설명 2줄)

```jsx
const LOOT = ["Tab", "Accordion", "Carousel", "Pagination", "Hamburger Menu"];
```

| 자리 | 값 |
|---|---|
| 스탬프 | `오늘 배운<br />단어 5개` |
| 제목 | `오늘의 정리` |
| sub | `저장해두고<br>AI한테 써먹어보세요` |
| 칩 제목 | `✦ 이제 이렇게 말해요` |
| 칩 | `LOOT` 5개 |
| 다음 편 라벨 | `다음 편` |
| 다음 편 제목 | `페이지 구역 편` |
| 다음 편 설명 | `Hero Section, CTA, Card Grid처럼<br>페이지를 나누는 큰 구역` |
| CTA | `🔖 저장하고 써먹기` / `👀 팔로우하고 다음 편 보기` |
| 메모 | `다음 편에서 만나요!` |

- 장식: 3탄과 같은 노트 + 체크 낙서, 다음 편 카드 오른쪽 위 연필 낙서 (지도·깃발·점선 루트·열쇠 없음)
- 완료 기준: 화면에 `QUEST`·`퀘스트`·`탐험`·`NEXT` 글자 없음 / 칩 5개가 2줄 안 / CTA가 낙서·메모와 겹치지 않음 / 다음 편 설명 2줄이 연필과 겹치지 않음

---

## 6. 마무리 체크리스트

- [ ] `?post=ui-talk-04-swipe-expand`에서 9장이 순서대로 보임
- [ ] `POST=ui-talk-04-swipe-expand npm run export`로 1080×1350 PNG 9장 (또는 같은 Chrome 캡처)
- [ ] 모든 장에 계정명(`Post.jsx`)과 `NN / 09`
- [ ] 배지·`QUEST #`·진행 루트·모험 표현 없음 (말투 규칙)
- [ ] 01 커버 `AI가 알아먹는 UI 용어집 4탄`, 부제 #01 두 줄
- [ ] 02 제목 `이런 상황이 답답하시죠,,`, 나→AI 두 번 + 반복 표시 + `아니 그게 아니라,,`, 주석 없음, 첫 말이 캡션 인용과 같은 문장
- [ ] 03~07 단계 라벨 `UI 용어 ①`~`⑤`, 모두 `when` 한 문장과 팁 카드
- [ ] 08 "이름 | 기능" 5행, 표 아래 주석 없음
- [ ] 형광펜은 01 "UI 용어집", 02 "Tab, Carousel", 08 "이 표" 3곳뿐
- [ ] 새 클래스는 모두 `sx-` / `xm-`
- [ ] 3탄 엔딩 다음 편이 `넘기고 펼치는 UI 편` + 설명 2줄, 캡션 다음 편 줄도 같음
- [ ] 바뀐 기존 파일은 `App.jsx`, `main.jsx`, 3탄 Ending·caption·brief·(엔딩 설명용 CSS)뿐. #01·2탄 미리보기가 예전과 같음
- [ ] `caption.md` 저장

---

## 7. caption.md 초안

```
# AI가 알아먹는 UI 용어집 4탄: 넘기고 펼치는 UI 캡션

같은 자리에서 바꿔 보는 그 칸, 이름이 뭐더라? 🤔

"같은 자리에서 내용만 바꿔 보는 칸 만들어줘"
이렇게 말하면 AI가 아래로 줄줄이 펼쳐지는 목록을 만들어 오기도 해요.
"Tab" 한 단어면 바로 알아듣는데 말이에요.

그래서 오늘은 넘기고 펼치는 UI 5개를 공부해서 정리했어요 📒

🗂️ Tab (탭): 같은 자리에서 내용을 바꿔 보는 칸
📂 Accordion (아코디언): 누르면 아래로 펼쳐지는 목록. FAQ에 자주 써요
🎠 Carousel (캐러셀): 옆으로 넘겨 보는 배너나 슬라이드
🔢 Pagination (페이지네이션): 1, 2, 3 페이지 번호
🍔 Hamburger Menu (햄버거 메뉴): 줄 세 개 아이콘을 눌러 여는 메뉴

👀 헷갈리는 짝
└ Tab은 옆으로 바꾸고, Accordion은 아래로 펼쳐요
└ Pagination은 페이지를 고르고, 무한 스크롤은 내리면 더 나와요
└ Hamburger Menu는 아이콘, 1탄 Drawer는 옆에서 열리는 판

✏️ 이렇게 말해보세요
잘못된 설명: "같은 자리에서 내용만 바꿔 보는 칸"
용어를 알고 난 후: "상품 분류는 Tab으로 나눠줘"
잘못된 설명: "누르면 아래로 내용이 나오는 목록"
용어를 알고 난 후: "자주 묻는 질문은 Accordion으로 접어 줘"
잘못된 설명: "배너는 옆으로 넘겨 보게 해줘"
용어를 알고 난 후: "메인 배너는 Carousel로 넘겨 보게 해줘"
잘못된 설명: "아래쪽에 1, 2, 3 숫자 넣어줘"
용어를 알고 난 후: "상품 목록은 Pagination으로 나눠줘"
잘못된 설명: "왼쪽 위에 줄 세 개 있는 버튼"
용어를 알고 난 후: "모바일 메뉴는 Hamburger Menu로 열어줘"

8번째 장 정리표는 헷갈릴 때 꺼내 보기 좋아요.

🔖 저장해두고 다음에 AI한테 써먹어보세요
👀 다음 편은 "페이지 구역 편"이에요. 팔로우하고 다음 편도 같이 봐요!
💬 이름 몰라서 설명만 길어졌던 UI 있으면 댓글로 알려주세요. 다음 편에 넣어볼게요

.
#UI용어 #UIUX #UI디자인 #웹디자인 #앱디자인 #프론트엔드 #웹개발 #개발자 #개발공부 #코딩공부 #AI코딩 #바이브코딩 #프롬프트 #프롬프트엔지니어링 #ChatGPT #Claude #디자인용어 #탭 #아코디언 #캐러셀
```

---

## 8. 열려 있는 결정

- (해결됨) **커버 부제 형식**: #01 두 줄 형식으로 통일. 이 편도 `p.sx-cover-sub` 두 줄
- (해결됨) **다음 편(5탄) 주제**: `페이지 구역 편`으로 확정 (Hero Section, CTA, Card Grid, Banner, FAQ Section)
