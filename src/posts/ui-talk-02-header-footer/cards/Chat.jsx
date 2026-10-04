import { Post } from "../../../ui/Post.jsx";
import { QuestTag } from "../../../ui/QuestTag.jsx";
import { Icon } from "../../../ui/Icon.jsx";
import { Mock } from "../../../ui/Mock.jsx";
import { WrongNav } from "../mocks.jsx";

export function Chat() {
  return (
    <Post name="Chat" pillar="ui" page="02">
      <div className="hf-post-head">
        <h1 className="display hf-chat-title"><span>이런 상황이 답답하시죠,,</span></h1>
        <div className="card-head">
          <QuestTag series="talk" showType={false} />
          <div className="hf-chat-pin"><Icon name="map" color="var(--ink-soft)" stroke={5} /></div>
        </div>
      </div>

      <div className="hf-chat-thread">
        <div className="hf-chat-msg hf-chat-me">
          <div className="hf-chat-bub">맨 위에 로고랑 메뉴 버튼 있는<br />그 줄 만들어줘</div>
          <div className="hf-chat-who">나</div>
        </div>
        <div className="hf-chat-msg hf-chat-ai">
          <div className="hf-chat-who">AI</div>
          <div className="hf-chat-bub">
            <div className="hf-chat-mini"><WrongNav /></div>
            <span>(엉뚱한 위치에<br />메뉴를 만들어 옴)</span>
          </div>
        </div>
        <div className="hf-chat-msg hf-chat-me">
          <div className="hf-chat-bub">위에 쭉 붙어 있는 메뉴 줄이랑,<br />맨 밑에 늘 깔리는 정보 칸 말이야</div>
          <div className="hf-chat-who">나</div>
        </div>
        <div className="hf-chat-msg hf-chat-ai">
          <div className="hf-chat-who">AI</div>
          <div className="hf-chat-bub">
            <div className="hf-chat-mini"><Mock kind="modal" /></div>
            <span>(회사 정보를<br />팝업으로 띄워 옴)</span>
          </div>
        </div>
        <div className="hf-chat-loop">
          <svg viewBox="0 0 100 100" fill="none" stroke="var(--p-deep)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" filter="url(#wax-stroke)">
            <path d="M78 40a30 30 0 1 0 4 22" />
            <path d="M84 22l-4 20-20-4" />
          </svg>
          이걸 여러 번 반복...
        </div>
        <div className="hf-chat-msg hf-chat-me">
          <div className="hf-chat-bub">아니 그게 아니라,,</div>
          <div className="hf-chat-who">나</div>
        </div>
      </div>

      <div className="card hf-chat-punch">
        <div className="hf-chat-punch-text"><span className="hl">Header, Footer</span>라고 하면<br />바로 알아들어요</div>
      </div>
    </Post>
  );
}
