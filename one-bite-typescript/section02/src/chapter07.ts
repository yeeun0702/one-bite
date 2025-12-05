function func1(): string{
    return "hello";
}

// void
function func2(): void {
    console.log("hello");
}

// "strictNullChecks: false" 일 경우
let a: void;
a = undefined;
a = null;

// never 타입
//  함수가 어떠한 값도 반환할 수 없는 상황일 때 해당 함수의 반환값 타입을 정의할 때 사용
function func3(): never {
    while (true) {}
}