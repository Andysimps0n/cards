#!/usr/bin/env python3
"""미리보기 PNG 일괄 생성. 새 게시물은 POSTS 에 한 줄 추가 → python3 build.py"""
import subprocess, urllib.parse as up, sys
HL = lambda t: f'<span class="hl">{t}</span>'
COVERS = {
  "ui":  dict(series="talk",  no=1, kicker="AI한테", title=f"{HL(chr(39)+'예쁘게 해줘'+chr(39))}<br>말고 이렇게<br>말하세요",
              sub="디자인 용어 5개만 알면<br>결과물이 달라져요", note="보물: 예쁜 결과물!", pg="01 / 09"),
  "ai":  dict(series="cando", no=1, kicker="Remotion 발견!", title=f"영상도<br>{HL('코드로')}<br>만든다고?",
              sub="React 컴포넌트로<br>영상을 만드는 도구", note="보물: 새 분야 입장권", pg="01 / 08"),
  "dev": dict(series="log",   no=0, kicker="출발 전 브리핑", title=f"이 계정을<br>{HL('시작하는')}<br>이유",
              sub="공부하다 알게 된 걸<br>기록하고 나누려고요", note="목적지: 꾸준한 기록", pg="01 / 06"),
}
JOBS = [
  ("templates/specimen.html",     "previews/00-specimen.png", {}),
  ("templates/cover.html",        "previews/01-cover-ui-talk-01.png",  COVERS["ui"]),
  ("templates/cover.html",        "previews/02-cover-ai-cando-01.png", COVERS["ai"]),
  ("templates/cover.html",        "previews/03-cover-dev-log-00.png",  COVERS["dev"]),
  ("templates/term.html",         "previews/04-term-card.png", {}),
  ("templates/before-after.html", "previews/05-before-after.png", {}),
  ("templates/ending.html",       "previews/06-ending-cta.png", {}),
  ("templates/grid.html",         "previews/07-profile-grid.png", {}, 1080, 1640),
]
def render(tpl, out, q, w=1080, h=1350):
    qs = up.urlencode({k: v for k, v in q.items()}, quote_via=up.quote)
    subprocess.run(["./render.sh", tpl, out, qs, str(w), str(h)], check=True)
if __name__ == "__main__":
    only = sys.argv[1:]
    for tpl, out, q, *size in JOBS:
        if not only or any(o in out for o in only): render(tpl, out, q, *size)
