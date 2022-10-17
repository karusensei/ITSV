import { GenericValidator } from "./validator.generic"

export class MinValidator extends GenericValidator {
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