import IVeichle from '../interfaces/IVehicle'

export default class Car implements IVeichle {
    drive() {
        console.log('Driving...')
    }
}