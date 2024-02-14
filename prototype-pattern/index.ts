import Person from "./classes/Person"

export function indexPrototypePattern() {

    const person = new Person("José", "Silva")

    const person2 = person.cloneShallowCopy()

    console.log(person)
    person.fullname()

    console.log(person2)
    person2.fullname()

    console.log(person === person2) // false pq é um objeto novo
}