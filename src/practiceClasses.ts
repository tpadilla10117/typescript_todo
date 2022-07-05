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
    //protected: can access in child class but not publically
    protected _score = 0;
    //Parameter Properties Shorthand:

    constructor(public first: string, public last: string) {
        
    }

    private secretMethod(): void {
        console.log('This is a secret!')
    }

//getters:
    // - becomes readonly if there is no setter
    get fullName(): string {
        return `${this.first} ${this.last}`
    }

    get score(): number {
        return this._score;
    }

    set score(newScore: number) {
        if(newScore < 0) {
            throw new Error('Cannot have a negative number');
        }
        this._score = newScore;
    }
};

class SuperPlayer extends Player{
    isAdmin: boolean = true;
    maxScore() {
        this._score = 999;
    }
};

const elton = new Player('Elton', 'John');
elton.fullName;
elton.score = 99;