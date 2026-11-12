# 세브란스 진료실 놀러가기 — 3D 웹 메타버스 시범 v0.1

## 범위와 주의사항
첨부된 세브란스병원 본관 3~6층 도면을 검토하고, **3층의 공용공간·진료/검사 구역·승강기 구역이라는 공간적 특성**을 모티브로 만든 **가상 게임형 시범 배치**입니다. 실제 벽체 좌표, 진료과별 위치, 출입문, 실명, 보안구역을 재현하지 않습니다. 정확한 길찾기·안전 안내·공식 병원 안내에 사용할 수 없습니다. 진료실 체험 A/B와 검사 체험은 가상 콘텐츠입니다. 실제 도면 원본은 프로젝트에 포함하지 않았습니다.

## 실행 (Node.js 22 권장)
```
npm install
npm run dev
```
터미널에 표시된 localhost 주소로 접속하세요. 네트워크가 끊긴 상태에서도 `npm install` 이후 로컬 실행은 가능합니다.

## 테스트 / 배포용 빌드
```
npm test
npm run build
npm run preview
```
`dist/` 폴더가 배포용 정적 웹사이트입니다. 이 프로젝트는 EXE가 아닌 웹 게임입니다.

## 조작
WASD/방향키 이동, Shift 달리기, 마우스 드래그 카메라 회전, E 진료실 입장/안내 NPC 대화, Esc 대화 닫기. 모바일 화면에는 간단한 터치 버튼을 표시합니다.

## GitHub Pages 자동 배포
1. GitHub에서 새 저장소(예: `severance-metaverse-demo`)를 만들고, 이 폴더 안의 파일을 루트에 업로드합니다. `.github/workflows/deploy.yml` 경로를 보존하세요.
2. 저장소 **Settings → Pages → Build and deployment → Source: GitHub Actions**를 선택합니다.
3. `main` 브랜치에 푸시하거나 **Actions → Build and deploy metaverse → Run workflow**를 누릅니다.
4. Actions에서 build 및 deploy 성공을 확인하고, Settings → Pages에 표시되는 사이트 주소로 접속합니다.
5. **공개 저장소/공개 Pages에는 병원 원본 도면, 환자 정보, 비공개 공간 정보를 절대 올리지 마세요.** 접근 제어가 필요하면 별도 내부 호스팅을 사용하세요.

## 향후 정확도 향상
실제 도면 기반 정밀 구현은 CAD 원본, 공개 가능한 공간 범위, 공간별 용도, 기준점/축척 및 담당자 검수가 선행되어야 합니다. 벽/문/복도를 승인된 공간 데이터(JSON/GLB)로 교체하고, 검증된 길찾기 그래프를 추가하세요.
