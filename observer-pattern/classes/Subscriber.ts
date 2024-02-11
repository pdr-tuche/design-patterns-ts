import ISubscriber from "../interfaces/ISubscriber"

export default class Subscriber implements ISubscriber {
    private name: String

    constructor(name: String) {
        this.name = name
    }

    notify() {
        console.log(`${this.name} foi notificado com sucesso!`)
    }

}