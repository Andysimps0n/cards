import { Post } from "../../../ui/Post.jsx";
import { QuestTag } from "../../../ui/QuestTag.jsx";
import { Icon } from "../../../ui/Icon.jsx";
import { RadioMock, CheckboxMock } from "../mocks.jsx";

export function Chat() {
  return (
    <Post name="Chat" pillar="ui" page="02">
      <div className="in-post-head">
        <h1 className="display in-chat-title"><span>이런 상황이 답답하시죠,,</span></h1>
        <div className="card-head">
          <QuestTag series="talk" showType={false} />
          <div className="in-chat-pin"><Icon name="map" color="var(--ink-soft)" stroke={5} /></div>
        </div>
      </div>

      <div className="in-chat-thread">
        <div className="in-chat-msg in-chat-me">
          <div className="in-chat-bub">누르면 밑으로 목록 나오는<br />박스 하나 만들어줘</div>
          <div className="in-chat-who">나</div>
        </div>
        <div className="in-chat-msg in-chat-ai">
          <div className="in-chat-who">AI</div>
          <div className="in-chat-bub">
            <div className="in-chat-mini"><RadioMock /></div>
            <span>(동그라미 선택지를<br />줄줄이 늘어놓아 옴)</span>
          </div>
        </div>
        <div className="in-chat-msg in-chat-me">
          <div className="in-chat-bub">알림은 옆으로 밀리는<br />동그란 버튼으로 해줘</div>
          <div className="in-chat-who">나</div>
        </div>
        <div className="in-chat-msg in-chat-ai">
          <div className="in-chat-who">AI</div>
          <div className="in-chat-bub">
            <div className="in-chat-mini"><CheckboxMock /></div>
            <span>(체크 표시 네모를<br />넣어 옴)</span>
          </div>
        </div>
        <div className="in-chat-loop">
          <svg viewBox="0 0 100 100" fill="none" stroke="var(--p-deep)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" filter="url(#wax-stroke)">
            <path d="M78 40a30 30 0 1 0 4 22" />
            <path d="M84 22l-4 20-20-4" />
          </svg>
          <span>이걸 여러 번 반복...</span>
        </div>
        <div className="in-chat-msg in-chat-me">
          <div className="in-chat-bub">아니 그게 아니라,,</div>
          <div className="in-chat-who">나</div>
        </div>
      </div>

      <div className="card in-chat-punch">
        <div className="in-chat-punch-text"><span className="hl">Dropdown, Toggle</span>이라고<br />한 마디면 끝났을 일</div>
      </div>
    </Post>
  );
}
