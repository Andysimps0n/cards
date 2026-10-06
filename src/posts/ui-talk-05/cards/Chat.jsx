import { Post } from "../../../ui/Post.jsx";
import { QuestTag } from "../../../ui/QuestTag.jsx";
import { Icon } from "../../../ui/Icon.jsx";
import { WrongBannerMock, TinyButtonMock } from "../mocks.jsx";

export function Chat() {
  return (
    <Post name="Chat" pillar="ui" page="02">
      <div className="zn-post-head">
        <h1 className="display zn-chat-title"><span>이런 상황이 답답하시죠,,</span></h1>
        <div className="card-head">
          <QuestTag series="talk" showType={false} />
          <div className="zn-chat-pin"><Icon name="map" color="var(--ink-soft)" stroke={5} /></div>
        </div>
      </div>

      <div className="zn-chat-thread">
        <div className="zn-chat-msg zn-chat-me">
          <div className="zn-chat-bub">맨 위에 큰 사진이랑 한 줄<br />문구 있는 그 구역 만들어줘</div>
          <div className="zn-chat-who">나</div>
        </div>
        <div className="zn-chat-msg zn-chat-ai">
          <div className="zn-chat-who">AI</div>
          <div className="zn-chat-bub">
            <div className="zn-chat-fig"><WrongBannerMock /></div>
            <span>(가로 띠 광고를<br />넣어 옴)</span>
          </div>
        </div>
        <div className="zn-chat-msg zn-chat-me">
          <div className="zn-chat-bub">지금 시작하기 버튼도<br />크게 넣어줘</div>
          <div className="zn-chat-who">나</div>
        </div>
        <div className="zn-chat-msg zn-chat-ai">
          <div className="zn-chat-who">AI</div>
          <div className="zn-chat-bub">
            <div className="zn-chat-fig"><TinyButtonMock /></div>
            <span>(작은 버튼을<br />구석에 넣어 옴)</span>
          </div>
        </div>
        <div className="zn-chat-msg zn-chat-me">
          <div className="zn-chat-bub">아니 그게 아니라,,</div>
          <div className="zn-chat-who">나</div>
        </div>
      </div>

      <div className="card zn-chat-punch">
        <div className="zn-chat-punch-text"><span className="hl">Hero Section, CTA</span>라고<br />한 마디면 끝났을 일</div>
      </div>
    </Post>
  );
}
