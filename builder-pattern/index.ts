import MainAçaíBuilder from "./classes/MainAçaíBuilder"

export function indexBuilderPattern() {
    const açaíBuilder = new MainAçaíBuilder()
    const açaí1 = açaíBuilder.makeAçaí().addAdictionals()

    console.log(açaí1.getAçaí())
    console.log("preço do açaí => ", açaí1.getAçaí().getPrice())

    açaíBuilder.reset()
    const açaí2 = açaíBuilder.makeAçaí()
    console.log(açaí2.getAçaí())
    console.log(açaí2.getAçaí().getPrice())
}