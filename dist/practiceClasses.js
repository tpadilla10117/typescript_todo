"use strict";
/* CLASSES IN TYPESCRIPT: */
//readonly makes the value immutable
//public modifier: let devs know that a property can be accessed publically
//- is the DEFAULT
//private: tells typescript that a method is only accessible / able to be used inside of a class
/* class Player {

    public readonly first: string;
    public readonly last: string;
    private score = 0;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    private secretMethod(): void {
        console.log('This is a secret!')
    }
};
 */
class Player {
    //Parameter Properties Shorthand:
    constructor(first, last) {
        this.first = first;
        this.last = last;
        //protected: can access in child class but not publically
        this._score = 0;
    }
    secretMethod() {
        console.log('This is a secret!');
    }
    //getters:
    // - becomes readonly if there is no setter
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error('Cannot have a negative number');
        }
        this._score = newScore;
    }
}
;
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 999;
    }
}
;
const elton = new Player('Elton', 'John');
elton.fullName;
elton.score = 99;
