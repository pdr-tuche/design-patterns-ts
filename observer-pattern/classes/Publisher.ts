import ISubscriber from "../interfaces/ISubscriber"

export default class Publisher {
    private subscribers: ISubscriber[]

    constructor() {
        this.subscribers = []
    }

    subscribe(subscriber: ISubscriber) {
        this.subscribers.push(subscriber)
    }

    unSubscribe(subscriber: ISubscriber) {
        this.subscribers = this.subscribers.filter(elem => elem !== subscriber)
    }

    showSubscribers() {
        console.log(this.subscribers)
    }

    notifySubscribers() {
        this.subscribers.forEach(subscriber => subscriber.notify())
    }
}