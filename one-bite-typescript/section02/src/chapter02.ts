export {};


let numArr: number[] = [1, 2, 3]
let strArr: string[] = ["hello", "im", "yeeun"];
let boorArr: Arry<boolean> = [true, false];

// 배열에 들어가는 요소들이 다양할 경우
let multiArr = [1, "hello"];

// 다차원 배열 타입 정의하기
let doubleArr : number[][] = [
    [1, 2, 3],
    [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hello", true];

const users1 = [
    ["김예은", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    [5, "조아무개"], // <- 새로 추가함
];

const users2: [string, number][] = [
    ["김예은", 1],
    ["이아무개", 2],
    ["김아무개", 3],
    ["박아무개", 4],
    [5, "조아무개"], // 오류 발생
];
