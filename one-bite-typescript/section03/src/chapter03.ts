// 기본 타입간의 호환성
let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업 캐스팅
num2 = num1; // 다운 캐스팅

// 객체 타입간의 호환성
// -> 어떤 객체 타입을 다른 객체타입으로 취급해도 괜찮은가 ?
type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "기린",
    color: "yellow",
};

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
};

animal = dog;
dog = animal; // X


// 초과 프로퍼티 검사
type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book2: Book = { // 오류 발생
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs",
};

function func(book: Book) {}

func({ // 오류 발생
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs",
});