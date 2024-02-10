import IVeichle from '../interfaces/IVehicle'

export default class Ship implements IVeichle {
    drive() {
        console.log('browsing...')
    }
}