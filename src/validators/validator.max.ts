import { Validator } from "./validator"

export class MaxValidator extends Validator {
	name = "max"
	challenge: number
	constructor(
		max: number,
		message: string = "Number too large"
	) {
		super()
		this.message = message
		this.challenge = max
	}
	validate(value: number): boolean {
		return value <= this.challenge
	}
}