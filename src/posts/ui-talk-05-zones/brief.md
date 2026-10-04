# BRIEF · AI가 알아먹는 UI 용어집 5탄: 페이지 구역 (React + Vite)

> 이 문서는 Cursor가 그대로 따라 만들 수 있게 쓴 명세예요. **문구는 확정본**이라 바꾸지 말고, 넘치면 아래 "넘칠 때" 규칙대로만 줄여요.
> 시리즈 공통 규칙은 `document/04-series-rules.md`가 이 문서보다 우선이에요 (말투 규칙 포함). 시작 전에 `document/00-README.md`, `01-design-principles.md`, `03-UI.md`, `04-series-rules.md`를 읽어요.
> 구현은 **#01(`src/posts/ui-talk-01/`)의 9장 구조**를 따르고, 새 규칙이 이미 반영된 **3탄(`src/posts/ui-talk-03-inputs/`)의 Cover·Chat·TermCard·Summary·Ending**을 복사 원본으로 써요.
> 이 편은 **구역 편**이에요. 단계 라벨·페이지 안 위치 목업은 **2탄(`src/posts/ui-talk-02-header-footer/`)**을 참고만 하고, 2탄·3탄 폴더는 수정하지 않아요.
> 4탄(넘기고 펼치는 UI 편)은 다른 에이전트가 동시에 만들어요. `src/posts/ui-talk-04-*/` 폴더는 만들지도 건드리지도 않아요.

---

## 0. 메타

