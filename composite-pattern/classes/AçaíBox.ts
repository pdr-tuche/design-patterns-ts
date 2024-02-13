import IngredientsCompositeProtocol from "../interfaces/IngredientsCompositeProtocol"

export default class AçaíBox implements IngredientsCompositeProtocol {
    private children: IngredientsCompositeProtocol[] = []

    getPrice(): number {
        return this.children.reduce((sum, adictional) => sum + adictional.getPrice(), 0)
    }

    add(...adictional: IngredientsCompositeProtocol[]): void {
        adictional.forEach(adictional => this.children.push(adictional))
    }
}