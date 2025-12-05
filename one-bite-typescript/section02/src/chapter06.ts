// any 타입
// 특정 변수의 타입을 우리가 확실히 모를 때
// any는 최대한 사용하지 않을 것.
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};

anyVar.toUpperCase();
anyVar.toFixed();
anyVar.a;

// Unknown 타입
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

if (typeof unknownVar === "number") {
    // 이 조건이 참이된다면 unknownVar는 number 타입으로 볼 수 있음
    unknownVar * 2;
}