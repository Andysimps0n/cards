import { Post } from "../../../ui/Post.jsx";
import { QuestTag } from "../../../ui/QuestTag.jsx";
import { Icon } from "../../../ui/Icon.jsx";
import { Mock } from "../../../ui/Mock.jsx";

export function Chat() {
  return (
    <Post name="Chat" pillar="ui" page="02" className="head-compact">
      <div className="post-head">
        <h1 className="display chat-title"><span>답답하지 않았나요?</span></h1>
        <div className="card-head">
          <QuestTag series="talk" showType={false} />
          <div className="chat-pin"><Icon name="map" color="var(--ink-soft)" stroke={5} /></div>
        </div>
      </div>

      <div className="chat-thread">
        <div className="chat-msg chat-me">
          <div className="chat-bub">화면에 창이 올라와서, 다른 옵션을 <br />보여주는 UI를 만들어줘<br /></div>
          <div className="chat-who">나</div>
        </div>
        <div className="chat-msg chat-ai">
          <div className="chat-who">AI</div>
          <div className="chat-bub">
            <div className="chat-mini"><Mock kind="modal" /></div>
            <span>(화면 가운데에<br />팝업을 띄워 옴)</span>
          </div>
        </div>
        <div className="chat-msg chat-me">
          <div className="chat-bub">가운데에 생기는 거 말고,<br />아래에서 반만 올라오는 창</div>
          <div className="chat-who">나</div>
        </div>
        <div className="chat-msg chat-ai">
          <div className="chat-who">AI</div>
          <div className="chat-bub">
            <div className="chat-mini"><Mock kind="toast" /></div>
            <span>(아래 알림만<br />띄워 옴)</span>
          </div>
        </div>
        <div className="chat-msg chat-me">
          <div className="chat-bub">아니 그게 아니라,,</div>
          <div className="chat-who">나</div>
        </div>
      </div>

      <div className="card chat-punch">
        <div className="chat-punch-text"><span className="hl">Bottom Sheet</span>라고 했으면 끝났을 일인데...</div>
      </div>
    </Post>
  );
}
