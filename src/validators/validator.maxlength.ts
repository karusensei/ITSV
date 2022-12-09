import { Validator } from "./validator"

export class MaxLengthValidator extends Validator {
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

	validate(value?: string) {
		return (value?.length ?? 0) <= this.challenge
	}
}