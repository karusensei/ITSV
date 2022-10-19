import { Validator } from "./validator"

export class MinValidator extends Validator {
	name = "min"
	challenge: number
	constructor(
		min: number,
		message: string = "Number too small"
	) {
		super()
		this.message = message
		this.challenge = min
	}
	validate(value: number): boolean {
		return value >= this.challenge
	}
}