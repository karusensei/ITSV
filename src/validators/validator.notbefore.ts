import { GenericValidator } from "./validator.generic"

export class NotBeforeValidator extends GenericValidator {
	name = "notbefore"
	challenge: Date
	constructor(
		notBefore: Date | string = new Date(),
		message: string = "Date too early"
	) {
		super()
		if (notBefore instanceof Date) {
			this.challenge = notBefore
		} else {
			this.challenge = new Date(notBefore)
		}
		this.message = message
	}
	validate(value: Date): boolean {
		return value <= this.challenge
	}
}