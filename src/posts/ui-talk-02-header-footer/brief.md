# BRIEF · 「AI한테 이렇게 말해」 구역 편: Header · Footer (React + Vite 버전)

> ℹ️ **카드 화면에 `QUEST #` 번호는 어디에도 나오지 않아요.** 본문 카드는 03-UI 규칙으로 번호가 없고, 09장 엔딩도 시리즈 확정 규칙(아래 표 16번)에 따라 퀘스트 표현을 뺀 "공부 노트" 스타일이라 번호가 없어요. 그래서 `QUEST_NO` / `NEXT_NO` 같은 번호 상수도 만들지 않아요.
> 편 번호는 커버 제목의 **`2탄`** 한 곳에만 나와요 (`cards/Cover.jsx`, Andy 확정). 시리즈 공통 규칙은 `document/04-series-rules.md`가 이 문서보다 우선이에요 (말투 규칙 포함).

이 문서는 Cursor가 그대로 따라 만들 수 있게 쓴 명세예요. **문구는 확정본**이라 바꾸지 말고, 넘치면 아래 "넘칠 때" 규칙대로만 줄여요.
구현 방식은 #01 리액트 카드(`src/posts/ui-talk-01/`)를 기준으로 해요. 먼저 `document/00-README.md`, `document/03-UI.md`, `document/04-series-rules.md`, 그리고 `src/posts/ui-talk-01/` 전체를 읽고 시작하세요.

