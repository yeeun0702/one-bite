/*
* Unknown 타입
* */

function unKnownExam(){
    let a: unknown = 1;                 // number -> unknown
    let b: unknown = "hello";           // string -> unknown
    let c: unknown = true;              // boolean -> unknown
    let d: unknown = null;              // null -> unknown
    let e: unknown = undefined;         // undefined -> unknown
    let f: unknown = [];                // Array -> unknown
    let g: unknown = {};                // Object -> unknown
    let h: unknown = () => {};    // Function -> unknown

}


let unknownValue: unknown;

// let a: number = unknownValue;
// 오류 : unknown 타입은 number 타입에 할당할 수 없습니다.

/*
* Never 타입
* */

function neverExam(){

    function neverFunc():never {
        while(true){}
    }

    function errorFunc(): never {
        throw new Error();
    }

    let neverVar: never;

    // 업 캐스팅
    let a: number = neverVar;            // never -> number
    let b: string = neverVar;            // never -> string
    let c: boolean = neverVar;           // never -> boolean
    let d: null = neverVar;              // never -> null
    let e: undefined = neverVar;         // never -> undefined
    let f: [] = neverVar;                // never -> Array
    let g: {} = neverVar;                // never -> Object


    // 다운 캐스팅 불가능
    // let a: never = 1;                 // number -> never
    // let b: never = "hello";           // string -> never
    // let c: never = true;              // boolean -> never
    // let d: never = null;              // null -> never
    // let e: never = undefined;         // undefined -> never
    // let f: never = [];                // Array -> never
    // let g: never = {};                // Object -> never

}


/*
* Void 타입
* */

function VoidExam(){
    function noReturnFunc(): void {
        console.log("hi");
    }
}


/*
* Any 타입
* */

function AnyExam(){
    let anyValue: any;

    let num: number = anyValue;   // any -> number (다운 캐스트)
    let str: string = anyValue;   // any -> string (다운 캐스트)
    let bool: boolean = anyValue; // any -> boolean (다운 캐스트)

    anyValue = num;  // number -> any (업 캐스트)
    anyValue = str;  // string -> any (업 캐스트)
    anyValue = bool; // boolean -> any (업 캐스트)

}