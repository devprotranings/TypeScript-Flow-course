// interface IAccount {
//   firstName: string;
//   age: number;
// }
//
// let account = IAccount;


// let account = {
//   firstName: 'Igor',
//   age: 32
// }
// let person: typeof account;
//
// person = {
//   firstName: 'Igor',
//   age: 32
// }

// let a: void = undefined;

// const account: {
//   readonly firstName: string;
//   readonly age: number;
// } = {
//   age: 32,
//   firstName: 'Igor',
// };
//
// account.age = 40;

// type Account = {
//   readonly firstName: string;
//   readonly age: number;
// };
//
// let arr: ReadonlyArray<string | number> = ['1', 2];
// arr.push(1);
// arr[100] = 2;

// let arr: [string, number] = ['s', 1];
//
// arr[100] = 1;

// let cb: new (a: string) => number;
// type IAccount = {
//   readonly firstName: string;
// }
//
// type IAccount = {
//   readonly age: number;
// }

// interface IAccount extends IName, IAge {

// }

// class Person implements IAccount {
//   public readonly firstName!: string;
//   public readonly age!: number;
// }
//
// interface IAccount<T extends { name: string, age: number }> {
//   id: string;
//   info: T;
// }
//
// let person: IAccount<{ name: string, age: number, male: boolean }> = {
//   id: '12313asdas1234ads',
//   info: { name: 'Igor', age: 32, male: true };
// };

// type hashMap<T, U, Z> = { [info: string]: T };
//
// let userInfo: hashMap<boolean>;
//
// function isString(a: number | string): a is string {
//   return typeof  a === 'string';
// }


// function average(a: number, b: string, c: number): string;
// function average(a: string, b: number): number;
// function average(a: number | string, b: number | string, c?: number): number | string {
//   let av: number;
//   if (isString(a)) {
//     av = parseInt(a, 10);
//   } else {
//
//   }
//
//   parseInt(a, 10);
// }

// function f(this: void, a: number) {
//   this.a = 1;
// }
//
// f.bind({ a: 1 }, 1);

// type fn<T> = (arr: T[], ...args: T[]) => boolean;
//
// const isInArray: fn<number | string> = (arr: Array<number | string>, ...args: Array<number | string>): boolean => {
//   const first = args.shift();
//   if (arr.length < 1 || typeof first === "undefined" || arr.includes(first)) {
//     return false;
//   }
//   return args.every((arg) => {
//     return arr.includes(arg);
//   });
// };

// let obj = {
//   onEvent(cb: (this: void, e: Event) => void) {
//     const a: number = 1;
//   },
// };
//
// class Handler {
//   public info: string = 'message';
//
//   public handler(this: Handler, e: Event) {
//     this.msg();
//   }
//
//   public msg() {
//     console.log(this.info);
//   }
// }
//
// let h = new Handler();
// obj.onEvent(h.handler);

// class Point {
//   public readonly x: number;
//   public readonly y: number;
//   public readonly obj: {
//     readonly a: 1,
//     readonly b: 'asd',
//   } = {
//     a: 1,
//     b: 'asd',
//   };
//
//   private constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
//
//   public setCoord() {
//     this.obj.a = 1;
//   }
// }

class Singleton {

  public static instance() {
    if (!this.pinstance) {
      this.pinstance = new Singleton();
    }
    return this.pinstance;
  }

  private static pinstance: Singleton;

  private constructor() {}

}

class A extends Singleton {

}
//
// let s =  Singleton.instance();
// interface IPoint {
//   x: number;
// }


// abstract class SuperPoint {
//   public x!: number;
//
//   public position(): number {
//     return this.x * 5;
//   }
//
//   // public abstract generateCoord(): number;
// }

// class Point extends SuperPoint {
//   public x!: number;
//   protected z!: number;
//   private y!: number;
//   private d!: number;
//
//   public constructor() {
//     super();
//   }
//
//   public generateCoord(): number {
//     return 5;
//   }
//
//   public set e(value: number) {
//     this.d = value;
//   }
// }
//
// let a = new Point();
// a.e = 3;
// class MyPoint extends Point {
//
//   public constructor() {
//     super();
//   }
// }


// let p = new Point();
