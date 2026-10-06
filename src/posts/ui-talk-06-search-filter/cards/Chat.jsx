import { Post } from "../../../ui/Post.jsx";
import { QuestTag } from "../../../ui/QuestTag.jsx";
import { Icon } from "../../../ui/Icon.jsx";
import { PickListMock, SortMock } from "../mocks.jsx";

export function Chat() {
  return (
    <Post name="Chat" pillar="ui" page="02">
      <div className="sf-post-head">
        <h1 className="display sf-chat-title"><span>이런 상황이 답답하시죠,,</span></h1>
        <div className="card-head">
          <QuestTag series="talk" showType={false} />
          <div className="sf-chat-pin"><Icon name="map" color="var(--ink-soft)" stroke={5} /></div>
        </div>
      </div>

      <div className="sf-chat-thread">
        <div className="sf-chat-msg sf-chat-me">
          <div className="sf-chat-bub">위에 검색어 넣는 칸<br />하나 만들어줘</div>
          <div className="sf-chat-who">나</div>
        </div>
        <div className="sf-chat-msg sf-chat-ai">
          <div className="sf-chat-who">AI</div>
          <div className="sf-chat-bub">
            <div className="sf-chat-mini"><PickListMock /></div>
            <span>(누르면 펼쳐지는<br />목록을 만들어 옴)</span>
          </div>
        </div>
        <div className="sf-chat-msg sf-chat-me">
          <div className="sf-chat-bub">가격대랑 색상으로<br />맞는 것만 남기게 해줘</div>
          <div className="sf-chat-who">나</div>
        </div>
        <div className="sf-chat-msg sf-chat-ai">
          <div className="sf-chat-who">AI</div>
          <div className="sf-chat-bub">
            <div className="sf-chat-mini"><SortMock /></div>
            <span>(최신순으로 줄만<br />바꿔 옴)</span>
          </div>
        </div>
        <div className="sf-chat-loop">
          <svg viewBox="0 0 100 100" fill="none" stroke="var(--p-deep)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" filter="url(#wax-stroke)">
            <path d="M78 40a30 30 0 1 0 4 22" />
            <path d="M84 22l-4 20-20-4" />
          </svg>
          <span>이걸 여러 번 반복...</span>
        </div>
        <div className="sf-chat-msg sf-chat-me">
          <div className="sf-chat-bub">아니 그게 아니라,,</div>
          <div className="sf-chat-who">나</div>
        </div>
      </div>

      <div className="card sf-chat-punch">
        <div className="sf-chat-punch-text"><span className="hl">Search Bar, Filter</span>라고<br />한 마디면 끝났을 일</div>
      </div>
    </Post>
  );
}
