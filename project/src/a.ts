interface Hero {
  name: string;
  skill: string;
}

// const capt: Hero = {
//   name: 'capt',
//   skill: 'shield',
// };

// const capt: Hero = {};
// const capt = {} as Hero; 타입단언을 하면 속성이 없어도 에러가 나지 않는다.
// capt.name = 'capt';
// capt.skill = 'shield';

const a: string | null;
a!;
// 타입단언을 쓸때 주의가 필요하다
