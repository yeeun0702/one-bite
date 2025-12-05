// object
let user1: object = {
    id: 1,
    name: "이정환",
};


// 객체 리터럴 타입
let user2: {
    id: number;
    name: string;
} = {
    id: 1,
    name: "이정환",
};

user2.id;

let dog : {
    name: string;
    color: string;
} = {
    name: "돌돌이",
    color: "brown",
};

// 선택적 프로퍼티(Optional Property)
let user3: {
    id?: number; // 선택적 프로퍼티가 된 id
    name: string;
} = {
    id: 1,
    name: "이정환",
};

user3 = {
    name: "홍길동",
};

// 읽기전용 프로퍼티(Readonly Property)
let user4: {
    id?: number;
    readonly name: string; // name은 이제 Readonly 프로퍼티가 되었음
} = {
    id: 1,
    name: "이정환",
};

// user4.name = "dskfd";