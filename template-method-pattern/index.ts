import CakeRecipe from "./classes/CakeRecipe"
import VeganCakeRecipe from "./classes/VeganCakeRecipe"

export function indexTemplateMethodPattern(){
    const cakeRecipe = new CakeRecipe(["flour", "eggs", "sugar", "butter", "milk", "salt", "baking powder"])
    cakeRecipe.prepare()
    cakeRecipe.bake()
    cakeRecipe.takeOut()
    cakeRecipe.cut()

    //recipe: https://www.noracooks.com/vegan-chocolate-cake/
    const veganCakeRecipe = new VeganCakeRecipe(["unsweetened almond milk", "apple cider vinegar", "purpose flour", "granulated sugar", "cocoa powder", "baking powder", "teaspoons baking powder"])
    veganCakeRecipe.prepare()
    veganCakeRecipe.bake()
    veganCakeRecipe.takeOut()
    veganCakeRecipe.cut()
    
}