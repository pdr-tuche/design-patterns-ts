import AbstractRecipe from "./AbstractRecipe"

export default class VeganCakeRecipe extends AbstractRecipe {
    private ingredients: string[]

    constructor(ingredients: string[]) {
        super()
        this.ingredients = []
        ingredients.forEach(elem => this.ingredients.push(elem))
    }

    public prepare() {
        console.log("\n🎉 Preparing the VEGAN cake")
        console.log(`using the following ingredients:\n${this.ingredients.join(", ")}`)
    }

    public bake() {
        console.log("🔥 baking the cake")
    }

    public takeOut() {
        console.log("🎂 taking out the cake\n😯 OH NOOO! DIDIN'T GROWWW!!!")
    }

    public cut() {
        console.log("🍰 cutting the cake")
    }
}