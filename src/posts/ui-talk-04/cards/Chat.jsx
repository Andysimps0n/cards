import { Post } from "../../../ui/Post.jsx";
import { QuestTag } from "../../../ui/QuestTag.jsx";
import { Icon } from "../../../ui/Icon.jsx";
import { AccordionMock, PaginationMock } from "../mocks.jsx";

export function Chat() {
  return (
    <Post name="Chat" pillar="ui" page="02">
      <div className="sx-post-head">
        <h1 className="display sx-chat-title"><span>이런 상황이 답답하시죠,,</span></h1>
        <div className="card-head">
          <QuestTag series="talk" showType={false} />
          <div className="sx-chat-pin"><Icon name="map" color="var(--ink-soft)" stroke={5} /></div>
        </div>
      </div>

      <div className="sx-chat-thread">
        <div className="sx-chat-msg sx-chat-me">
          <div className="sx-chat-bub">같은 자리에서 내용만<br />바꿔 보는 칸 만들어줘</div>
          <div className="sx-chat-who">나</div>
        </div>
        <div className="sx-chat-msg sx-chat-ai">
          <div className="sx-chat-who">AI</div>
          <div className="sx-chat-bub">
            <div className="sx-chat-mini"><AccordionMock /></div>
            <span>(아래로 줄줄이<br />펼쳐지는 목록을 만들어 옴)</span>
          </div>
        </div>
        <div className="sx-chat-msg sx-chat-me">
          <div className="sx-chat-bub">배너는 옆으로 넘겨<br />보게 해줘</div>
          <div className="sx-chat-who">나</div>
        </div>
        <div className="sx-chat-msg sx-chat-ai">
          <div className="sx-chat-who">AI</div>
          <div className="sx-chat-bub">
            <div className="sx-chat-mini"><PaginationMock /></div>
            <span>(아래쪽에 페이지 번호만<br />잔뜩 붙여 옴)</span>
          </div>
        </div>
        <div className="sx-chat-msg sx-chat-me">
          <div className="sx-chat-bub">아니 그게 아니라,,</div>
          <div className="sx-chat-who">나</div>
        </div>
      </div>

      <div className="card sx-chat-punch">
        <div className="sx-chat-punch-text"><span className="hl">Tab, Carousel</span>이라고<br />한 마디면 끝났을 일</div>
      </div>
    </Post>
  );
}
