import isEmail from 'validator/lib/isEmail'
import EmailValidatorProtocol from "../interfaces/EmailValidatorProtocol"

export default class EmailValidatorAdapter implements EmailValidatorProtocol {
    isValid(value: String): boolean {
        return isEmail(value)
    }
}