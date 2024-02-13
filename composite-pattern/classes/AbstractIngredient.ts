import IngredientsCompositeProtocol from "../interfaces/IngredientsCompositeProtocol"

export default abstract class AbstracIngredient implements IngredientsCompositeProtocol {
    constructor(private name: String, private price: number) { }

    getPrice(): number {
        return this.price
    }
}