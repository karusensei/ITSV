import { GenericValidator } from "./validator.generic"

export class MaxLengthValidator extends GenericValidator {
	name = "maxlength"
	challenge: number
	constructor(
		maxlength: number,
		message: string = "Length too large"
	) {
		super()
		this.message = message
		this.challenge = maxlength
	}

	validate(value: string) {
		return value.length <= this.challenge
	}
}