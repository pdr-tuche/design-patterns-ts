import Publisher from "./classes/Publisher"
import Subscriber from "./classes/Subscriber"

export function indexOberverPattern() {

    const publisher = new Publisher()

    const subscriber1 = new Subscriber("Maduzinha")
    const subscriber2 = new Subscriber("Cleniazaps")
    const subscriber3 = new Subscriber("João Guilherme")

    publisher.subscribe(subscriber1)
    publisher.subscribe(subscriber2)
    publisher.subscribe(subscriber3)

    console.log("== Subscribers ==")
    publisher.showSubscribers()
    publisher.unSubscribe(subscriber2)

    console.log("== Subscribers pos unsub ==")
    publisher.showSubscribers()

    console.log("== Notifications ==")
    publisher.notifySubscribers()

}