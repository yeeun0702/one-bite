/**
 * keyof 연산자
 * */

interface User {
    id: number;
    name: string;
    age: number;
}

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
    return {
        id: 1,
        name: "이정환",
        age: 27,
    };
}

type PartialUser = {
    [key in "id" | "name" | "age"]?: User[key];
};

// 한 명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {
    // ... 유저 정보 수정 기능
}

updateUser({ // ✅
    age: 25
});

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
};