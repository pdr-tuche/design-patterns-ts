import VehicleFactory from "./factory/CarFactory"

export function indexFactoryPattern() {
    const obj = new VehicleFactory("car")

    console.log(obj)
}

