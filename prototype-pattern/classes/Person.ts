import Prototype from "../interfaces/Prototype"

export default class Person implements Prototype {
    constructor(public fristName: string, public lastName: String) { }

    cloneShallowCopy(): Person {
        return Object.create(this)
    }

    // clone deep copy
    clone(): Person {
        return new Person(this.fristName, this.lastName)
    }

    fullname() {
        console.log(`${this.fristName} ${this.lastName}`)
    }
}