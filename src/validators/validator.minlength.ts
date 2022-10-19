import { Validator } from "./validator"

export class MinLengthValidator extends Validator {
	name = "minlength"
	challenge: number
	constructor(
		minlength: number,
		message: string = "Length too small"
	) {
		super()
		this.message = message
		this.challenge = minlength
	}
	validate(value: string) {
		return value.length >= this.challenge
	}
}