> ## ⚠️ 2026-10-04 수정: 이 편은 이미 구현돼 있어요 → "새로 만들기"가 아니라 "고치기"
> `src/posts/ui-talk-02-header-footer/`에 9장이 이미 있고 `App.jsx`·`main.jsx`·`export.mjs` 등록도 끝났어요(2-3, 2-4는 다시 할 필요 없음). 아래만 바꾸면 돼요.
>
> | # | 바꿀 것 | 자세한 명세 |
> |---|---|---|
> | 1 | 03장 `PageMapCard`(지도 펼치기, 02장과 겹침) **삭제** → 순서 변경: 03 Header(`구역 ①`) · 04 Header 해부(`구역 ②`) · **05 Breadcrumb(`구역 ③`, 새 카드)** · 06 Footer(`구역 ④`) · 07 Footer 해부(`구역 ⑤`). 각 카드의 `page`와 `stage`를 함께 고쳐요 | 2-2, 5장 03~07 |
> | 2 | `SectionCard`에 `before`/`after` props 추가 (#01 TermCard의 "잘못된 설명 / 용어를 알고 난 후" 박스) | 3-1 |
> | 3 | 새 목업 `BreadcrumbMock` 추가, `PageMap` 목업·`.pm-pagemap` CSS·`PageMapCard.jsx` 삭제 | 4-2 |
> | 4 | 01 커버 "오늘의 내용" 목록에 Breadcrumb 줄 추가 (Andy가 바꾼 목록 구조는 유지) | 5장 01 |
> | 5 | 02 채팅: 제목을 `이런 상황이 답답하시죠,,`로, 빠진 반복 표시 `이걸 여러 번 반복...` 다시 넣기, 첫 말 끝 마침표 빼기 | 5장 02 |
> | 6 | 08 정리표: `햄버거 메뉴` 행 → `Breadcrumb` 행 | 5장 08 |
> | 7 | 09 엔딩: 칩 `햄버거 메뉴` → `Breadcrumb`, 다음 편 `Hero Section 편` → `입력하는 UI 편` + 설명 2줄 | 5장 09 |
> | 8 | `caption.md`를 7장 초안으로 통째로 교체 (Breadcrumb 줄·프롬프트 한 쌍, 다음 편 줄, 채팅 첫 말 인용) | 7장 |
>
> 형광펜은 01 "UI 용어집", 02 "Header, Footer", 08 "이 표" 3곳으로 줄어요 (예전 03장 "머리와 발"이 빠짐).

---

## #01에서 반영한 수정사항 (= 확정된 시리즈 규칙)

#01은 처음에 HTML 템플릿(`templates/*.html` + `build.py`)으로 만들었다가, React로 옮기면서 Andy가 아래처럼 고쳤어요. 이 편에는 모두 반영했어요. 그중 **9·10·12·13·15~18번은 Andy가 앞으로 「AI한테 이렇게 말해」 시리즈 전체에 적용하는 규칙으로 확정했어요 (2026-10-03, "확정 규칙" 표시).** 나머지는 #01 코드에 맞춘 것("#01 반영" 표시)이고. (비교 기준: 박스의 #01 원본 `build.py`·템플릿 vs Mac의 `src/posts/ui-talk-01/` 현재 코드, `document/03-UI.md`)

| # | #01에서 바뀐 점 (원본 → 지금) | 상태 · 이 편 반영 위치 |
|---|---|---|
| 1 | 모든 카드에서 배지·시리즈명(`.quest-tag`) 숨김, `QUEST #` 번호 없음. 오른쪽 아이콘(커버 나침반, 채팅 지도)만 남김 | **#01 반영.** 공통 규칙, 3-1·3-2 `card-head`, 01·02장 |
| 2 | 본문 카드 오른쪽 위 진행 루트(점 5개) 삭제 | **#01 반영.** 03~08장 (진행 루트 없음) |
| 3 | 커버: 키커·`보물: ○○` 메모·"밀어서 퀘스트 시작 →" 삭제, 제목+부제를 `cover-copy`로 묶어 **세로 가운데** | **#01 반영.** 01장 |
| 4 | 채팅: 단계 라벨(`출발 전, 내 이야기`) 삭제, 제목을 지도 아이콘(84→64px)과 **같은 줄**(`post-head`)에 두고 제목이 주인공 | **#01 반영.** 02장 |
| 5 | 채팅 제목 문구: 템플릿 기본값 `이름을 몰라서 생긴 일` → `이런 상황이 답답하시죠,,` (독자에게 말 거는 톤, 쉼표 두 개) | **#01 반영.** 02장 제목 (이 편도 같은 기본값을 쓰고 있어서 똑같이 교체) |
| 6 | 채팅 마지막 대사: `"아니 그게 아니라..."` → `"아니 그게 아니라,,"`, 그리고 **반복 표시 다음, 맨 마지막**으로 이동 | **#01 반영.** 02장 마지막 대사(나 3)·말풍선 순서 |
| 7 | 채팅 전체 크기 축소 (말풍선 34→30px, AI 말풍선 32→28px, 나/AI 원 72→56px, 미니 목업 0.3→0.22배, 반복 38→32px, 결론 카드 52→44px, 주석 28→26px, 간격 18→10px) | **#01 반영.** 02장 CSS 값 (#01 `chat-*` 값 그대로) |
| 8 | 용어 카드 박스 라벨: `이렇게 설명했었다` / `이렇게 말하면 된다` → `잘못된 설명` / `용어를 알고 난 후` | **#01 반영.** 이 편에는 before/after 박스 장이 없어서 해당 없음 (08장이 정리표로 바뀜) |
| 9 | 용어 카드 단계 라벨: `용어 ① 첫 번째 지점` → `UI 용어 ①` (서수 꾸밈말 삭제) | **확정 규칙.** 03~07장 단계 라벨 `구역 ①`~`구역 ⑤` (카드 제목은 `term`이 그대로 큰 제목) |
| 10 | 용어 카드에 "언제 쓰는지" 한 문장(`term-when`, 32px `--ink-soft`) 추가 | **확정 규칙.** 03~07장 모든 구역 카드에 `when` 한 문장 추가 (3-1 `hf-when`, 5장 각 카드) |
| 11 | 문구 다듬기: 조사 보강(`화면 가운데 뜨는` → `화면 가운데에 뜨는`), "말하면 된다" 예시를 더 구체적으로(`확인용 Modal` → `'정말 삭제할까요?' 확인 Modal… 배경은 dim 처리해줘`) | **#01 반영.** 이 편 문구 점검 완료 (예전 08장 프롬프트 예시는 캡션으로 옮김) |
| 12 | 비교표: 4칸(이름/어디서/뒤를 막나/사라지나 + 필 모양) → **이름 \| 기능** 2칸, 아래 주석 삭제 (03-UI "기능 정리표" 규칙) | **확정 규칙.** 08장을 "이름 \| 기능" 정리표로 교체, 아래 주석 없음 (3-2) |
| 13 | 커버 제목 문구: `화면 위에 뜨는 그거, 이름이 뭐더라?` → `AI가 알아먹는 UI 용어집 1탄` (질문형 → 시리즈 제목형) | **확정 규칙.** 01장 제목 `AI가 알아먹는 UI 용어집 2탄` |
| 14 | 렌더링: `render.sh`/`build.py` → React 카드 + `npm run export` | 0·2장 (이미 반영) |
| 15 | 채팅 카드: **나→AI를 항상 두 번** 주고받은 뒤 반복 표시 → 마지막 `"아니 그게 아니라,,"` (#01 구조) | **확정 규칙.** 02장 두 번째 대화 추가 |
| 16 | 엔딩: 모험·퀘스트 표현을 빼고 **"공부 노트" 스타일**로 (스탬프 `오늘 배운 단어 5개`, 제목 `오늘의 정리`, `다음 편` 라벨, 노트·체크 낙서 장식) | **확정 규칙.** 09장 전체. #01 `Ending.jsx`는 Andy가 직접 고쳐요 (이 편 작업에서는 #01 수정 금지) |
| 17 | 채팅 장면은 일반적인 상황으로 두고, **실제/예시 여부 주석은 넣지 않음** | **확정 규칙.** 02장 주석 줄 없음 |
| 18 | 말투: 카드·캡션 모두 **공부 노트 말투**. 퀘스트·주문(서)·탐험·모험·지점·보물·NEXT QUEST 금지 (`04-series-rules.md` 말투 규칙) | **확정 규칙.** 08장 stage, 캡션, 엔딩 |

---

## 0. 메타

| 항목 | 값 |
|---|---|
| 시리즈 | 「AI한테 이렇게 말해」 (`series="talk"`, 배지는 숨김) · 커버 제목 `AI가 알아먹는 UI 용어집 2탄` |
| 편 종류 | **구역 편**: 한 편에 페이지 구역(section) 개념 하나를 다루고, 그 구역이 어떤 역할을 하는지 알려줘요 |
| 이번 구역 | Header · Footer (웹사이트의 머리와 발) |
| 편 번호 | 커버 제목의 `2탄`에만 표시. `QUEST #` 번호는 카드에 표시하지 않음 (번호 상수 없음) |
| 필러 색 | 🎨 UI/UX 핑크: `--ui #F9B4C4` / `--ui-deep #D9637F` (`<Post pillar="ui">`이면 `--p`, `--p-deep`에 자동 적용) |
| 캔버스 | 1080 × 1350 (4:5) |
| 장 수 | 9장 (`<Post total="09">` 기본값) |
| slug | `ui-talk-02-header-footer` |
| 코드 위치 | `src/posts/ui-talk-02-header-footer/` (아래 2장 파일 구성) |
| 미리보기 | `npm run dev` → `http://127.0.0.1:5173/?post=ui-talk-02-header-footer` (9장 세로로 쌓임) |
| 한 장만 보기 | `...?post=ui-talk-02-header-footer&card=03` |
| 출력(PNG) | `POST=ui-talk-02-header-footer npm run export` → `posts/ui-talk-02-header-footer/still-cuts/01.png` … `09.png` (프로젝트 루트의 `posts/`) |
| 캡션 | `src/posts/ui-talk-02-header-footer/caption.md` (이 문서 맨 아래 초안 그대로 저장) |

### 장 순서 한눈에

| # | 역할 | 컴포넌트 파일 (`cards/`) | 바탕이 되는 #01 카드 | 레이아웃 |
|---|---|---|---|---|
| 01 | 커버 | `Cover.jsx` | `ui-talk-01/cards/Cover.jsx` 복사 후 문구 교체 | — |
| 02 | 내 경험 (문제 제기) | `Chat.jsx` + 새 목업 `WrongNav` | `ui-talk-01/cards/Chat.jsx` | — |
| 03 | 구역 ① Header가 하는 일 | `HeaderCard.jsx` → **`SectionCard.jsx`** + 목업 `HeaderMock` | `TermCard.jsx` 구조 참고 | side |
| 04 | 구역 ② Header 해부하기 | `HeaderPartsCard.jsx` → `SectionCard` + 목업 `HeaderParts` | 〃 | wide |
| 05 | 구역 ③ Breadcrumb (용어 카드, before/after 있음) | `BreadcrumbCard.jsx` (새로 만듦) → `SectionCard` + 목업 `BreadcrumbMock` | #01 `TermCard.jsx` | side |
| 06 | 구역 ④ Footer가 하는 일 | `FooterCard.jsx` → `SectionCard` + 목업 `FooterMock` | 〃 | side |
| 07 | 구역 ⑤ Footer 해부하기 | `FooterPartsCard.jsx` → `SectionCard` + 목업 `FooterParts` | 〃 | wide |
| 08 | 한 눈에 정리 (정리표) | `Summary.jsx` | `ui-talk-01/cards/Compare.jsx` 복사 | — |
| 09 | 엔딩 | `Ending.jsx` | `ui-talk-01/cards/Ending.jsx` | — |

### 옛 HTML 템플릿 → React 대응표

| 옛 브리프 (HTML) | 이번 React 구현 |
|---|---|
| `templates/cover.html` + URL 파라미터 | `cards/Cover.jsx` (#01 `Cover.jsx` 복사, JSX 글자로 문구 입력) |
| `templates/chat.html` | `cards/Chat.jsx` (#01 `Chat.jsx` 복사) |
| `templates/term-mock.html` 복사해서 만드는 `section.html` | `cards/SectionCard.jsx` (#01 `TermCard.jsx`처럼 "여러 장이 같이 쓰는 레이아웃" 컴포넌트) |
| 새 `templates/say.html` (before/after 두 쌍) | **없앰.** 08장은 #01 `Compare.jsx` 구조의 정리표 `cards/Summary.jsx`로 바뀜 |
| `templates/ending.html` | `cards/Ending.jsx` (#01 `Ending.jsx` 복사) |
| `assets/mock.js`의 새 키 6개 | `mocks.jsx`의 컴포넌트 6개 (`WrongNav`, `BreadcrumbMock`, `HeaderMock`, `HeaderParts`, `FooterMock`, `FooterParts`). 공용 `src/ui/Mock.jsx`는 수정하지 않음 |
| `assets/mock.css` 맨 아래 `pm-` 규칙 | 이 편의 `cards.css` 안 "mocks" 구역에 `pm-` 규칙 (공용 `src/styles/mock.css`는 수정하지 않음) |
| `crayon.js`의 `Crayon.icon("magnifier")`, `data-icon="arrow"` | `src/ui/Icon.jsx`의 `<Icon name="magnifier" />`, `<Icon name="arrow" />` (크기는 감싸는 `div`의 width/height로) |
| `#wax`, `#wax-stroke`, `#rough` 필터 (crayon.js가 주입) | `src/ui/Filters.jsx` (App에 이미 한 번 들어 있음, `url(#wax)` 그대로 사용) |
| `data-field="pg"`, 계정명 푸터 | `<Post page="03">`가 자동으로 계정명 · `03 / 09` 푸터를 그림 (계정명은 Andy가 `src/ui/Post.jsx`에서 직접 설정·관리) |
| 배지 + `QUEST #??` + 시리즈명 머리 | `<div className="card-head"><QuestTag series="talk" showType={false} /></div>` (03-UI 규칙에 따라 `.quest-tag`는 CSS로 숨겨짐, 번호 없음) |
| 오른쪽 위 진행 루트 (`step 1/5` 등) | **없음.** 03-UI 규칙 "진행 점(`route-progress`)은 넣지 않는다"를 따름 |
| `build.py` (문구·파라미터 묶음), `HL()`, `B()`, `pt()`, `leg()` | 각 카드 `.jsx` 파일 안 JSX 글자. `HL("x")` → `<span className="hl">x</span>`, `B("x")` → `<b>x</b>`, `<br>` → `<br />`, `pt/leg` → `SectionCard`의 `items` 배열 |
| `./render.sh`, `python3 .../build.py 03 05` | `POST=ui-talk-02-header-footer npm run export -- 03 05` (2장의 export.mjs 변경 후) |

---

## 1. 공통 규칙 (모든 장)

1. **#01 카드와 공용 파일을 바꾸지 않아요.** 아래 파일은 수정 금지예요.
   - `src/styles/tokens.css`, `src/styles/base.css`, `src/styles/mock.css`
   - `src/ui/*` (`Post.jsx`, `QuestTag.jsx`, `Icon.jsx`, `Mock.jsx`, `Filters.jsx`, `series.js`)
   - `src/posts/ui-talk-01/**` 전부 (`cards.css`에는 미리보기·export용 `body`, `.strip`, `.label`, `body[data-mode="export"]`, `.quest-tag {display:none}`, `.card-head`가 들어 있어서 그대로 계속 import 돼야 해요)
   - 허용되는 변경은 딱 네 가지예요.
     - `src/posts/ui-talk-02-header-footer/` 아래 **새 파일 추가** (2장 목록)
     - `src/App.jsx`: 편(post)을 고를 수 있게 등록 (2-3)
     - `src/main.jsx`: 이 편의 `cards.css` import 한 줄 추가 (2-3)
     - `scripts/export.mjs`: 편을 고를 수 있게 변경 (2-4). **인자 없이 실행하면 지금처럼 ui-talk-01이 그대로 나와야 해요**
2. **클래스 이름 충돌 금지.** 두 편의 `cards.css`가 한 페이지에 같이 로드되므로, 이 편에서 새로 만드는 클래스는 모두 `hf-` 접두사(목업은 `pm-`)를 붙여요. #01의 `cover-title`, `chat-bub`, `term-*`, `ending-*` 같은 클래스를 그대로 가져다 쓰지 말고, 필요한 블록을 이 편 `cards.css`로 복사한 뒤 `hf-`로 이름을 바꿔요 (예: `.cover-title` → `.hf-cover-title`, `.chat-bub` → `.hf-chat-bub`).
   - 예외로 그대로 써도 되는 공용 클래스: `base.css`의 `.display`, `.hand`, `.hl`, `.chip`, `.card`, `.card.warm`, `.layer`, `.footer`, `.quest-tag`, 그리고 `mock.css`의 `.phone`, `.scr`, `.notch`, `.app` 하위(`.hero`, `.ln`, `.cards`), `.burger`, `.ping`, `.card-head`
3. 새 색·폰트·크기 값을 만들지 말고 `var(--…)` 토큰만 써요. px 값은 이 문서에 적힌 값(#01 카드에서 가져온 값)을 써요.
4. **제목 3줄 이하**, 글자 넘침·잘림·겹침 없음. 본문 최소 28px, Gaegu 최소 32px (예외: 목업 안의 아주 작은 라벨은 #01 Toast·Tooltip 목업처럼 20~22px, 02장 AI 말풍선은 #01 채팅처럼 28px 허용).
5. 내용이 **y=1230px 아래로 내려가면 안 돼요** (`<Post>` 푸터 `계정명 · 01 / 09`가 바닥 52px 위에 있어요). 좌우 88px 여백 유지.
6. **형광펜(`className="hl"`)은 한 장에 한 단어(구절)만.** 아래 명세에 적힌 곳에만 써요.
7. 계정명은 `src/ui/Post.jsx`가 자동으로 넣고 Andy가 직접 관리해요. 이 편 코드와 문서에는 계정명을 적거나 바꾸지 않아요.
7-1. **말투**: 모든 카드 글자는 공부 노트 말투예요. 퀘스트·주문(서)·탐험·모험·지점·보물·NEXT QUEST 같은 모험 표현은 쓰지 않아요 (`document/04-series-rules.md` "말투 규칙"). 크레파스·지도풍 장식은 그림으로만 남아도 돼요.
8. 페이지 번호는 `<Post page="01">` … `page="09"`로 넘겨요 (`total`은 기본값 `"09"`).
9. 크레파스 질감(`url(#wax)`, `url(#wax-stroke)`, `url(#rough)`)은 **테두리·면·선에만** (`::before`/`::after` 레이어 또는 SVG). 글자가 든 요소에는 절대 `filter`를 걸지 않아요.
10. 없는 통계·인용·수치를 넣지 않아요. 문구는 이 문서 그대로.
11. 인라인 `style={{…}}`은 #01처럼 아주 작은 위치 조정에만 쓰고, 글꼴·크기는 `cards.css` 클래스로 만들어요.
12. **export 후 9장을 모두 눈으로 확인**하고, 아래 장별 "완료 기준"을 체크해요. 미리보기(`npm run dev`)에서 먼저 확인하고, export는 사용자가 하라고 할 때 해요 (README 규칙).

### 넘칠 때 줄이는 순서

1. 해당 장의 `fn`(주석) 줄 삭제 (`when` 한 문장은 시리즈 규칙이라 지우지 않아요)
2. 범례(legend) 설명 줄을 한 줄로 줄이기 (이름은 유지)
3. 목업 높이를 최대 15%까지 줄이기
4. 그래도 넘치면 문구를 바꾸지 말고 멈춰서 Andy에게 물어보기

---

## 2. 파일 구성과 등록

### 2-1. 만들 파일

```
src/posts/ui-talk-02-header-footer/
├─ brief.md            # 이 문서 (이미 있음)
├─ caption.md          # 7장 초안 그대로
├─ cards.jsx           # 카드 순서 배열 (= 미리보기 순서 = export 순서)
├─ cards.css           # 이 편 카드 스타일 전부 (hf-, pm- 접두사)
├─ ids.js              # export.mjs가 읽는 카드 id 목록
├─ mocks.jsx           # 새 목업 6개
└─ cards/
   ├─ Cover.jsx
   ├─ Chat.jsx
   ├─ SectionCard.jsx  # 03~07이 같이 쓰는 레이아웃 (#01 TermCard 역할)
   ├─ HeaderCard.jsx       # 03
   ├─ HeaderPartsCard.jsx  # 04
   ├─ BreadcrumbCard.jsx   # 05 (2026-10-04 새로 추가, PageMapCard.jsx는 삭제)
   ├─ FooterCard.jsx       # 06
   ├─ FooterPartsCard.jsx  # 07
   ├─ Summary.jsx          # 08 (정리표, #01 Compare.jsx 구조)
   └─ Ending.jsx           # 09
```

- import 경로는 #01과 같은 깊이예요: 카드 파일에서 `../../../ui/Post.jsx`, 목업은 `../mocks.jsx`.

### 2-2. `cards.jsx`, `ids.js`

```jsx
// cards.jsx
import { Cover } from "./cards/Cover.jsx";
import { Chat } from "./cards/Chat.jsx";
import { HeaderCard } from "./cards/HeaderCard.jsx";
import { HeaderPartsCard } from "./cards/HeaderPartsCard.jsx";
import { BreadcrumbCard } from "./cards/BreadcrumbCard.jsx";
import { FooterCard } from "./cards/FooterCard.jsx";
import { FooterPartsCard } from "./cards/FooterPartsCard.jsx";
import { Summary } from "./cards/Summary.jsx";
import { Ending } from "./cards/Ending.jsx";

/* 이 배열 순서가 미리보기 스크롤 순서이자 export 순서입니다. */
export const cards = [
  { id: "01", label: "cover", Card: Cover },
  { id: "02", label: "chat", Card: Chat },
  { id: "03", label: "Header", Card: HeaderCard },
  { id: "04", label: "Header 해부", Card: HeaderPartsCard },
  { id: "05", label: "Breadcrumb", Card: BreadcrumbCard },
  { id: "06", label: "Footer", Card: FooterCard },
  { id: "07", label: "Footer 해부", Card: FooterPartsCard },
  { id: "08", label: "summary", Card: Summary },
  { id: "09", label: "ending", Card: Ending },
];
```

```js
// ids.js  (cards.jsx의 id와 정확히 같아야 해요)
export const CARD_IDS = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];
```

### 2-3. App.jsx에 등록 (+ main.jsx)

지금 `App.jsx`는 `./posts/ui-talk-01/cards.jsx`만 import 하고 있어요. `?post=` 파라미터로 편을 고르게 바꿔요. **`?post=`가 없으면 지금처럼 ui-talk-01이 나와야 해요** (기존 export·북마크가 그대로 동작하도록).

```jsx
// src/App.jsx (변경 예시)
import { useEffect } from "react";
import { Filters } from "./ui/Filters.jsx";
import { cards as talk01 } from "./posts/ui-talk-01/cards.jsx";
import { cards as talk02 } from "./posts/ui-talk-02-header-footer/cards.jsx";

const POSTS = {
  "ui-talk-01": talk01,
  "ui-talk-02-header-footer": talk02,
};

export function App() {
  const params = new URLSearchParams(location.search);
  const post = params.get("post") || "ui-talk-01";
  const only = params.get("card");
  const cards = POSTS[post] || talk01;
  const shown = only ? cards.filter((card) => card.id === only) : cards;
  // 이하 기존 코드 그대로 (useEffect, Filters, .strip, .label)
}
```

```jsx
// src/main.jsx: 기존 import 아래에 한 줄 추가
import "./posts/ui-talk-02-header-footer/cards.css";
```

### 2-4. export.mjs (PNG 출력)

지금 `scripts/export.mjs`는 `ui-talk-01/ids.js`와 `posts/ui-talk-01/still-cuts`가 고정이에요. 환경변수 `POST`로 편을 고르게 바꿔요. 캡처 옵션(1080×1350, `--force-device-scale-factor=1`, `--virtual-time-budget=5000`, Chrome 경로, vite 자동 실행)은 그대로 둬요.

```js
const post = process.env.POST || "ui-talk-01";
const { CARD_IDS } = await import(`../src/posts/${post}/ids.js`);
const outDir = `posts/${post}/still-cuts`;
// shot() 안의 url:
const url = `${origin}/?post=${post}&card=${id}`;
```

- 전체: `POST=ui-talk-02-header-footer npm run export`
- 일부만: `POST=ui-talk-02-header-footer npm run export -- 03 05`
- 결과: 프로젝트 루트 `posts/ui-talk-02-header-footer/still-cuts/01.png` … `09.png` (폴더는 `mkdir`로 자동 생성)
- 확인: `npm run export -- 03` (POST 없이)가 지금처럼 `posts/ui-talk-01/still-cuts/03.png`를 만드는지

---

## 3. 새 카드 컴포넌트 명세

### 3-1. `cards/SectionCard.jsx` (구역 카드, 03~07)

#01 `TermCard.jsx`처럼 레이아웃만 갖고, 문구는 각 카드 파일에서 props로 넘겨요. TermCard의 `when`(언제 쓰는지 한 문장)은 그대로 두고, `feats` 대신 **항목 목록(items)**과 **팁 카드(tip)**가 들어가요. 2026-10-04부터 Breadcrumb 장(05)을 위해 #01 TermCard의 **before/after 박스**(`before`, `after`)도 선택으로 받아요.

**props**: `name, page, layout("side"|"wide"), mock(JSX), stage, term, pron, mean, when, items([{ n, t, d }]), before, after, tipLabel, tip, fn`
- 빈 값(`undefined`나 빈 배열)인 부분은 **렌더링하지 않아요** (옛 템플릿의 `:empty` 숨김 대신 조건부 렌더링)

**구조 (위→아래)**

```jsx
<Post name={name} pillar="ui" page={page} className={`hf-section hf-${layout}`}>
  <div className="card-head"><QuestTag series="talk" showType={false} /></div>
  <div className="hf-stage">{stage}</div>
  <div className="hf-term">
    <h1 className="display">{term}</h1>
    {pron && <span className="hf-pron">{pron}</span>}
  </div>
  {mean && <p className="hf-mean">{mean}</p>}
  {when && <p className="hf-when">{when}</p>}
  <div className="hf-row">
    <div className="hf-mockcol">{mock}</div>
    {items?.length > 0 && (
      <ul className="hf-items">
        {items.map(({ n, t, d }) => (
          <li key={n} className={layout === "side" ? "hf-pt" : "hf-leg"}>
            <span className="hf-num">{n}</span>
            <div><b>{t}</b><p>{d}</p></div>
          </li>
        ))}
      </ul>
    )}
    {(before || after) && (
      <div className="hf-talk">
        <div className="hf-before">
          <div className="hf-lab">
            <span className="hf-mark"><Icon name="x" color="var(--ink-soft)" stroke={10} /></span>
            잘못된 설명
          </div>
          <p>{before}</p>
        </div>
        <div className="hf-down"><Icon name="arrow" color="var(--p-deep)" stroke={8} /></div>
        <div className="card hf-after">
          <div className="hf-lab">
            <span className="hf-mark"><Icon name="star" color="var(--sun-deep)" stroke={8} /></span>
            용어를 알고 난 후
          </div>
          <p>{after}</p>
        </div>
      </div>
    )}
  </div>
  {tip && (
    <div className="card hf-tip">
      {tipLabel && <div className="hf-tip-label">{tipLabel}</div>}
      <div className="hf-tip-text">{tip}</div>
    </div>
  )}
  {fn && <p className="hf-fn">{fn}</p>}
</Post>
```

- 진행 루트는 넣지 않아요 (03-UI 규칙). `.card-head`는 #01 TermCard와 똑같이 둬요 (배지는 CSS로 숨겨짐).
- `before`/`after`를 쓰려면 `SectionCard.jsx` 맨 위에 `import { Icon } from "../../../ui/Icon.jsx";`를 추가해요. 박스 라벨 문구는 시리즈 규칙대로 `잘못된 설명` / `용어를 알고 난 후`.

**CSS (`cards.css`, 값은 #01 `term-*` / `chat-punch`에서 가져옴)**

| 선택자 | 값 |
|---|---|
| `.hf-stage` | `margin-top: 44px; font-family: var(--f-hand); font-weight: 700; font-size: 42px; color: var(--p-deep);` (#01 `.term-stage`와 같음) |
| `.hf-term` | `display:flex; flex-wrap:wrap; align-items:baseline; gap: 0 24px;` |
| `.hf-term h1` | `font-size: 104px; line-height: 1.12;` |
| `.hf-pron` | `font-family: var(--f-body); font-size: 38px; font-weight: 600; color: var(--ink-soft);` |
| `.hf-mean` | `margin-top: 14px; font-size: 38px; line-height: 1.5; font-weight: 600;` / `b`는 `font-weight:800` |
| `.hf-when` | #01 `.term-when`과 같음: `margin-top: 6px; font-size: 32px; line-height: 1.45; font-weight: 500; color: var(--ink-soft);` / `mean`이 없는 장(03·05·07)은 `.hf-term + .hf-when { margin-top: 14px; }` |
| `.hf-row` (side) | `margin-top: 40px; display:grid; grid-template-columns: 380px 1fr; gap: 36px; align-items:center;` |
| `.hf-wide .hf-row` | `grid-template-columns: 1fr; gap: 28px; margin-top: 32px;` |
| `.hf-mockcol` | `display:flex; justify-content:center; align-items:center;` (side: `height: 540px`, `.hf-wide .hf-mockcol`: `height:auto`) |
| `.hf-items` | `list-style:none; display:flex; flex-direction:column; gap: 22px;` / `.hf-wide .hf-items`: `display:grid; grid-template-columns: 1fr 1fr; gap: 18px 32px;` |
| `.hf-pt` (side용 항목) | `.card`처럼 손그림 테두리 박스: `position:relative; isolation:isolate; padding: 24px 28px 26px; display:flex; gap:18px; align-items:flex-start;` + `::before`는 `.card::before`와 동일 (흰 바탕, `var(--stroke) solid var(--p)`, radius 28px, `filter:url(#wax)`) |
| `.hf-num` | 지름 48px 원, `flex:none; position:relative; isolation:isolate; display:flex; align-items:center; justify-content:center;` 글자는 `font-family: var(--f-display); font-size: 28px; color: var(--ink);`, 원 바탕은 `::before`에 `var(--sun)` + `filter:url(#wax)` (글자는 선명) |
| `.hf-pt b` | `display:block; font-family: var(--f-display); font-weight:400; font-size: 40px; line-height:1.25;` |
| `.hf-pt p` | `margin-top: 6px; font-size: 30px; line-height: 1.5; color: var(--ink-soft); font-weight: 500;` |
| `.hf-leg` (wide용 범례) | 박스 없음. `display:flex; gap:14px; align-items:flex-start;` / `b`: Jua 34px (`font-weight:400`) / `p`: 28px, `var(--ink-soft)`, weight 500, line-height 1.4 |
| `.hf-tip.card` | `margin-top: 24px; padding: 22px 36px 24px;` + `.hf-tip.card::before { background: var(--paper-warm); border-color: var(--sun-deep); }` (#01 `.chat-punch`와 같은 모양) |
| `.hf-tip-label` | `font-family: var(--f-hand); font-weight:700; font-size: 34px; color: var(--p-deep);` |
| `.hf-tip-text` | `font-family: var(--f-display); font-size: 44px; line-height: 1.3;` / 안의 `b`는 `color: var(--p-deep); font-weight:400;` |
| `.hf-tip-desc` | 팁 안 긴 설명용: `font-family: var(--f-body); font-weight:600; font-size:32px;` (옛 브리프의 인라인 `<span style=…>` 대신) |
| `.hf-fn` | `margin-top: 14px; font-size: 28px; line-height: 1.5; color: var(--ink-soft); font-weight: 500;` |
| `.hf-talk`, `.hf-before`, `.hf-down`, `.hf-after`, `.hf-lab`, `.hf-mark` (+ 각 `p`, `::before`, `.hf-after b`) | #01 `src/posts/ui-talk-01/cards.css`의 `.term-talk`, `.term-before`, `.term-down`, `.term-after`, `.term-lab`, `.term-mark` 블록을 **값 그대로** 복사해서 이름만 `hf-`로 (2026-10-04 추가, 05장 전용) |

### 3-2. `cards/Summary.jsx` (한 눈에 정리: 정리표, 08)

#01 `cards/Compare.jsx`를 복사해서 클래스만 `hf-summary-*`로 바꾸고 행 내용을 교체해요. 시리즈 규칙(`04-series-rules.md` 4장, `03-UI.md` "기능 정리표")대로 **"이름 | 기능" 두 칸만**, 표 아래 주석은 **넣지 않아요**. 여러 항목(어디에 있나, 고정되나…)을 비교하는 칸을 추가하지 않아요.

```jsx
function Row({ name, ko, job }) {
  return (
    <div className="hf-summary-row">
      <div className="hf-summary-name">{name}<small>{ko}</small></div>
      <div className="hf-summary-cell">{job}</div>
    </div>
  );
}

export function Summary() {
  return (
    <Post name="Summary" pillar="ui" page="08">
      <div className="card-head"><QuestTag series="talk" showType={false} /></div>
      <div className="hf-summary-stage">한 눈에 정리</div>
      <h1 className="display hf-summary-title">헷갈릴 땐 <span className="hl">이 표</span> 하나</h1>
      <div className="hf-summary-save">저장 필수!</div>
      <div className="card hf-summary-table">
        <div className="hf-summary-row hf-summary-headrow"><span>이름</span><span>기능</span></div>
        {/* Row 5개: 5장 08 명세 */}
      </div>
    </Post>
  );
}
```

| 선택자 | 값 (#01 `compare-*`와 같음) |
|---|---|
| `.hf-summary-stage` | `margin-top: 40px;` Gaegu 700 42px `var(--p-deep)` |
| `.hf-summary-title` | `font-size: 76px; line-height: 1.2;` |
| `.hf-summary-save` | `position:absolute !important; right: 80px; top: 300px; transform: rotate(6deg);` Gaegu 700 38px `var(--sun-deep)` |
| `.hf-summary-table.card` | `margin-top: 36px; padding: 14px 28px 12px;` / `::before { border-color: var(--p); }` |
| `.hf-summary-row` | `display:grid; grid-template-columns: 280px 1fr; align-items:center; gap: 24px; min-height: 128px; border-top: 4px dashed var(--paper-line);` |
| `.hf-summary-headrow` | `min-height: 96px; border-top: none;` Gaegu 700 34px lh 1.05 `var(--p-deep)` |
| `.hf-summary-name` | Jua 38px, `white-space: nowrap; line-height: 1.1;` / `small`: `display:block; margin-top: 6px;` Pretendard 600 26px `var(--ink-soft)` |
| `.hf-summary-cell` | `font-size: 30px; line-height: 1.45; font-weight: 600;` |

- 진행 루트는 넣지 않아요 (03-UI 규칙).

---

## 4. 새 목업 명세 (`mocks.jsx` + `cards.css`의 mocks 구역)

공통 원칙: #01 목업(`src/ui/Mock.jsx` + `src/styles/mock.css`)처럼 **테두리만 크레파스**(`filter:url(#wax-stroke)`를 `::before`/`::after`에), 안쪽은 선명한 면과 둥근 막대로 그려요. 글 대신 막대(`pm-ln`)를 쓰고, 꼭 필요한 곳에만 짧은 실제 글자를 써요.
- 6개 모두 `mocks.jsx`에서 `export function WrongNav() {…}` 식으로 내보내고, 카드 파일에서 `mock={<HeaderMock />}`처럼 넘겨요.
- 공용 `Mock.jsx`의 `Phone`은 export 되지 않고 기본 앱 화면이 고정이라 쓰지 않아요. 폰이 필요한 `WrongNav`는 같은 마크업(`.phone > .scr > .app` + `.notch`)을 직접 써요.
- 아이콘은 `import { Icon } from "../../ui/Icon.jsx"` 후 크기를 정한 `div`로 감싸요: `<div style={{ width: 30, height: 30 }}><Icon name="magnifier" color="var(--ink)" stroke={9} /></div>`
- 손그림 점선 루트·화살표 같은 장식은 #01 `Cover.jsx`/`Ending.jsx`처럼 인라인 SVG `<path … filter="url(#wax-stroke)" />`로 그려요.

### 공용 클래스 (cards.css에 추가, 모두 `pm-` 접두사)

| 클래스 | 정의 |
|---|---|
| `.pm-site` | 브라우저 창. `position:relative; isolation:isolate;` + `::before { content:""; position:absolute; inset:0; border-radius:26px; background:var(--white); border:9px solid var(--ink); filter:url(#wax-stroke); z-index:-1 }` (공용 `.browser`와 같은 모양, 크기는 목업마다 지정) / 안쪽 `.pm-win { position:absolute; inset:12px; border-radius:18px; background:var(--white); overflow:hidden; display:flex; flex-direction:column; }` |
| `.pm-top` | 창 상단 바. 공용 `.browser .top`과 같은 값을 복사 (높이 44px, `--paper-warm`, 아래 3px `--paper-line`, 점 3개 13px `--ui / --sun / --dev`, URL 막대 20px 흰색). `.browser` 아래에서만 동작하는 선택자라 그대로 못 쓰니 `pm-`로 복사 |
| `.pm-zone` | 강조 구역. `position:relative; background: var(--p);` + `::after { content:""; position:absolute; inset:6px; border-radius:12px; border:4px dashed var(--p-deep); filter:url(#wax-stroke); pointer-events:none; }` |
| `.pm-dim` | 강조 안 하는 본문. `opacity:.45;` |
| `.pm-ln` | 막대. `height:12px; border-radius:6px; background: var(--paper-line);` (`.w60`, `.w80` 등으로 너비) |
| `.pm-bar` | 진한 막대(로고 글자·제목 대용). `height:14px; border-radius:7px; background: var(--ink-soft);` |
| `.pm-wbar` | 핑크 구역 위 흰 막대. `height:12px; border-radius:6px; background: var(--white);` |
| `.pm-logo` | 로고. 지름 34px 원 `var(--white)` + 옆에 `.pm-bar` 70px (핑크 구역 안) / 흰 바탕 위에서는 원을 `var(--p)` |
| `.pm-pin` | 번호 핀. `position:absolute; z-index:8; width:42px; height:42px; isolation:isolate; display:flex; align-items:center; justify-content:center;` 글자 `font-family:var(--f-display); font-size:26px; color:var(--ink);`. 바탕은 `::before { content:""; position:absolute; inset:0; border-radius:50%; background:var(--sun); filter:url(#wax); z-index:-1 }` (글자 선명) |
| `.pm-note` | 목업 옆 손글씨 라벨. `position:absolute; font-family:var(--f-hand); font-weight:700; font-size:40px; color:var(--p-deep); white-space:nowrap;` |
| `.pm-strip` | 확대한 가로 띠(헤더/푸터 해부용). `position:relative; isolation:isolate;` + `::before { content:""; position:absolute; inset:0; border-radius:24px; background:var(--white); border:8px solid var(--ink); filter:url(#wax-stroke); z-index:-1 }` |
| `.pm-tag` | 띠 위 작은 라벨 `DESKTOP` / `MOBILE`. `font-family:var(--f-mono); font-weight:800; font-size:24px; letter-spacing:.1em; color:var(--ink-soft); margin-bottom:10px;` |

### 4-1. `WrongNav` (02장 AI 말풍선 안 미니 목업)

- 크기: 공용 `.phone`과 같은 300×560 (#01 Chat의 `.chat-mini`처럼 축소해서 보여줘요, 2장 명세 참고)
- 마크업: `<div className="phone"><div className="scr"><div className="app">…</div></div><div className="notch" /></div>`
- `.app` 안 내용 (위→아래), **"메뉴가 엉뚱한 곳에 있는" 화면**:
  1. 맨 위에 바(`.bar`) 없음. 바로 `.hero` (peach 블록)
  2. `.ln.m`, `.ln.s`
  3. **본문 한가운데** 메뉴 줄: 높이 46px, `.pm-zone` 핑크 띠 안에 로고 원 + 흰 막대 3개 (각 40px). 띠 오른쪽 위에 지름 40px 노란 `?` 원 (`var(--sun)`, Jua 26px, 글자 `--ink`)
  4. `.cards` (2칸)
  5. 맨 아래가 아니라 **카드 바로 밑에** 회사 정보 막대 2줄(`.ln.s` 두 개, `var(--ink-faint)`)이 떠 있고, 그 아래는 빈 공간
- 축소된 크기에서도 "가운데 핑크 띠 + ?"가 보이면 OK

### 4-2. `BreadcrumbMock` (05장, side) · `PageMap` 대신 새로 만듦

> 예전 03장용 `PageMap` 목업과 `.pm-pagemap` CSS는 더 이상 쓰지 않아요. `mocks.jsx`와 `cards.css`에서 지워요.

- 크기: `.pm-site` **340 × 500** (`HeaderMock`·`FooterMock`과 같음)
- `.pm-win` 안 (위→아래):
  1. `.pm-top`
  2. **Header** (흐리게 `.pm-dim`): 높이 64px, `var(--paper-warm)` 바탕 + 아래 3px `var(--paper-line)`, `padding: 0 20px; display:flex; align-items:center; gap:12px;` → 로고 원 26px `var(--p)` + `.pm-bar` 50px / 빈칸(flex 1) / `.pm-ln` 36px ×2
  3. **Breadcrumb 줄** `.pm-zone` 높이 56px, `padding: 0 18px; display:flex; align-items:center; gap:8px;` → 실제 글자 `홈` `>` `상의` `>` `니트` (Pretendard 22px. `홈`·`상의`는 600 `var(--ink)` + 밑줄 2px(링크라는 표시), `>`는 `var(--p-deep)`, 마지막 `니트`는 800 `var(--ink)`이고 밑줄 없음 = 지금 페이지)
  4. **본문** `.pm-dim`, `padding: 20px; display:flex; flex-direction:column; gap:14px;` → 상품 사진 블록 높이 170px(radius 16, `var(--peach)`) / `.pm-bar` 120px (상품명) / `.pm-ln.w60` / 버튼 막대 44px pill `var(--paper-line)`
- 선택: 창 아래 바깥에 `.pm-note` 32px `지금 여기!` (`--p-deep`, `rotate(-6deg)`) + `니트`를 향한 짧은 손그림 화살표. `.hf-mockcol` 380px 안에 안 들어가면 생략
- `>` 글자는 JSX에서 `{">"}`로 써요

### 4-3. `HeaderMock` (03장, side)

- 크기: `.pm-site` **340 × 500**
- `.pm-win` 안:
  1. `.pm-top`
  2. **Header 구역** `.pm-zone` 높이 84px, `padding: 0 20px; display:flex; align-items:center; gap:12px;` → `.pm-logo`(원 30px + 막대 56px) / 빈칸 / 돋보기 `<Icon name="magnifier">` 30px / 흰 원 24px(로그인 자리)
  3. 그 바로 아래 메뉴 줄 (Header의 일부, 핑크 연장): 높이 40px, `var(--p)` opacity .6, `.pm-wbar` 44px ×4 (gap 16px, 왼쪽 정렬, padding 0 20px)
  4. **본문** `.pm-dim`: peach 블록 120px / `.pm-ln.w80` / `.pm-ln.w60` / 2칸 카드(높이 90px) / `.pm-ln`
- 로고 둘레에 노란 점선 원 (공용 `.ping` 클래스 재사용, 인라인 style로 지름 58px, 로고 원 중심에 맞춤)
- 그 옆 창 바깥 아래쪽으로 `.pm-note` 32px `누르면 홈!` (`--p-deep`, 살짝 `rotate(-6deg)`), 로고 쪽을 가리키는 짧은 손그림 화살표(`<Icon name="arrow">` 56px, 뒤집어서 왼쪽 위를 향하게)
  - 라벨이 창 밖으로 나가면 `.hf-mockcol` 380px 안에 들어오게 창 **안쪽** 본문 위에 올려도 돼요 (흰 바탕 둥근 말풍선 없이 글자만)

### 4-4. `HeaderParts` (04장, wide)

감싸개 `.pm-parts { display:flex; flex-direction:column; align-items:flex-start; width:904px; }` 안을 세로로 쌓아요.

1. `.pm-tag` `DESKTOP`
2. `.pm-strip` **904 × 120**, 안쪽 `padding: 0 36px; display:flex; align-items:center; gap: 28px;`
   - ① 로고: 원 44px `var(--p)` + `.pm-bar` 90px
   - ② GNB: `.pm-bar` 64px ×4, gap 26px (막대 뒤에 연한 `var(--p)` 둥근 띠를 깔아서 "한 묶음"으로 보이게, padding 14px 18px, radius 999px)
   - 빈칸 (flex:1)
   - ③ 검색: 너비 170 높이 44 pill, 테두리 3px `var(--paper-line)`, 안 왼쪽에 돋보기 아이콘 26px + `.pm-ln` 80px
   - ④ 로그인 버튼: 너비 112 높이 44 pill `var(--p)`, 가운데 실제 글자 `로그인` (Pretendard 700, 22px, `--ink`)
   - 핀 ①②③④ (`.pm-pin`, 글자 `1`~`4`): 각 요소 위 가운데, `top:-24px` (띠 테두리에 걸치게). 각 요소를 `position:relative` 감싸개로 묶어서 핀 위치를 잡아요
3. 간격 44px
4. `.pm-tag` `MOBILE`
5. `.pm-strip` **430 × 100**, `padding: 0 30px; display:flex; align-items:center; justify-content:space-between;`
   - ⑤ 햄버거: 공용 `.burger` 클래스 재사용 (30×24, `<i />` 막대 3개)
   - 가운데 로고 (원 36px `var(--p)` + `.pm-bar` 70px)
   - 오른쪽 돋보기 아이콘 30px
   - 핀 ⑤: 햄버거 위 `top:-24px`
   - 모바일 띠 오른쪽(띠 끝 + 32px, 세로 가운데)에 `.pm-note` 34px `--ink-soft`: `메뉴는 여기 접혀 있어요` (한 줄, 안 들어가면 생략)
- 전체 높이 목표: 약 **300px** (태그 2개 + 띠 120 + 100 + 간격)

### 4-5. `FooterMock` (06장, side)

- 크기: `.pm-site` **340 × 500**
- `.pm-win` 안:
  1. `.pm-top`
  2. **본문** `.pm-dim` (흐리게): 위 Header 자리 얇은 띠 40px `var(--paper-line)` / `.pm-ln.w80` / 2칸 카드(80px) / `.pm-ln` / `.pm-ln.w60` / `.pm-ln.w80`
  3. **Footer 구역** `.pm-zone` 높이 150px, 안쪽 `padding: 20px; display:flex; flex-direction:column; gap: 14px;`
     - 위: 3칸 그리드, 칸마다 `.pm-wbar` 3개 (사이트맵 링크 자리)
     - 아래: `.pm-wbar` 60% 1줄 + 오른쪽에 흰 원 20px ×3 (SNS 자리)
- 창 오른쪽 안쪽에 스크롤바: 너비 10px, 높이 = 창 높이 - 60, `var(--paper-line)` 트랙 + **맨 아래**에 붙은 thumb (높이 70px, `var(--sun-deep)`) → "끝까지 내려왔다"는 표시
- 창 위쪽 바깥 또는 본문 위에 `.pm-note` 32px `끝까지 내려오면…` (`--p-deep`), 아래쪽 Footer를 향한 손그림 화살표 1개

### 4-6. `FooterParts` (07장, wide)

`.pm-strip` **904 × 330** 하나. 바탕만 `.pm-strip.pm-warm::before { background: var(--paper-warm); }`로 바꿔서 "페이지 맨 아래" 느낌. 안쪽 `padding: 40px 40px 30px; display:flex; flex-direction:column; gap: 22px;`

- **윗줄** (`display:flex; gap: 40px;`)
  - ① 사이트맵 링크: 3칸 (각 120px 너비), 칸마다 `.pm-bar` 80px (칸 제목) + `.pm-ln` 3개 (너비 100% / 75% / 85%, 색 `var(--ink-faint)`), 세로 gap 14px
  - 빈칸 (flex:1)
  - ⑤ 뉴스레터 구독: 세로 묶음 → `.pm-bar` 120px / 그 아래 가로로 입력칸(200×44, 흰 바탕, 3px `--paper-line` 테두리, radius 12) + 버튼(80×44 pill `var(--p)`, 실제 글자 `구독` Pretendard 700 22px `--ink`)
- **구분선**: 4px dashed `var(--paper-line)` 전체 너비
- **아랫줄** (`display:flex; align-items:center; gap: 32px;`)
  - ② 회사 정보: `.pm-ln` 2줄 (300px, 240px, `var(--ink-faint)`), 세로 gap 12px
  - ③ 약관: 실제 글자 `이용약관 · 개인정보처리방침` (Pretendard 700, 22px, `--ink`; #01 Toast 목업 글자 크기와 같음)
  - 빈칸 (flex:1)
  - ④ SNS: 원 40px ×3, gap 14px (첫째 `var(--p)`, 둘째 `var(--sun)`, 셋째 흰 바탕 + 4px `--ink-faint` 테두리)
- 핀 ①~⑤: 각 묶음 왼쪽 위 모서리에 `top:-20px; left:-16px`

---

## 5. 장별 명세

> 표기: 문구 안 `HL("x")`는 `<span className="hl">x</span>`, `B("x")`는 `<b>x</b>`, `<br>`은 `<br />`로 써요. 줄바꿈 위치까지 확정이에요.
> 모든 카드는 `<Post name="…" pillar="ui" page="NN">`으로 감싸요.

### 01 · 커버 (`cards/Cover.jsx`, 지금 구현 유지 + 목록 한 줄 추가)

| 자리 | 값 |
|---|---|
| `h1.display.hf-cover-title` | `AI가 알아먹는<br>{HL("UI 용어집")} 2탄` (#01 `AI가 알아먹는<br /><span className="hl">UI 용어집</span> 1탄`과 같은 구조) |
| 부제 `div.hf-cover-sub` | Andy가 구현에서 바꾼 **"오늘의 내용" 목록**을 유지해요: `p.hand.hf-cover-agenda-label` `오늘의 내용` + `ul.hf-cover-agenda` 3줄 (아래) |
| (나머지) | blob, 점선 루트, X 표시, 별 2개, `card-head`(QuestTag + 나침반)는 #01 `Cover.jsx` 그대로 |

`ul.hf-cover-agenda` 항목 (위→아래, 끝의 `(?)`까지 그대로):
1. `맨 위에 로고랑 메뉴 버튼 있는 그 줄 (?)` (이미 있음)
2. `메뉴 밑에 홈 > 상의 > 니트 같은 줄 (?)` (**새로 추가**, Breadcrumb. `>`는 `{">"}`로)
3. `맨 밑에 회사 정보 적힌 데 (?)` (이미 있음, 3번째로 이동)

- 순서는 화면 위→아래(Header → Breadcrumb → Footer)이자 03~07장 순서예요
- 시리즈 규칙 "주제는 부제에": 이 목록이 이번 편 주제를 설명형으로 보여줘서 부제 역할을 해요. 이름은 일부러 안 쓰고 `(?)`로 궁금하게 둬요
- 크기는 지금 `cards.css` 값 그대로 (`.hf-cover-agenda li` 40px). 3줄 중 하나라도 2줄로 넘어가면 `li`만 36px로
- 03-UI 규칙대로 제목과 부제는 `.hf-cover-copy`로 묶어 세로 가운데에 둬요
- 형광펜: **"UI 용어집"** (#01과 같은 자리)
- 커버 규칙 (시리즈 확정 규칙, 2026-10-03): 제목은 시리즈 제목형 `AI가 알아먹는 UI 용어집 N탄`. 키커, 메모, "밀어서 …"는 넣지 않아요
- 완료 기준
  - 제목 2줄, 목록 3줄(각 1줄)
  - 목록이 점선 루트·X 표시와 겹치지 않음, y=1230 위

### 02 · 내 경험 (`cards/Chat.jsx`, 지금 구현을 시리즈 규칙에 맞게 고치기)

| 자리 | 값 |
|---|---|
| 목업 | AI 말풍선 안 `<div className="hf-chat-mini"><WrongNav /></div>` |
| 제목 (`h1.display.hf-chat-title`) | `이런 상황이 답답하시죠,,` (**지금 구현은 `이런적이 있었나요?` → 시리즈 규칙대로 되돌려요**) |
| 나 1 | `맨 위에 로고랑 메뉴 버튼 있는<br>그 줄 만들어줘` (Andy가 구현에서 줄인 문구 유지, 끝의 마침표는 빼요. 캡션 인용과 같은 문장) |
| AI 1 | `(엉뚱한 위치에<br>메뉴를 만들어 옴)` |
| 나 2 | `위에 쭉 붙어 있는 메뉴 줄이랑,<br>맨 밑에 늘 깔리는 정보 칸 말이야` |
| AI 2 | `(회사 정보를<br>팝업으로 띄워 옴)` / 목업: 공용 `<Mock kind="modal" />` (`<div className="hf-chat-mini"><Mock kind="modal" /></div>`) |
| 반복 | `이걸 여러 번 반복...` (**지금 구현에 빠져 있어요. 꼭 넣어요.** #01 `Chat.jsx`의 `chat-loop` 마크업(반복 화살표 SVG + 글자)과 #01 `cards.css`의 `.chat-loop` 규칙을 `hf-chat-loop`으로 복사) |
| 나 3 (마지막) | `아니 그게 아니라,,` |
| 결론 카드 | `{HL("Header, Footer")}라고 하면<br>바로 알아들어요` |

- 말풍선 글자는 #01 구현처럼 **따옴표 없이** 써요
- 말풍선 순서 (시리즈 확정 규칙): 나 1 → AI 1(`WrongNav`) → 나 2 → AI 2(`Mock kind="modal"`) → 반복 → 나 3 `아니 그게 아니라,,`
- 크기는 #01 값 그대로: 제목 72px / 말풍선 30px / AI 말풍선 28px / 원 56px / 미니 목업 `scale(.22)` / 반복 32px / 결론 카드 44px
- AI 쪽은 **실제 대사가 아니라 괄호 안 장면 설명**이에요
- 형광펜: **"Header, Footer"**
- **주석 없음 (시리즈 확정 규칙)**: "실제 겪은 일"/"예시 장면" 같은 주석 줄을 넣지 않아요
- 완료 기준
  - 나 1·나 2 말풍선 각 2줄, 오른쪽 "나" 원과 겹치지 않음
  - 반복 표시가 AI 2와 나 3 사이에 있음
  - 미니 목업 2개가 서로 다르게 보임 (1: 가운데 핑크 띠 + `?`, 2: 팝업 창)
  - 결론 카드가 y=1230 위에서 끝나고, 그 아래 주석 줄이 없음. 넘치면 `.hf-chat-thread` gap 10→6px

### 03 · 구역 ①: Header가 하는 일 (`cards/HeaderCard.jsx` → `SectionCard`, side)

> 2026-10-04: 예전 03장 `지도 펼치기`(Header · Footer 위치 한눈에)는 02장과 내용이 겹쳐서 **삭제**했어요. Header 장이 03으로 올라오고, 새 Breadcrumb 장이 05에 들어가요.

| prop | 값 |
|---|---|
| `page` | `"03"` |
| `layout` | `"side"` |
| `mock` | `<HeaderMock />` |
| `stage` | `구역 ①` |
| `term` | `Header` |
| `pron` | `[헤더]` |
| `mean` | `웹페이지 {B("맨 위")}에 늘 있는 구역이에요.` |
| `when` | `로고와 메뉴처럼, 어느 페이지에서든 보여야 할 것을 둘 때 써요.` |
| `items` | `{ n: "1", t: "어디서든 길 찾기", d: "로고를 누르면 홈으로,<br>메인 메뉴로 원하는<br>페이지에 바로 가요" }`, `{ n: "2", t: "자주 쓰는 행동", d: "검색, 로그인, 장바구니처럼<br>자주 누르는 버튼을<br>모아둬요" }` (`d`는 `<br />`이 들어간 JSX로) |
| `tipLabel` / `tip` / `fn` | (없음) |

- 단계 라벨은 짧게 `구역 ①`~`구역 ⑤`만 써요 (시리즈 규칙). 카드의 큰 제목은 `term`이에요
- 형광펜: 없음
- 일러스트: 4-3 `HeaderMock` (Header 띠 강조, 로고에 노란 점선 원 + `누르면 홈!`)
- 완료 기준
  - `when` 한 문장이 1줄 (넘치면 2줄까지 허용, 뜻보다 작고 연하게)
  - 항목 카드 2개가 오른쪽 칸(약 488px) 안에서 글자 넘침 없음
  - 목업과 항목 카드가 세로 가운데 정렬
  - 전체가 y=1230 위

### 04 · 구역 ②: Header 해부하기 (`cards/HeaderPartsCard.jsx` → `SectionCard`, wide)

| prop | 값 |
|---|---|
| `page` | `"04"` |
| `layout` | `"wide"` |
| `mock` | `<HeaderParts />` |
| `stage` | `구역 ②` |
| `term` | `Header 속 단골들` |
| `pron` / `mean` | (없음) |
| `when` | `자주 쓰는 기능을 맨 위에 모아 둘 때 이 부품들을 써요.` |
| `items` | 아래 범례 5개 |
| `tipLabel` | `＋ 응용` |
| `tip` | `<><b>Sticky Header</b><span className="hf-tip-desc">: 스크롤해도 맨 위에 붙어 따라오는 Header</span></>` |
| `fn` | (없음) |

범례 `items` (순서대로, 2칸 그리드라 왼쪽 ①③⑤ / 오른쪽 ②④로 흐름):

```js
[
  { n: "1", t: "로고", d: "누르면 홈으로" },
  { n: "2", t: "메뉴 (GNB)", d: "모든 페이지 공통 메인 메뉴" },
  { n: "3", t: "검색", d: "사이트 안에서 찾기" },
  { n: "4", t: "로그인 버튼", d: "내 계정으로 들어가기" },
  { n: "5", t: "햄버거 메뉴", d: "모바일에서 메뉴를 접어둔 버튼" },
]
```

- 형광펜: 없음 (`Sticky Header`는 `<b>`로만 강조, `.hf-tip-text b`는 `color: var(--p-deep)`)
- GNB 표기 정확성: GNB = **Global Navigation Bar**. 국내 웹 업계에서 주로 쓰는 말이라 08장 정리표(작은 글자)와 캡션에서 풀어 설명해요
- 일러스트: 4-4 `HeaderParts` (DESKTOP 띠에 ①~④, MOBILE 띠에 ⑤)
- 완료 기준
  - 핀 번호와 범례 번호가 정확히 일치 (①로고 ②GNB ③검색 ④로그인 ⑤햄버거)
  - 범례 5개가 2칸에 깔끔하게, 설명은 각각 1줄
  - 팁 카드가 y=1230 위에서 끝남. 넘치면 "넘칠 때" 규칙 2→3 순서로

### 05 · 구역 ③: Breadcrumb (`cards/BreadcrumbCard.jsx` → `SectionCard`, side) · 새 카드

| prop | 값 |
|---|---|
| `name` | `"Breadcrumb"` |
| `page` | `"05"` |
| `layout` | `"side"` |
| `mock` | `<BreadcrumbMock />` |
| `stage` | `구역 ③` |
| `term` | `Breadcrumb` |
| `pron` | `[브레드크럼]` |
| `mean` | `지금 페이지까지 온 {B("길")}을 보여주는 줄이에요.` |
| `when` | `쇼핑몰처럼 메뉴가 여러 단계로 깊어질 때 써요.` |
| `items` / `tipLabel` / `tip` / `fn` | (없음) |
| `before` | `"메뉴 밑에 지금 어디 있는지 작게 쭉 나오는 거 있잖아"` |
| `after` | `"Header 아래에 '홈 > 상의 > 니트' {B("Breadcrumb")}을 넣고, 누르면 그 페이지로 가게 해줘"` |

- **이 편에서 "잘못된 설명 / 용어를 알고 난 후" 박스가 있는 장은 05장뿐이에요.** Breadcrumb은 구역이 아니라 하나의 UI 용어라서 #01 `TermCard`와 같은 틀(뜻 → 언제 쓰는지 → 목업 + before/after)로 만들어요. `SectionCard`에 `before`/`after` props를 추가해서 그려요 (3-1)
- before/after 글자는 #01처럼 줄바꿈 없이 칸 너비에 맞춰 자연스럽게 줄바꿈돼요
- **JSX 주의**: 글자 안의 `>`는 JSX에서 그대로 쓰면 빌드 에러가 나요. `{"'홈 > 상의 > 니트'"}`처럼 중괄호 문자열로 넣어요 (목업 글자도 같음)
- 단계 라벨: Breadcrumb은 엄밀히는 구역이 아니지만, 이 편 라벨은 `구역 ①`~`⑤`로 통일해요 (`Header 속 단골들`과 같은 방식)
- 형광펜: 없음 (`after` 안 `Breadcrumb`은 `<b>`, `.hf-after b { color: var(--p-deep); }` = #01 `.term-after b`)
- 일러스트: 4-2 `BreadcrumbMock` (Header 바로 밑 `홈 > 상의 > 니트` 줄만 핑크로 강조)
- 완료 기준
  - `mean`, `when`이 각각 1줄
  - 오른쪽 칸(약 488px) 안의 before/after 박스에서 글자 넘침 없음, 사이에 아래 화살표
  - 목업에서 `홈 > 상의 > 니트` 글자가 한 줄로 또렷하게 읽힘
  - 03장(Header), 06장(Footer)과 같은 side 레이아웃 위치
  - 전체가 y=1230 위. 넘치면 목업 칸 높이 540 → 480px

### 06 · 구역 ④: Footer가 하는 일 (`cards/FooterCard.jsx` → `SectionCard`, side)

| prop | 값 |
|---|---|
| `page` | `"06"` |
| `layout` | `"side"` |
| `mock` | `<FooterMock />` |
| `stage` | `구역 ④` |
| `term` | `Footer` |
| `pron` | `[푸터]` |
| `mean` | `웹페이지 {B("맨 아래")}에 늘 있는 구역이에요.` |
| `when` | `회사 정보처럼, 모든 페이지 맨 밑에 꼭 남길 내용을 둘 때 써요.` |
| `items` | `{ n: "1", t: "다음 길 안내", d: "끝까지 내려온 사람에게<br>다른 페이지로 가는<br>길을 보여줘요" }`, `{ n: "2", t: "믿음 주기", d: "회사 정보, 약관, 연락처로<br>믿을 만한 곳인지<br>알려줘요" }` |
| `tipLabel` / `tip` / `fn` | (없음) |

- 형광펜: 없음
- 일러스트: 4-5 `FooterMock` (본문 흐리게, 맨 아래 Footer 띠 강조, 스크롤바 thumb가 맨 아래, `끝까지 내려오면…`)
- 완료 기준: 03장과 같은 기준 + 03장과 나란히 놓았을 때 레이아웃이 같은 위치 (짝 장)

### 07 · 구역 ⑤: Footer 해부하기 (`cards/FooterPartsCard.jsx` → `SectionCard`, wide)

| prop | 값 |
|---|---|
| `page` | `"07"` |
| `layout` | `"wide"` |
| `mock` | `<FooterParts />` |
| `stage` | `구역 ⑤` |
| `term` | `Footer 속 단골들` |
| `pron` / `mean` | (없음) |
| `when` | `회사·서비스 정보를 한곳에 모아 보여줄 때 써요.` |
| `items` | 아래 범례 5개 |
| `tipLabel` / `tip` | (없음) |
| `fn` | `* 다 넣을 필요는 없어요. 사이트에 필요한 것만 골라 써요.` |

```js
[
  { n: "1", t: "사이트맵 링크", d: "주요 페이지 링크 모음" },
  { n: "2", t: "회사 정보", d: "상호, 주소, 연락처 등" },
  { n: "3", t: "이용약관·개인정보처리방침", d: "서비스 규칙과 개인정보 안내" },
  { n: "4", t: "SNS 아이콘", d: "공식 계정으로 가는 링크" },
  { n: "5", t: "뉴스레터 구독", d: "이메일로 소식 받기 신청" },
]
```

- ③ 이름이 길어서 칸을 넘치면 `이용약관·<br />개인정보처리방침`으로 2줄 허용 (이 항목만)
- 형광펜: 없음
- 일러스트: 4-6 `FooterParts`
- 완료 기준
  - 핀 번호 ↔ 범례 번호 일치 (①사이트맵 ②회사 정보 ③약관 ④SNS ⑤뉴스레터)
  - 04장과 같은 구도로 보임 (짝 장)
  - 주석이 y=1230 위

### 08 · 한 눈에 정리 (`cards/Summary.jsx`, #01 `Compare.jsx` 구조)

| 자리 | 값 |
|---|---|
| stage | `한 눈에 정리` |
| title | `헷갈릴 땐 {HL("이 표")} 하나` (#01과 같은 문구) |
| 메모 | `저장 필수!` (#01과 같음) |
| 머리줄 | `이름` / `기능` |

행 (위에서부터 순서대로, `Row` 5개):

| `name` | `ko` (작은 글자) | `job` |
|---|---|---|
| `Header` | `헤더` | `웹페이지 맨 위에 늘 있는 구역이에요.` |
| `GNB` | `메인 메뉴` | `모든 페이지에 똑같이 들어가는 메인 메뉴예요.` |
| `Sticky Header` | `스티키 헤더` | `스크롤해도 맨 위에 붙어 따라오는 Header예요.` |
| `Breadcrumb` | `브레드크럼` | `지금 페이지까지 온 길을 보여주는 줄이에요.` |
| `Footer` | `푸터` | `웹페이지 맨 아래에 늘 있는 구역이에요.` |

- 행 순서는 09장 칩(`Header`, `Footer`, `GNB`, `Sticky Header`, `Breadcrumb`)과 같은 5개를 화면 위→아래(Header 쪽 → Breadcrumb → Footer) 순으로 둔 것
- **`햄버거 메뉴` 행은 빼요** (2026-10-04). 엔딩 스탬프가 `오늘 배운 단어 5개`라 5개를 유지하고, 햄버거 메뉴는 1탄 Drawer 카드에서 이미 다뤘어요. 04장 범례 ⑤에는 그대로 남아요
- 표 아래 주석 없음. `GNB`의 풀이(Global Navigation Bar, main navigation)는 캡션에서 설명해요
- 형광펜: **"이 표"**
- 예전 08장(before/after 두 쌍)의 프롬프트 예시는 카드에서 빠지고 **캡션 "이렇게 말해보세요" 부분으로 옮겼어요** (7장)
- 완료 기준
  - 5행이 표 카드 안에 들어가고 y=1230 위에서 끝남 (넘치면 `min-height`를 128→112px)
  - 기능 칸은 각 1줄, 넘치면 2줄까지
  - `Sticky Header`, `Hamburger Menu`가 이름 칸(280px)에서 잘리지 않음

### 09 · 엔딩: 오늘의 정리 (`cards/Ending.jsx`, #01 `Ending.jsx` 구조를 복사해 "공부 노트" 스타일로)

시리즈 확정 규칙(2026-10-03): 엔딩은 **모험·퀘스트 표현 없이 공부 노트처럼** 만들어요. `QUEST #`, `퀘스트 완료`, `NEXT QUEST`, `탐험`, 깃발·점선 루트·지도 같은 표현과 장식은 쓰지 않아요. 번호 상수(`QUEST_NO`, `NEXT_NO`)도 만들지 않아요.

```jsx
const LOOT = ["Header", "Footer", "GNB", "Sticky Header", "Breadcrumb"];
```

| 자리 (#01 클래스 → 이 편) | 값 |
|---|---|
| 스탬프 (`ending-stamp` → `hf-ending-stamp`) | `오늘 배운<br />단어 5개` (번호 없음). 노란 원 2겹 SVG·-8° 회전·230px는 #01 그대로. 글자는 Jua 36px `var(--sun-deep)` 가운데 정렬 2줄 (#01의 Mono `<small>` 줄은 없앰) |
| 제목 (`ending-clear h1` → `hf-ending-title`) | `오늘의 정리` (Jua 112px, 한 줄) |
| sub (`ending-sub`) | `저장해두고<br>AI한테 써먹어보세요` (그대로) |
| 칩 제목 (`ending-loot h3`) | `✦ 이제 이렇게 말해요` |
| 칩 | `LOOT` 5개를 `<li><span className="chip">…</span></li>`로 |
| 다음 편 라벨 (`ending-label`) | `다음 편` (Mono 800 26px 대신 한글이라 Gaegu 700 34px `var(--p-deep)`로) |
| 다음 편 제목 (`ending-title`, 구현 클래스 `hf-ending-next-title`) | `입력하는 UI 편` |
| 다음 편 설명 (`ending-desc`) | `Dropdown, Toggle, Checkbox처럼<br>고르고 입력하는 UI` (2줄) |
| CTA (`ending-cta`) | `<span className="chip">🔖 저장하고 써먹기</span><span className="chip alt">👀 팔로우하고 다음 편 보기</span>` |
| 장식 메모 (`ending-flagnote` → `hf-ending-note`) | `다음 편에서 만나요!` (`layer hand`, 36px `--p-deep`, 5° 회전, 위치는 #01 깃발 메모 자리) |

**장식 교체 (지도·깃발·점선 루트 → 노트·체크 낙서)**
- #01의 `ending-route`(점선 루트 SVG)와 `ending-flag`(깃발 아이콘)는 **넣지 않아요**
- 대신 #01 깃발 자리(`right: 92px; bottom: 210px; 약 120×120`)에 **노트 + 체크 표시 낙서**를 인라인 SVG로 그려요 (`src/ui/Icon.jsx`에는 노트/체크 아이콘이 없고 공용 파일이라 추가하지 않음)
  - 노트: 살짝 기운(-6°) 둥근 사각형 종이 (`fill="var(--white)"`, `stroke="var(--p-deep)"` 6px) + 왼쪽에 스프링 고리 3~4개(작은 원) + 안쪽 가로줄 3개 (`stroke="var(--paper-line)"` 또는 `--ink-faint`)
  - 체크: 노트 위에 걸치는 굵은 체크 `✓` 한 획 (`stroke="var(--sun-deep)"` 9px, `strokeLinecap="round"`)
  - 크레파스 질감은 **장식에만**: 선에는 `filter="url(#wax-stroke)"`, 면에는 `filter="url(#wax)"`. 메모 글자 `다음 편에서 만나요!`에는 필터 금지
- 선택(넘치지 않으면): 칩 제목 `✦ 이제 이렇게 말해요` 왼쪽이나 칩 묶음 오른쪽 끝에 작은 체크 낙서 1개 더 (한 장 장식 3~4개 이하 규칙 지키기)
- 다음 편 카드 오른쪽 위 열쇠 아이콘(`ending-lock`) 대신 **연필 낙서**를 같은 자리(`right: 40px; top: 36px; 84×84`)에 그려요 (Andy 확정): 인라인 SVG로 비스듬한(약 -35°) 연필 한 자루 — 몸통 긴 사각형(`fill="var(--sun)"`, `filter="url(#wax)"`) + 끝 삼각형 심(`stroke="var(--ink)"`) + 반대쪽 지우개(`fill="var(--p)"`), 외곽선 `stroke="var(--p-deep)"` 5px `filter="url(#wax-stroke)"`. `class="hf-ending-pencil"`

- 클래스: #01 `ending-*` 블록을 복사해서 `hf-ending-*`로 (route/flag/lock 규칙은 복사하지 않음)
- 완료 기준
  - 화면 어디에도 `QUEST`, `퀘스트`, `탐험`, `NEXT` 글자가 없음
  - 스탬프 글자 2줄이 노란 원 안에 들어감
  - 칩 5개가 2줄 안에 들어감
  - 다음 편 카드 설명 2줄, 오른쪽 위 연필 낙서와 겹치지 않음
  - 저장·팔로우 칩이 노트 낙서·메모와 겹치지 않음

---

## 6. 마무리 체크리스트

- [ ] `npm run dev` → `?post=ui-talk-02-header-footer`에서 9장이 순서대로 보임
- [ ] `POST=ui-talk-02-header-footer npm run export`로 9장 모두 1080×1350 PNG, `posts/ui-talk-02-header-footer/still-cuts/01.png`~`09.png`
- [ ] 모든 장에 계정명(`Post.jsx`가 자동으로 넣음), `NN / 09` (`<Post page>` 확인, 03~07 페이지 번호가 새 순서와 맞는지)
- [ ] 9장 어디에도 `QUEST #` 번호·진행 루트·퀘스트/탐험 문구가 없음 (03-UI + 시리즈 규칙)
- [ ] 01장 커버가 `AI가 알아먹는 UI 용어집 2탄`, #01 커버와 같은 배치
- [ ] 02장 제목 `이런 상황이 답답하시죠,,`, 나→AI 두 번 + 반복 표시 + `아니 그게 아니라,,`, 첫 말이 캡션 인용과 같은 문장
- [ ] 02장 아래 주석 줄(실제/예시 장면) 없음
- [ ] 03~07장 단계 라벨이 `구역 ①`~`구역 ⑤`(03 Header · 04 Header 해부 · 05 Breadcrumb · 06 Footer · 07 Footer 해부), 모두 `when` 한 문장이 있음
- [ ] 05장 Breadcrumb에 `잘못된 설명` / `용어를 알고 난 후` 박스, 목업 `홈 > 상의 > 니트`가 읽힘. `PageMapCard`·`PageMap`이 남아 있지 않음
- [ ] 08장이 "이름 | 기능" 정리표 5행(Header · GNB · Sticky Header · Breadcrumb · Footer), 표 아래 주석 없음
- [ ] 09장 칩 5개에 Breadcrumb, 다음 편 `입력하는 UI 편`
- [ ] 카드 글자에 퀘스트·주문·탐험·모험·지점·보물 표현이 없음 (말투 규칙)
- [ ] 09장 공부 노트 스타일 (깃발·루트·열쇠 없음, 노트·체크 낙서 + 연필 낙서)
- [ ] 형광펜은 01 "UI 용어집", 02 "Header, Footer", 08 "이 표" 3곳뿐
- [ ] 04·07 핀 번호와 범례 일치
- [ ] 새 클래스가 모두 `hf-` / `pm-` 접두사 (#01 클래스와 충돌 없음)
- [ ] 공용 파일(`src/styles/*`, `src/ui/*`)과 `src/posts/ui-talk-01/**`에 변경 없음. 바뀐 기존 파일은 `App.jsx`, `main.jsx`, `scripts/export.mjs` 세 개뿐
- [ ] #01 회귀 확인: `?post` 없이 `npm run dev`를 열면 #01 9장이 예전과 같고, `npm run export -- 03 05`(POST 없이)가 `posts/ui-talk-01/still-cuts/`에 예전과 같은 03·05를 만듦 (이 편 CSS가 #01에 영향 없는지)
- [ ] `caption.md`를 아래 초안으로 교체

---

## 7. caption.md 초안

```
# AI가 알아먹는 UI 용어집 2탄: Header · Footer 캡션

맨 위에 로고랑 메뉴 있는 그 줄, 이름이 뭐더라? 🤔

"맨 위에 로고랑 메뉴 버튼 있는 그 줄 만들어줘"
이렇게 설명하면 AI가 메뉴를 엉뚱한 데 만들어 오기도 해요.
"Header", "Footer" 두 단어면 바로 알아듣는데 말이에요.

이번 편은 UI 하나가 아니라 페이지의 '구역'을 정리했어요 📒
웹페이지의 머리와 발, 그리고 메뉴 밑에서 길을 알려주는 Breadcrumb까지 공부한 걸 나눠요.

🧢 Header (헤더): 맨 위 구역. 어디서든 길을 찾게 해주고, 검색·로그인·장바구니처럼 자주 쓰는 버튼을 모아둬요
└ 로고 · 메뉴(GNB) · 검색 · 로그인 버튼 · 모바일 햄버거 메뉴
└ 스크롤해도 맨 위에 붙어 따라오면 Sticky Header
📍 Breadcrumb (브레드크럼): Header 아래에서 지금 페이지까지 온 길을 보여주는 줄. 홈 > 상의 > 니트처럼 생겼어요
👟 Footer (푸터): 맨 아래 구역. 끝까지 내려온 사람에게 다음 길을 알려주고, 회사 정보로 믿음을 줘요
└ 사이트맵 링크 · 회사 정보 · 이용약관·개인정보처리방침 · SNS 아이콘 · 뉴스레터 구독

✏️ 이렇게 말해보세요
잘못된 설명: "맨 위에 로고랑 메뉴 있는 줄 만들어줘"
용어를 알고 난 후: "로고, GNB, 검색, 로그인 버튼이 있는 Sticky Header를 만들어줘"
잘못된 설명: "메뉴 밑에 지금 어디 있는지 작게 쭉 나오는 거 있잖아"
용어를 알고 난 후: "Header 아래에 '홈 > 상의 > 니트' Breadcrumb을 넣고, 누르면 그 페이지로 가게 해줘"
잘못된 설명: "맨 밑에 회사 정보랑 약관 같은 거 적힌 데도 만들어줘"
용어를 알고 난 후: "사이트맵 링크, 회사 정보, 이용약관·개인정보처리방침, SNS 아이콘이 들어간 Footer를 만들어줘"

📝 GNB는 Global Navigation Bar의 줄임말로, 모든 페이지에 공통으로 들어가는 메인 메뉴를 말해요.
국내 웹 업계에서 주로 쓰는 말이라 AI한테는 "main navigation"을 같이 적어주면 더 확실해요.

8번째 장 정리표는 헷갈릴 때 꺼내 보기 좋아요.

🔖 저장해두고 다음에 AI한테 써먹어보세요
👀 다음 편은 "입력하는 UI"예요 (Dropdown, Toggle, Checkbox 등). 팔로우하고 다음 편도 같이 봐요!
💬 이름 몰라서 설명만 길어졌던 화면 있으면 댓글로 알려주세요. 다음 편에 넣어볼게요

.
#UI용어 #UIUX #UI디자인 #웹디자인 #웹개발 #프론트엔드 #웹퍼블리싱 #개발자 #개발공부 #코딩공부 #AI코딩 #바이브코딩 #프롬프트 #프롬프트엔지니어링 #ChatGPT #Claude #디자인용어 #헤더 #푸터 #브레드크럼
```

---

## 8. 열려 있는 결정 (Andy 확인 필요)

- 지금 꼭 정해야 하는 결정은 없어요. 아래는 이번 수정(2026-10-04)에서 판단한 것들이라, 다르게 하고 싶으면 알려주세요.
  - **정리표·칩에서 `햄버거 메뉴`를 빼고 `Breadcrumb`을 넣었어요.** 엔딩 스탬프가 시리즈 규칙상 `오늘 배운 단어 5개`라 5개를 유지해야 하고, 햄버거 메뉴는 1탄 Drawer 카드에서 이미 다뤘어요(04장 범례 ⑤에는 그대로 남아요).
  - **Breadcrumb 장 단계 라벨도 `구역 ③`이에요.** Breadcrumb은 엄밀히는 구역이 아니라 Header 밑에 붙는 요소지만, 시리즈 규칙("구역 편은 `구역 ①`~`구역 ⑤`")과 `Header 속 단골들` 장처럼 라벨을 통일했어요.
  - **커버 부제는 Andy가 구현에서 바꾼 "오늘의 내용" 목록을 유지**하고 Breadcrumb 줄만 추가했어요. 주제를 설명형으로 보여줘서 "부제에 주제" 규칙을 지킨다고 봤어요.
  - **채팅 제목·반복 표시는 시리즈 규칙대로 되돌려요.** 지금 구현은 제목이 `이런적이 있었나요?`이고 반복 표시가 빠져 있는데, `04-series-rules.md` 2장이 제목 `이런 상황이 답답하시죠,,`와 반복 표시를 정해 두고 있어요. 첫 말은 Andy가 줄인 문구를 유지했어요.

### React 구조로 옮기면서 빠진 것 (기록용)

| 옛 브리프 항목 | 이번 처리 |
|---|---|
| 본문 카드 배지 옆 `QUEST #??` | 없음 (03-UI: `qno` 넣지 않음, `.quest-tag` 숨김) |
| 03~08장 오른쪽 위 진행 루트 | 없음 (03-UI: 진행 점 넣지 않음) |
| 01장 키커·보물 메모·"밀어서 퀘스트 시작 →" | 없음 (시리즈 규칙: 커버는 제목형 + 부제) |
| 02장 단계 라벨 `출발 전, 내 이야기` | 없음 (#01 React Chat은 제목 줄이 주인공) |
| 02장 실제/예시 장면 주석 | 없음 (시리즈 규칙) |
| 08장 before/after 두 쌍 (`Say`) | 정리표로 교체, 프롬프트 예시는 캡션으로 |
| `design-system.md` 12장 표에 새 템플릿 추가 | 해당 없음 (HTML 템플릿을 만들지 않음) |
| `render.sh`, `build.py` | 쓰지 않음 (`npm run export`) |
