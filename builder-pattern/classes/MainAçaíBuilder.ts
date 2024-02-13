import AçaíBuilderProtocol from "../interface/AçaíBoxBuilderProtocol"
import AçaíBox from "../../composite-pattern/classes/AçaíBox"
import { Mm, Jujube, Strawberry, PeanutCandy, Açaí } from "../../composite-pattern/classes/Ingredients"

export default class MainAçaíBuilder implements AçaíBuilderProtocol {
    private açaí: AçaíBox = new AçaíBox();

    reset() {
        this.açaí = new AçaíBox()
        return this
    }

    makeAçaí() {
        const açaí = new Açaí("Açaí", 10)
        this.açaí.add(açaí)
        return this
    }

    addAdictionals() {
        const mm = new Mm("MM sortido colorido", 5)
        const jujube = new Jujube("Jujuba de uva", 3)
        const strawberry = new Strawberry("Moranguin", 5)
        const peanutCandy = new PeanutCandy("Paçoquita", 1)
        this.açaí.add(mm, jujube, strawberry, peanutCandy)
        return this
    }

    getAçaí() {
        return this.açaí
    }

}

