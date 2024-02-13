import { Mm, Jujube, Strawberry, PeanutCandy, Açaí} from "./classes/Ingredients"
import AçaíBox from "./classes/AçaíBox"

export function indexCompositePattern() {
    const mm = new Mm("MM sortido colorido", 5)
    const jujube = new Jujube("Jujuba de uva", 3)
    const strawberry = new Strawberry("Moranguin", 5)
    const peanutCandy = new PeanutCandy("Paçoquita", 1)
    const açaí = new Açaí("Açaí", 10)

    const açaíBox = new AçaíBox()
        açaíBox.add(mm, jujube, strawberry, peanutCandy, açaí)

    console.log(açaíBox)
    console.log("preço final => ", açaíBox.getPrice())
}