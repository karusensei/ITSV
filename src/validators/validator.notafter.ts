import { GenericValidator } from "./validator.generic"

export class NotAfterValidator extends GenericValidator {
	name = "notafter"
	challenge: Date
	constructor(
		notAfter: Date | string = new Date(),
		message: string = "Date too late"
	) {
		super()
		if (notAfter instanceof Date) {
			this.challenge = notAfter
		} else {
			this.challenge = new Date(notAfter)
		}
		this.message = message
	}
	validate(value: Date): boolean {
		return value >= this.challenge
	}
}