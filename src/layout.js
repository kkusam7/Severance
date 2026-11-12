// 3층 평면도의 공개 가능한 공용공간/진료구역 구성을 참고한 게임형 시범 배치.
// 실제 방위·실별 경계·실명은 검증되지 않았으므로 현장 길찾기 자료로 사용하지 마세요.
export const WORLD={width:48,height:36,spawn:[-16,10]};
export const rooms=[
 {id:'clinic1',name:'진료실 체험 A',x:5,z:-9,w:11,h:9,door:[5,-4.5],color:0xcce8fb,desc:'의료진과의 상담 과정을 알아보는 가상 체험실입니다.'},
 {id:'clinic2',name:'진료실 체험 B',x:17,z:-9,w:10,h:9,door:[17,-4.5],color:0xf8e3dc,desc:'건강한 생활습관에 대해 배우는 가상 체험실입니다.'},
 {id:'exam',name:'검사 안내 체험',x:5,z:9,w:11,h:9,door:[5,4.5],color:0xdff2df,desc:'검사를 받기 전 준비 과정을 체험해 보세요.'},
 {id:'waiting',name:'외래 대기 공간',x:17,z:9,w:10,h:9,door:[17,4.5],color:0xfff0cb,desc:'진료를 기다리는 가상 공간입니다.'}
];
export const zones=[{name:'3층 공용 로비',x:-15,z:9},{name:'안내 데스크',x:-8,z:1},{name:'승강기 체험 구역',x:-17,z:-10},{name:'진료·검사 체험 구역',x:11,z:0}];
export const colliders=[];
export function addWall(x,z,w,d){colliders.push({x,z,w,d});}
export function hitsWall(x,z,r=.55){return colliders.some(c=>Math.abs(x-c.x)<c.w/2+r&&Math.abs(z-c.z)<c.d/2+r)}
export function clampWorld(x,z,r=.6){return Math.abs(x)>WORLD.width/2-r||Math.abs(z)>WORLD.height/2-r}