| 항목 | 값 |
|---|---|
| 시리즈 | 「AI한테 이렇게 말해」 (`series="talk"`, 배지 숨김) · 커버 제목 `AI가 알아먹는 UI 용어집 5탄` |
| 테마 | 페이지 구역 (한 페이지 안에서 자리가 정해진 구역) |
| 편 종류 | **구역 편**: 단계 라벨은 `구역 ①`~`구역 ⑤` |
| 구역 5개 | Hero Section · CTA · Card Grid · Banner · FAQ Section |
| 이번 편의 핵심 | 헷갈리는 짝 두 개: **Hero Section vs Banner** (맨 위 첫인상 vs 중간중간 가로 띠), **CTA 버튼 vs 그냥 버튼** (그 페이지가 원하는 행동 vs 아무 버튼) → 03·04·06장 팁과 08장 정리표에 넣음 |
| 필러 색 | 🎨 UI/UX 핑크 (`<Post pillar="ui">`) |
| 캔버스 / 장 수 | 1080 × 1350 / 9장 (`<Post total="09">` 기본값) |
| slug | `ui-talk-05-zones` |
| 코드 위치 | `src/posts/ui-talk-05-zones/` |
| 클래스 접두사 | 카드 `zn-`, 목업 `zm-` (#01·2탄 `hf-`/`pm-`·3탄 `in-`/`im-`·4탄이 쓸 tab/acc 계열과 충돌 방지) |
| 미리보기 | `npm run dev` → `http://127.0.0.1:5173/?post=ui-talk-05-zones` (한 장만: `&card=03`) |
| 출력(PNG) | `POST=ui-talk-05-zones npm run export` (일부만: `... npm run export -- 03 05`) → 프로젝트 루트 `posts/ui-talk-05-zones/still-cuts/01.png` … `09.png` |
| 계정명 | `src/ui/Post.jsx`가 자동으로 넣음 (Andy가 직접 관리). 이 편 코드와 문서에는 계정명을 적거나 바꾸지 않음 |
| 캡션 | `src/posts/ui-talk-05-zones/caption.md` (7장 초안 그대로 저장) |

### 장 순서 한눈에

| # | 역할 | 컴포넌트 (`cards/`) | 복사 원본 |
|---|---|---|---|
| 01 | 커버 | `Cover.jsx` | 3탄 `Cover.jsx` (= #01 두 줄 부제) |
| 02 | 이런 상황이 답답하시죠 (채팅) | `Chat.jsx` | 3탄 `Chat.jsx` (나→AI 두 번, 반복, 주석 없음) |
| 03 | 구역 ① Hero Section | `HeroCard.jsx` → `ZoneCard.jsx` | 3탄 `TermCard.jsx` (라벨만 구역) |
| 04 | 구역 ② CTA | `CtaCard.jsx` → `ZoneCard` | 〃 |
| 05 | 구역 ③ Card Grid | `CardGridCard.jsx` → `ZoneCard` | 〃 |
| 06 | 구역 ④ Banner | `BannerCard.jsx` → `ZoneCard` | 〃 |
| 07 | 구역 ⑤ FAQ Section | `FaqCard.jsx` → `ZoneCard` | 〃 |
| 08 | 한 눈에 정리 (정리표) | `Summary.jsx` | 3탄 `Summary.jsx` |
| 09 | 오늘의 정리 (엔딩) | `Ending.jsx` | 3탄 `Ending.jsx` (공부 노트형) |

### 다시 쓸 수 있는 것 / 새로 만드는 것

| 대상 | 판단 |
|---|---|
| `src/ui/Post.jsx`, `QuestTag.jsx`, `Icon.jsx`, `Filters.jsx` | 그대로 import 해서 사용 (수정 금지) |
| `src/styles/mock.css`의 `.phone`, `.scr`, `.notch`, `.app`(+`.hero`, `.ln`, `.cards`), `.panel`, `.ping`, `.cursor` | 그대로 클래스 사용 가능 (수정 금지) |
| `src/ui/Mock.jsx` | 구역 목업이 없어서 **쓰지 않음** |
| 3탄 `TermCard.jsx` | 이 편 `cards/ZoneCard.jsx`로 복사해서 클래스만 `zn-`로. `stage`는 `구역 ①`~`⑤`. 긴 이름(Hero Section, Card Grid, FAQ Section)은 `wrapName` |
| 3탄 `Cover/Chat/Summary/Ending.jsx` | 복사해서 `in-` → `zn-`로 바꾸고 문구·목업만 교체 |
| 2탄 Header/Footer 목업 | **참고만.** 페이지 창 안에서 해당 구역만 핑크로 강조하는 방식을 이 편 `zm-`로 새로 그림. 2탄 파일은 수정·import 하지 않음 |
| 목업 7개 | 이 편 `mocks.jsx`에 새로 만듦 (`zm-` 접두사). 채팅용 2개 + 구역 카드용 5개 |

---

## 1. 공통 규칙 (모든 장)

1. **수정 금지**: `src/styles/*`, `src/ui/*`, `src/posts/ui-talk-01/**`, `src/posts/ui-talk-02-header-footer/**`, `src/posts/ui-talk-03-inputs/**`. 4탄 폴더(`src/posts/ui-talk-04-*`)는 만들지도 건드리지도 않아요. 바꿔도 되는 기존 파일은 `src/App.jsx`(편 등록 한 줄), `src/main.jsx`(css import 한 줄) 두 개뿐이에요. `scripts/export.mjs`는 이미 `POST=`를 지원해서 고치지 않아요.
2. **클래스 충돌 금지**: 새 클래스는 모두 `zn-`(목업은 `zm-`). 다른 편 클래스를 가져다 쓰지 말고 복사 후 이름을 바꿔요. 그대로 써도 되는 공용 클래스: `.display`, `.hand`, `.hl`, `.chip`, `.card`, `.card.warm`, `.layer`, `.footer`, `.quest-tag`, `.card-head`, 위 표의 `mock.css` 클래스.
3. 색·폰트·크기는 `var(--…)` 토큰과 이 문서의 px 값만 써요.
4. **말투**: 카드 글자와 캡션은 공부 노트 말투. 퀘스트·주문(서)·탐험·모험·지점·보물·NEXT QUEST는 쓰지 않아요 (`04-series-rules.md` 7장). 크레파스·지도풍 그림은 장식으로만 남아도 돼요.
5. 배지·`QUEST #` 번호·진행 루트(점 5개)는 넣지 않아요 (03-UI). `.card-head`는 #01처럼 두되 `.quest-tag`는 숨겨져요.
6. 제목 3줄 이하, 글자 넘침·잘림·겹침 없음. 본문 최소 28px, Gaegu 최소 32px. 예외: 목업 안 작은 실제 글자 20~22px, 02장 AI 말풍선 28px.
7. 내용은 **y=1230px 위**에서 끝나요 (푸터가 바닥 52px 위). 좌우 88px 여백.
8. **형광펜(`.hl`)은 한 장에 한 단어(구절)만**, 명세에 적힌 곳에만.
9. 크레파스 필터(`url(#wax)`, `#wax-stroke`, `#rough`)는 테두리·면·선에만. 글자가 든 요소에는 `filter` 금지.
10. 없는 통계·인용·수치를 넣지 않아요.
11. 미리보기(`npm run dev`)에서 9장을 눈으로 확인하고 장별 완료 기준을 체크해요. export는 Andy가 하라고 할 때. 이 작업에서는 스틸컷 9장 확인이 할 일에 들어 있어요.

### 넘칠 때 줄이는 순서
1. 구역 카드 목업 칸 높이를 540 → 500px
2. 구역 카드 팁 카드 패딩을 줄이기 (`18px 28px 20px`)
3. before/after 박스 패딩을 #01 값의 80%로
4. 그래도 넘치면 문구를 바꾸지 말고 멈추고 Andy에게 물어보기 (`when` 한 문장과 팁은 지우지 않아요)

---

## 2. 파일 구성과 등록

### 2-1. 만들 파일

```
src/posts/ui-talk-05-zones/
├─ brief.md          # 이 문서
├─ caption.md        # 7장 초안
├─ cards.jsx         # 카드 순서 배열
├─ cards.css         # 이 편 스타일 전부 (zn-, zm-)
├─ ids.js            # export용 카드 id
├─ mocks.jsx         # 목업 7개
└─ cards/
   ├─ Cover.jsx
   ├─ Chat.jsx
   ├─ ZoneCard.jsx       # 03~07 공용 레이아웃
   ├─ HeroCard.jsx       # 03
   ├─ CtaCard.jsx        # 04
   ├─ CardGridCard.jsx   # 05
   ├─ BannerCard.jsx     # 06
   ├─ FaqCard.jsx        # 07
   ├─ Summary.jsx        # 08
   └─ Ending.jsx         # 09
```

### 2-2. `cards.jsx`, `ids.js`

```jsx
/* 이 배열 순서가 미리보기 스크롤 순서이자 export 순서입니다. */
export const cards = [
  { id: "01", label: "cover", Card: Cover },
  { id: "02", label: "chat", Card: Chat },
  { id: "03", label: "Hero Section", Card: HeroCard },
  { id: "04", label: "CTA", Card: CtaCard },
  { id: "05", label: "Card Grid", Card: CardGridCard },
  { id: "06", label: "Banner", Card: BannerCard },
  { id: "07", label: "FAQ Section", Card: FaqCard },
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
import { cards as talk05 } from "./posts/ui-talk-05-zones/cards.jsx";
// POSTS 안에
  "ui-talk-05-zones": talk05,
```

```jsx
// src/main.jsx
import "./posts/ui-talk-05-zones/cards.css";
```

> 4탄도 `App.jsx`·`main.jsx`에 같은 자리로 등록할 수 있어요. 머지할 때 등록 줄이 충돌할 수 있으니, 양쪽 등록을 둘 다 남기면 돼요.

### 2-4. export

- `POST=ui-talk-05-zones npm run export` → `posts/ui-talk-05-zones/still-cuts/01~09.png`
- `scripts/export.mjs`는 수정하지 않아요 (`POST` 환경변수와 `ids.js`를 이미 읽음)
- Mac 경로(`/Users/eunchan-kim/Desktop/still_cuts/…`) 때문에 VM에서 실패하면, 같은 Chrome 캡처로 프로젝트 루트 `posts/ui-talk-05-zones/still-cuts/01.png`~`09.png`에 뽑아요

---

## 3. 새 컴포넌트 명세

### 3-1. `cards/ZoneCard.jsx` (03~07 공용)

3탄 `TermCard.jsx`를 복사해서 클래스만 `in-` → `zn-`로 바꿔요.
- `mock`은 JSX로 받아요
- `when`은 mean 바로 아래 (시리즈 규칙, 필수)
- before/after 라벨은 `잘못된 설명` / `용어를 알고 난 후`
- 긴 영문 이름은 `wrapName`으로 발음이 다음 줄로 내려가도 돼요

**props**: `name, page, mock, stage, term, pron, mean, when, tip, before, after, wrapName`

```jsx
<Post name={name} pillar="ui" page={page}>
  <div className="card-head"><QuestTag series="talk" showType={false} /></div>
  <div className="zn-stage">{stage}</div>
  <div className={wrapName ? "zn-name zn-name-wrap" : "zn-name"}>
    <h1 className="display">{term}</h1><span className="zn-pron">{pron}</span>
  </div>
  <p className="zn-mean">{mean}</p>
  <p className="zn-when">{when}</p>
  <div className="zn-row">
    <div className="zn-mock">{mock}</div>
    <div className="zn-talk">
      <div className="zn-before">
        <div className="zn-lab"><span className="zn-mark"><Icon name="x" color="var(--ink-soft)" stroke={10} /></span>잘못된 설명</div>
        <p>{before}</p>
      </div>
      <div className="zn-down"><Icon name="arrow" color="var(--p-deep)" stroke={8} /></div>
      <div className="card zn-after">
        <div className="zn-lab"><span className="zn-mark"><Icon name="star" color="var(--sun-deep)" stroke={8} /></span>용어를 알고 난 후</div>
        <p>{after}</p>
      </div>
    </div>
  </div>
  <div className="card zn-tip">
    <span className="zn-tip-label">✏️ 팁</span>
    <span className="zn-tip-text">{tip}</span>
  </div>
</Post>
```

| 선택자 | 값 (3탄 `in-*` = #01 `term-*` 기준) |
|---|---|
| `.zn-stage` | `margin-top: 44px;` Gaegu 700 42px `var(--p-deep)` |
| `.zn-name` | `display:flex; align-items:baseline; gap:24px;` / `h1`: 104px lh 1.12 |
| `.zn-name-wrap` | `flex-wrap: wrap` (03·05·07) |
| `.zn-pron` | Pretendard 600 38px `var(--ink-soft)` |
| `.zn-mean` | `margin-top: 14px;` 38px lh 1.5 600 |
| `.zn-when` | `margin-top: 6px;` 32px lh 1.45 500 `var(--ink-soft)` |
| `.zn-row` | `margin-top: 32px; display:grid; grid-template-columns: 340px 1fr; gap: 36px; align-items:center;` |
| `.zn-mock` | `display:flex; justify-content:center; align-items:center; height: 540px;` |
| `.zn-talk`, `.zn-lab`, `.zn-before(+::before, p)`, `.zn-down`, `.zn-after(.card, p, b)`, `.zn-mark` | 3탄 `in-talk` 등과 같은 값 |
| `.zn-tip.card` | `margin-top: 24px; padding: 20px 32px 22px; display:flex; align-items:baseline; gap: 16px;` + `::before { background: var(--paper-warm); border-color: var(--sun-deep); }` |
| `.zn-tip-label` | `flex:none;` Gaegu 700 34px `var(--p-deep)` |
| `.zn-tip-text` | 30px lh 1.45 600 `var(--ink)` / 안의 `b`는 800 `var(--p-deep)` |

### 3-2. `cards/Summary.jsx` (08)

3탄 `Summary.jsx`를 복사해서 `in-summary-*` → `zn-summary-*`, 행만 교체. "이름 | 기능" 두 칸, 표 아래 주석 없음. 값은 #01 `compare-*`와 같음 (이름 칸 280px, 행 최소 128px, 이름 Jua 38px + `small` 26px, 기능 30px 600). `Hero Section`·`FAQ Section`이 이름 칸에서 잘리면 이름만 `white-space: normal`로 두 줄 허용 (이 두 행만).

### 3-3. `cards/Chat.jsx`, `Cover.jsx`, `Ending.jsx`

3탄 파일을 복사해서 `in-` → `zn-`로 바꾸고 문구·목업만 5장대로 교체. 크기·배치는 그대로.

- **Cover**: 부제는 **#01·3탄처럼 `p.zn-cover-sub` 두 줄**. 2탄의 "오늘의 내용" 목록은 가져오지 않아요
- **Chat**: 제목 `이런 상황이 답답하시죠,,`, 나→AI 두 번 + 반복 표시 + `아니 그게 아니라,,`. 반복 표시는 3탄 `in-chat-loop`를 `zn-chat-loop`으로 복사
- **Ending**: 다음 편 제목은 `?? 편` (자리표시). 설명 줄은 렌더링하지 않음. 이전 편(4탄 넘기고 펼치는 UI)은 엔딩 카드에 넣지 않고 캡션에서만 한 줄로 언급

---

## 4. 목업 명세 (`mocks.jsx` + `cards.css`의 mocks 구역)

### 4-0. 구역 카드 공통 (03~07)

한 페이지 창 안에서 **그 구역이 어디 있는지**가 보이게 그려요 (2탄 Header/Footer 목업과 같은 생각).

- 크기: `.zm-site` **340 × 500** (2탄 `.pm-site-side`와 같음)
- 마크업: `<div className="zm-site"><div className="zm-win">…</div></div>`
- `.zm-site::before`는 흰 바탕 + 9px `--ink` 크레파스 테두리, radius 26
- `.zm-win { position:absolute; inset:12px; border-radius:18px; background:var(--white); overflow:hidden; display:flex; flex-direction:column; }`
- 창 상단 바 `.zm-top` (높이 36px, `--paper-warm`, 점 3개 + URL 막대)
- 모든 구역 카드가 **같은 페이지 뼈대**를 써요. 강조할 구역만 `.zm-zone`(핑크 + 안쪽 점선), 나머지는 `.zm-dim` (opacity .45)

공통 뼈대 (위→아래, 한 페이지):

1. `.zm-top`
2. **얇은 Header** (항상 dim): 높이 32px, 로고 원 18px + 막대. 2탄 Header와 겹치지 않게 부품을 자세히 그리지 않아요
3. **Hero**: 큰 이미지 블록(`.zm-hero-img`, `--peach`) + 한 줄 메시지(실제 글자 또는 흰 막대)
4. **CTA**: pill 버튼. 강조 장만 실제 글자 `지금 시작하기`
5. **Card Grid**: 2×2 카드
6. **Banner**: 가로 띠
7. **FAQ**: 질문 줄 2~3개 + 오른쪽 `+` (펼침 힌트)
8. **얇은 Footer** (항상 dim): 높이 28px, 막대 1줄

강조 요소만 핑크(`--p` / `--p-deep`), 나머지는 회색 막대. 테두리 크레파스는 `::after`에 `filter:url(#wax-stroke)` (글자에는 필터 금지).
실제 글자는 꼭 필요한 곳에만, Pretendard 700 20~22px `var(--ink)`.

같은 뼈대를 `PageZones({ highlight })` 한 함수로 두고, `highlight`만 `"hero" | "cta" | "grid" | "banner" | "faq"`로 바꿔요.

### 4-1. `HeroMock` (03)
- `highlight="hero"`
- Hero 칸이 페이지 **맨 위(Header 바로 아래)**에서 가장 크게 보임
- 강조 칸 안: peach 이미지 + 실제 글자 `한 줄 메시지` (흰 글자 또는 `--ink`, 22px)
- CTA·그리드·배너·FAQ는 작게 dim

### 4-2. `CtaMock` (04)
- `highlight="cta"`
- Hero는 dim, 그 **바로 아래** CTA 띠만 핑크
- 강조 칸 안 실제 글자 `지금 시작하기` (pill, 흰 바탕 또는 `--p` 위 `--ink`, 20px)
- "그냥 작은 버튼"이 아니라 **구역처럼 눈에 띄는 큰 버튼**으로

### 4-3. `CardGridMock` (05)
- `highlight="grid"`
- 페이지 중간의 2×2 카드만 핑크 구역
- 카드 4칸이 바둑판처럼 보여야 함

### 4-4. `BannerMock` (06)
- `highlight="banner"`
- 그리드와 FAQ **사이**의 얇은 가로 띠만 핑크
- 실제 글자 `이벤트` (20px) 또는 흰 막대 + 짧은 글자
- Hero보다 **훨씬 얇고 중간**에 있어서 03장과 자리가 다르게 보여야 함

### 4-5. `FaqMock` (07)
- `highlight="faq"`
- 페이지 **아래쪽**(Footer 바로 위) 질문 모음만 핑크
- 행 3개, 오른쪽 `+` → 4탄 Accordion으로 펼치는 경우가 많다는 힌트
- 첫째 행만 살짝 열린 것처럼 아래 막대 1줄을 둬도 돼요 (안 넣어도 됨)

### 4-6. `WrongBannerMock` (02장 AI 1)
- 말풍선 칸에 맞춰 **66×124로 직접** 그려요. 300×560 폰을 0.22배로 줄이면 띠가 안 보여요
- **"Hero를 시켰는데 가로 띠가 온" 그림**: 위쪽 핑크 띠 + 노란 `?` + 아래 막대·카드
- 04장 페이지 창 목업과 크기는 달라도, "얇은 가로 띠"라는 점은 같아야 해요

### 4-7. `TinyButtonMock` (02장 AI 2)
- 마찬가지로 66×124로 직접 그려요
- **"CTA를 시켰는데 작은 버튼이 온" 그림**: 흐린 본문 + **구석** 작은 회색 칸 + 노란 `?`
- 04장 `CtaMock`의 큰 `지금 시작하기`와 다르게 보여야 함

---

## 5. 장별 명세

> `HL("x")` = `<span className="hl">x</span>`, `B("x")` = `<b>x</b>`, `<br>` = `<br />`. 줄바꿈 위치까지 확정이에요.

### 01 · 커버 (`cards/Cover.jsx`)

| 자리 | 값 |
|---|---|
| 제목 `h1.display.zn-cover-title` | `AI가 알아먹는<br>{HL("UI 용어집")} 5탄` |
| 부제 `p.zn-cover-sub` | `AI한테 설명하다 지친<br>나를 위한 페이지 구역 5개` |
| 나머지 | blob, 점선 루트, X 표시, 별 2개, `card-head`(QuestTag + 나침반) 3탄/#01 그대로 |

- 형광펜: **"UI 용어집"**
- 크기: 제목 112px lh 1.24, 부제 38px (#01·3탄과 같음). 제목+부제는 `.zn-cover-copy`로 묶어 세로 가운데
- 키커, 메모, "밀어서 …" 없음 (시리즈 규칙)
- 완료 기준: #01·3탄 커버와 나란히 놓았을 때 위치·크기가 같고 "5탄"·부제만 다름

### 02 · 이런 상황이 답답하시죠 (`cards/Chat.jsx`)

| 자리 | 값 |
|---|---|
| 제목 | `이런 상황이 답답하시죠,,` |
| 나 1 | `맨 위에 큰 사진이랑 한 줄<br>문구 있는 그 구역 만들어줘` (캡션 인용과 같은 문장) |
| AI 1 | 미니 `<WrongBannerMock />` + `(가로 띠 광고를<br>넣어 옴)` |
| 나 2 | `지금 시작하기 버튼도<br>크게 넣어줘` |
| AI 2 | 미니 `<TinyButtonMock />` + `(작은 버튼을<br>구석에 넣어 옴)` |
| 반복 | `이걸 여러 번 반복...` (반복 화살표 SVG) |
| 나 3 (마지막) | `아니 그게 아니라,,` |
| 결론 카드 | `{HL("Hero Section, CTA")}라고<br>한 마디면 끝났을 일` |

- 순서: 나 1 → AI 1 → 나 2 → AI 2 → 반복 → 나 3 (시리즈 규칙)
- 말풍선 글자는 #01·3탄 구현처럼 **따옴표 없이** 써요
- AI 쪽은 실제 대사가 아니라 괄호 안 장면 설명
- **주석 없음**: 실제/예시 장면 여부 주석을 넣지 않아요 (시리즈 규칙)
- 크기는 #01·3탄 값 그대로 (제목 72px, 말풍선 30px, AI 말풍선 28px, 원 56px, 미니 그림 66×124, 반복 32px, 결론 카드 44px). 채팅 목업은 칸 크기에 맞춰 직접 그려요 (`zn-chat-fig`)
- 형광펜: **"Hero Section, CTA"**
- 완료 기준
  - 말풍선이 모두 2줄 이하, "나" 원과 겹치지 않음
  - 미니 목업 두 개가 서로 다르게 보임 (위쪽 얇은 띠 / 구석 작은 버튼)
  - 결론 카드가 y=1230 위, 그 아래 주석 없음

### 03 · 구역 ① Hero Section (`cards/HeroCard.jsx`)

| prop | 값 |
|---|---|
| `page` | `"03"` |
| `mock` | `<HeroMock />` |
| `stage` | `구역 ①` |
| `term` / `pron` | `Hero Section` / `[히어로 섹션]` |
| `wrapName` | `true` |
| `mean` | `페이지 맨 위, 큰 이미지와 한 줄 메시지가 있는 구역이에요.` |
| `when` | `처음 들어온 사람에게 이 페이지가 뭔지 바로 보여줄 때 써요.` |
| `before` | `"맨 위에 큰 사진이랑 한 줄 문구 있는 그 구역 만들어줘"` |
| `after` | `"첫 화면은 {B("Hero Section")}으로 해줘"` |
| `tip` | `{B("Hero")}는 맨 위 첫인상, {B("Banner")}는 중간중간 들어가는 가로 띠예요.` |

### 04 · 구역 ② CTA (`cards/CtaCard.jsx`)

| prop | 값 |
|---|---|
| `page` | `"04"` |
| `mock` | `<CtaMock />` |
| `stage` | `구역 ②` |
| `term` / `pron` | `CTA` / `[씨티에이]` |
| `mean` | `"지금 시작하기"처럼 행동을 부르는 버튼이나 구역이에요.` |
| `when` | `가입·구매처럼, 이 페이지에서 다음에 할 일을 분명하게 보여줄 때 써요.` |
| `before` | `"지금 시작하기 버튼 크게 넣어줘"` |
| `after` | `"Hero 아래에 {B("CTA")}로 '지금 시작하기'를 넣어줘"` |
| `tip` | `그냥 버튼은 아무 행동이나, {B("CTA")}는 그 페이지에서 가장 원하는 행동이에요.` |

### 05 · 구역 ③ Card Grid (`cards/CardGridCard.jsx`)

| prop | 값 |
|---|---|
| `page` | `"05"` |
| `mock` | `<CardGridMock />` |
| `stage` | `구역 ③` |
| `term` / `pron` | `Card Grid` / `[카드 그리드]` |
| `wrapName` | `true` |
| `mean` | `카드를 바둑판처럼 늘어놓은 구역이에요.` |
| `when` | `상품, 기능, 후기처럼 같은 모양의 칸을 여러 개 보여줄 때 써요.` |
| `before` | `"네모 칸을 바둑판처럼 쭉 늘어놓아줘"` |
| `after` | `"기능 소개는 {B("Card Grid")}로 3열로 해줘"` |
| `tip` | `한 장만 있으면 Card, 여러 장을 격자로 놓으면 {B("Card Grid")}예요.` |

### 06 · 구역 ④ Banner (`cards/BannerCard.jsx`)

| prop | 값 |
|---|---|
| `page` | `"06"` |
| `mock` | `<BannerMock />` |
| `stage` | `구역 ④` |
| `term` / `pron` | `Banner` / `[배너]` |
| `mean` | `페이지 중간중간에 들어가는 가로 띠 공지·광고예요.` |
| `when` | `이벤트, 공지처럼 본문 흐름 사이에 짧게 알릴 때 써요.` |
| `before` | `"중간에 가로로 긴 광고 띠 넣어줘"` |
| `after` | `"본문 중간에 {B("Banner")}로 이벤트 안내를 넣어줘"` |
| `tip` | `{B("Hero")}는 맨 위 큰 첫인상, {B("Banner")}는 중간중간 끼워 넣는 띠예요.` |

### 07 · 구역 ⑤ FAQ Section (`cards/FaqCard.jsx`)

| prop | 값 |
|---|---|
| `page` | `"07"` |
| `mock` | `<FaqMock />` |
| `stage` | `구역 ⑤` |
| `term` / `pron` | `FAQ Section` / `[자주 묻는 질문]` |
| `wrapName` | `true` |
| `mean` | `자주 묻는 질문을 모아 둔 구역이에요.` |
| `when` | `같은 질문을 반복해서 받을 때, 페이지 아래쪽에 모아 둬요.` |
| `before` | `"자주 묻는 질문 쭉 적어 두는 칸 만들어줘"` |
| `after` | `"페이지 아래에 {B("FAQ Section")}을 넣어줘"` |
| `tip` | `질문은 4탄 {B("Accordion")}으로 하나씩 펼치는 경우가 많아요.` |

**03~07 공통**
- 형광펜: 없음 (강조는 `<b>`만)
- 단계 라벨은 짧게 `구역 ①`~`구역 ⑤`만. 카드의 큰 제목은 구역 이름
- 완료 기준
  - `when` 한 문장이 1줄 (넘치면 2줄까지)
  - before/after 박스 글자가 오른쪽 칸 안에서 넘치지 않음
  - 팁 카드가 1~2줄, y=1230 위에서 끝남
  - 목업에서 강조 구역의 **페이지 안 위치**가 바로 보임 (맨 위 / Hero 바로 아래 / 중간 격자 / 중간 띠 / 아래쪽)
  - 03 ↔ 06은 Hero vs Banner 짝, 04는 CTA vs 버튼 짝. 나란히 놓았을 때 레이아웃 위치가 같음

### 08 · 한 눈에 정리 (`cards/Summary.jsx`)

| 자리 | 값 |
|---|---|
| stage | `한 눈에 정리` |
| title | `헷갈릴 땐 {HL("이 표")} 하나` |
| 메모 | `저장 필수!` |
| 머리줄 | `이름` / `기능` |

| `name` | `ko` (작은 글자) | `job` |
|---|---|---|
| `Hero Section` | `히어로 섹션` | `맨 위 큰 이미지와 한 줄 메시지로 첫인상을 줘요.` |
| `CTA` | `씨티에이` | `지금 시작하기처럼 행동을 불러요.` |
| `Card Grid` | `카드 그리드` | `카드를 바둑판처럼 늘어놓아요.` |
| `Banner` | `배너` | `중간중간 들어가는 가로 띠 공지·광고예요.` |
| `FAQ Section` | `자주 묻는 질문` | `자주 묻는 질문을 모아 둔 구역이에요.` |

- 표 아래 주석 없음
- 형광펜: **"이 표"**
- 완료 기준: 5행이 표 안에 들어가고 y=1230 위, 기능 칸 각 1~2줄, `Hero Section`·`FAQ Section`이 이름 칸에서 잘리지 않음

### 09 · 오늘의 정리 (`cards/Ending.jsx`, 3탄 구조 복사)

```jsx
const LOOT = ["Hero Section", "CTA", "Card Grid", "Banner", "FAQ Section"];
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

- 장식: 3탄과 같은 노트 + 체크 낙서, 다음 편 카드 오른쪽 위 연필 낙서 (지도·깃발·점선 루트·열쇠 없음)
- 이전 편 언급은 엔딩 카드에 넣지 않아요. 필요하면 캡션에서 4탄 = `넘기고 펼치는 UI 편`
- 완료 기준: 화면에 `QUEST`·`퀘스트`·`탐험`·`NEXT` 글자 없음 / 칩 5개가 2줄 안 / CTA가 낙서·메모와 겹치지 않음

---

## 6. 마무리 체크리스트

- [ ] `?post=ui-talk-05-zones`에서 9장이 순서대로 보임
- [ ] `POST=ui-talk-05-zones npm run export`로 1080×1350 PNG 9장 (VM이면 `posts/ui-talk-05-zones/still-cuts/`)
- [ ] 모든 장에 계정명(`Post.jsx`)과 `NN / 09`
- [ ] 배지·`QUEST #`·진행 루트·모험 표현 없음 (말투 규칙)
- [ ] 01 커버 `AI가 알아먹는 UI 용어집 5탄`, 부제 `#01` 두 줄 `p.zn-cover-sub`
- [ ] 02 제목 `이런 상황이 답답하시죠,,`, 나→AI 두 번 + 반복 표시 + `아니 그게 아니라,,`, 주석 없음, 첫 말이 캡션 인용과 같은 문장
- [ ] 03~07 단계 라벨 `구역 ①`~`⑤`, 모두 `when` 한 문장과 팁 카드
- [ ] 03·06 팁에 Hero vs Banner, 04 팁에 CTA vs 그냥 버튼, 07 팁에 4탄 Accordion 연결
- [ ] 08 "이름 | 기능" 5행, 표 아래 주석 없음
- [ ] 형광펜은 01 "UI 용어집", 02 "Hero Section, CTA", 08 "이 표" 3곳뿐
- [ ] 새 클래스는 모두 `zn-` / `zm-`
- [ ] 바뀐 기존 파일은 `App.jsx`, `main.jsx` 두 개뿐. #01·2탄·3탄 미리보기가 예전과 같음
- [ ] 4탄 폴더를 만들지 않음
- [ ] `caption.md` 저장

---

## 7. caption.md 초안

```
# AI가 알아먹는 UI 용어집 5탄: 페이지 구역 캡션

맨 위에 큰 사진이랑 한 줄 문구 있는 그 구역, 이름이 뭐더라? 🤔

"맨 위에 큰 사진이랑 한 줄 문구 있는 그 구역 만들어줘"
이렇게 말하면 AI가 가로 띠 광고를 올려 오기도 해요.
"Hero Section" 한 단어면 바로 알아듣는데 말이에요.

지난 4탄은 넘기고 펼치는 UI였어요.
오늘은 페이지 안에서 자리가 정해진 구역 5개를 공부해서 정리했어요 📒

🌄 Hero Section (히어로 섹션): 맨 위 큰 이미지와 한 줄 메시지로 첫인상을 주는 구역
🎯 CTA (씨티에이): "지금 시작하기"처럼 행동을 부르는 버튼이나 구역
🃏 Card Grid (카드 그리드): 카드를 바둑판처럼 늘어놓은 구역
🪧 Banner (배너): 중간중간 들어가는 가로 띠 공지·광고
❓ FAQ Section (자주 묻는 질문): 자주 묻는 질문을 모아 둔 구역. Accordion으로 펼치는 경우가 많아요

👀 헷갈리는 짝
└ Hero Section은 맨 위 첫인상, Banner는 중간중간 가로 띠
└ 그냥 버튼은 아무 행동이나, CTA는 그 페이지에서 가장 원하는 행동

✏️ 이렇게 말해보세요
잘못된 설명: "맨 위에 큰 사진이랑 한 줄 문구 있는 그 구역"
용어를 알고 난 후: "첫 화면은 Hero Section으로 해줘"
잘못된 설명: "지금 시작하기 버튼 크게 넣어줘"
용어를 알고 난 후: "Hero 아래에 CTA로 '지금 시작하기'를 넣어줘"
잘못된 설명: "네모 칸을 바둑판처럼 쭉 늘어놓아줘"
용어를 알고 난 후: "기능 소개는 Card Grid로 3열로 해줘"
잘못된 설명: "중간에 가로로 긴 광고 띠 넣어줘"
용어를 알고 난 후: "본문 중간에 Banner로 이벤트 안내를 넣어줘"
잘못된 설명: "자주 묻는 질문 쭉 적어 두는 칸 만들어줘"
용어를 알고 난 후: "페이지 아래에 FAQ Section을 넣어줘"

8번째 장 정리표는 헷갈릴 때 꺼내 보기 좋아요.

🔖 저장해두고 다음에 AI한테 써먹어보세요
👀 팔로우하고 다음 편도 같이 봐요!
💬 이름 몰라서 설명만 길어졌던 구역 있으면 댓글로 알려주세요. 다음 편에 넣어볼게요

.
#UI용어 #UIUX #UI디자인 #웹디자인 #앱디자인 #프론트엔드 #웹개발 #개발자 #개발공부 #코딩공부 #AI코딩 #바이브코딩 #프롬프트 #프롬프트엔지니어링 #ChatGPT #Claude #디자인용어 #히어로섹션 #CTA #배너
```

---

## 8. 열려 있는 결정 (Andy 확인 필요)

- **다음 편(6탄) 주제**: 09장 다음 편 제목은 `?? 편` 자리표시, 설명 줄은 비워 둠. 정해지면 `Ending.jsx`의 제목과 설명 2줄, 캡션의 "👀 팔로우하고 다음 편도 같이 봐요!" 줄(주제 넣기)을 바꿔요
- **커버 부제 형식**: 이 편은 3탄·#01처럼 두 줄 `p.zn-cover-sub`예요. 2탄은 Andy가 "오늘의 내용" 목록으로 바꿨어요. 시리즈를 목록 형식으로 맞출지 정해 주세요
- **4탄과 등록 줄 충돌**: 4탄 PR도 `src/App.jsx`·`src/main.jsx`에 편을 등록할 수 있어요. 이 PR은 3탄 브랜치(PR #2) 위에 쌓인 변경이라, main에 머지할 때 3탄·4탄·5탄 등록 줄을 모두 남겨야 해요
- **이전 편 언급**: 엔딩 카드에는 이전 편 칸이 없어서 넣지 않았고, 캡션에만 `지난 4탄은 넘기고 펼치는 UI였어요`를 넣었어요
