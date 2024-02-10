import Car from '../classes/Car'
import Ship from '../classes/Ship'

export default class VeichleFactory {
    constructor(instance: String) {
        if (instance !== "car" && instance !== "ship"){
            return new Error("Invalid instance")
        }
        console.log("Creating instance of " + instance)
        if (instance == "car") {
            return new Car()
        }
        return new Ship()    
    }
}