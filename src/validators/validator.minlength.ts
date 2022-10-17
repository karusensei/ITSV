import { GenericValidator } from "./validator.generic"

export class MinLengthValidator extends GenericValidator {
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