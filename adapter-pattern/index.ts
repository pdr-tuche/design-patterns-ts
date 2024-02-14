import EmailValidatorAdapter from "./classes/EmailValidatorAdapter"

export function indexAdapterPattern() {
    const validator = new EmailValidatorAdapter()
    console.log(validator.isValid("contato.nevespedro@gmail.com"))
}