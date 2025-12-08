/**
 * 인덱스드 엑세스 타입
 * */

interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
    };
}

const post: Post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "이정환",
    },
};

function printAuthorInfo(author: { id: number; name: string }) {
    console.log(`${author.id} - ${author.name}`);
}

function printAuthorInfo2(author: Post["author"]) {
    console.log(`${author.id} - ${author.name}`);
}

// 인덱스를 중첩하여 사용
function printAuthorInfo3(authorId: Post["author"]["id"]) {
    console.log(authorId);
}

/**
 * 배열 요소의 타입으로 추출하기
 * */
type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}[];

const post2: PostList[number] = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "이정환",
        age: 27,
    },
};

const post3: PostList[0] = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "이정환",
        age: 27,
    },
};


/**
 *  튜플의 요소 타입 추출하기
 * */
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
// number

type Tup1 = Tup[1];
// string

type Tup2 = Tup[2];
// boolean

type Tup3 = Tup[number]
// number | string | boolean