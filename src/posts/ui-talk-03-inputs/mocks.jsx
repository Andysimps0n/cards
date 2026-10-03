/* 입력 UI 목업 5개. 공용 Phone은 export가 없어서 여기서 .phone/.scr/.notch만 씁니다. */

function PhoneFrame({ children }) {
  return (
    <div className="phone">
      <div className="scr">
        <div className="im-screen">{children}</div>
      </div>
      <div className="notch" />
    </div>
  );
}

function Cursor({ style }) {
  return (
    <svg className="cursor" style={style} viewBox="0 0 44 54">
      <path
        d="M4 3 L4 42 L14 33 L21 50 L28 47 L21 30 L35 30 Z"
        fill="var(--white)"
        stroke="var(--ink)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DropdownMock() {
  return (
    <PhoneFrame>
      <span className="im-ttl" />
      <span className="im-ln im-w80" />
      <span className="im-ln im-w90" />
      <div className="im-select-wrap">
        <div className="im-select">
          <span className="im-txt">서울</span>
          <span className="im-caret">▼</span>
        </div>
        <Cursor style={{ right: -8, top: 16 }} />
      </div>
      <div className="im-list">
        <div className="im-opt"><span className="im-ln im-w70" /></div>
        <div className="im-opt im-opt-on">
          <span className="im-ln im-w60" />
          <span className="im-txt">✓</span>
        </div>
        <div className="im-opt"><span className="im-ln im-w75" /></div>
        <div className="im-opt"><span className="im-ln im-w50" /></div>
      </div>
      <span className="im-ln im-fade" />
      <span className="im-ln im-w80 im-fade" />
    </PhoneFrame>
  );
}

export function ToggleMock() {
  return (
    <PhoneFrame>
      <span className="im-ttl" />
      <div className="im-set">
        <div className="im-set-row">
          <span className="im-txt">알림</span>
          <div className="im-toggle-hit">
            <div className="im-toggle im-toggle-on">
              <span className="im-knob" />
            </div>
            <span className="ping im-toggle-ping" />
          </div>
        </div>
        <div className="im-set-row">
          <span className="im-txt">다크 모드</span>
          <div className="im-toggle">
            <span className="im-knob" />
          </div>
        </div>
        <div className="im-set-row">
          <span className="im-ln im-w90" />
          <div className="im-toggle">
            <span className="im-knob" />
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

function CheckRow({ on }) {
  return (
    <div className="im-choice">
      <span className={on ? "im-check im-check-on" : "im-check"}>{on ? "✓" : ""}</span>
      <span className="im-ln" />
    </div>
  );
}

export function CheckboxMock() {
  return (
    <PhoneFrame>
      <span className="im-ttl" />
      <span className="im-txt im-txt-22">관심 분야</span>
      <CheckRow on />
      <CheckRow />
      <CheckRow on />
      <CheckRow />
      <div className="im-save">저장</div>
    </PhoneFrame>
  );
}

function RadioRow({ on }) {
  return (
    <div className={on ? "im-choice im-choice-radio im-radio-on" : "im-choice im-choice-radio"}>
      <span className={on ? "im-radio im-radio-sel" : "im-radio"} />
      <span className="im-ln" />
    </div>
  );
}

export function RadioMock() {
  return (
    <PhoneFrame>
      <span className="im-ttl" />
      <span className="im-txt im-txt-22">배송 방법</span>
      <RadioRow />
      <RadioRow on />
      <RadioRow />
      <div className="im-btnbar" />
    </PhoneFrame>
  );
}

/* 2026년 10월 1일은 목요일. 일~토 달력이면 앞에 빈칸 4개, 17일은 셋째 줄 토요일. */
const OCT_2026_CELLS = 35;
const OCT_2026_PAD = 4;
const OCT_2026_DAYS = 31;
const PICKED_DAY = 17;

export function DatePickerMock() {
  const cells = [];
  for (let i = 0; i < OCT_2026_CELLS; i += 1) {
    const day = i - OCT_2026_PAD + 1;
    const inMonth = day >= 1 && day <= OCT_2026_DAYS;
    if (day === PICKED_DAY) {
      cells.push(
        <span className="im-day im-day-on" key={i}>{PICKED_DAY}</span>,
      );
    } else {
      cells.push(
        <span className="im-day" key={i}>
          {inMonth ? <i /> : null}
        </span>,
      );
    }
  }

  return (
    <PhoneFrame>
      <span className="im-ttl" />
      <div className="im-select">
        <span className="im-txt">2026. 10. 17</span>
        <span className="im-cal-ico" aria-hidden="true" />
      </div>
      <div className="im-cal">
        <div className="im-cal-head">
          <span>‹</span>
          <span className="im-txt im-txt-22">2026년 10월</span>
          <span>›</span>
        </div>
        <div className="im-cal-grid">{cells}</div>
      </div>
      <span className="im-ln im-fade" />
    </PhoneFrame>
  );
}
