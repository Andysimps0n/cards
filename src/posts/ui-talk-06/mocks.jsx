/* 검색하고 거르는 UI 목업. 공용 Phone은 export가 없어서 여기서 .phone/.scr/.notch만 씁니다. */

function PhoneFrame({ children }) {
  return (
    <div className="phone">
      <div className="scr">
        <div className="sm-screen">{children}</div>
      </div>
      <div className="notch" />
    </div>
  );
}

function Mag() {
  return <span className="sm-mag" aria-hidden="true" />;
}

function ProductRow({ fade = false }) {
  return (
    <div className={fade ? "sm-item sm-fade" : "sm-item"}>
      <span className="sm-thumb" />
      <span className="sm-ln" />
    </div>
  );
}

export function SearchBarMock() {
  return (
    <PhoneFrame>
      <span className="sm-ttl" />
      <span className="sm-ln sm-w80" />
      <div className="sm-search-hit">
        <div className="sm-search">
          <Mag />
          <span className="sm-ln sm-w70" />
        </div>
        <span className="ping sm-search-ping" />
      </div>
      <ProductRow />
      <ProductRow />
      <ProductRow />
    </PhoneFrame>
  );
}

export function FilterMock() {
  return (
    <PhoneFrame>
      <span className="sm-ttl" />
      <span className="sm-txt sm-txt-22">색상</span>
      <div className="sm-choice sm-choice-on">
        <span className="sm-check sm-check-on">✓</span>
        <span className="sm-txt">블랙</span>
      </div>
      <div className="sm-choice">
        <span className="sm-check" />
        <span className="sm-ln sm-w70" />
      </div>
      <div className="sm-choice">
        <span className="sm-check" />
        <span className="sm-ln sm-w60" />
      </div>
      <ProductRow />
      <ProductRow />
      <ProductRow fade />
      <ProductRow fade />
    </PhoneFrame>
  );
}

export function SortMock() {
  return (
    <PhoneFrame>
      <span className="sm-ttl" />
      <div className="sm-select">
        <span className="sm-txt">최신순</span>
        <span className="sm-caret">▼</span>
      </div>
      <ProductRow />
      <ProductRow />
      <ProductRow />
      <ProductRow />
    </PhoneFrame>
  );
}

export function ChipMock() {
  return (
    <PhoneFrame>
      <span className="sm-ttl" />
      <span className="sm-ln sm-w70" />
      <div className="sm-chip-hit">
        <div className="sm-chips">
          <span className="sm-tag">블랙<span className="sm-tag-x">×</span></span>
          <span className="sm-tag">3만원대<span className="sm-tag-x">×</span></span>
        </div>
        <span className="ping sm-chip-ping" />
      </div>
      <ProductRow />
      <ProductRow />
    </PhoneFrame>
  );
}

export function AutocompleteMock() {
  return (
    <PhoneFrame>
      <span className="sm-ttl" />
      <div className="sm-search">
        <Mag />
        <span className="sm-txt">블</span>
      </div>
      <div className="sm-suggest">
        <div className="sm-opt sm-opt-on"><span className="sm-txt">블랙 원피스</span></div>
        <div className="sm-opt"><span className="sm-ln sm-w70" /></div>
        <div className="sm-opt"><span className="sm-ln sm-w60" /></div>
      </div>
      <span className="sm-ln sm-fade" />
    </PhoneFrame>
  );
}

export function PickListMock() {
  return (
    <PhoneFrame>
      <span className="sm-ttl" />
      <span className="sm-ln sm-w80" />
      <div className="sm-select">
        <span className="sm-txt">전체</span>
        <span className="sm-caret">▼</span>
      </div>
      <div className="sm-suggest">
        <div className="sm-opt"><span className="sm-ln sm-w70" /></div>
        <div className="sm-opt sm-opt-on">
          <span className="sm-ln sm-w60" />
          <span className="sm-txt">✓</span>
        </div>
        <div className="sm-opt"><span className="sm-ln sm-w75" /></div>
        <div className="sm-opt"><span className="sm-ln sm-w50" /></div>
      </div>
    </PhoneFrame>
  );
}
