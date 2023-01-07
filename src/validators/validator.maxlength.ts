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

	validate(value?: any) {
		if (! value?.length) return false
		return (value.length) <= this.challenge
	}
}