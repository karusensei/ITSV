import { GenericValidator } from "./validator.generic"

export class DateValidator extends GenericValidator {
	name = "date"
	challenge: string
	constructor(
		instance: string = "date",
		message: string = `Submitted value must be a valid date`
	) {
		super()
		this.message = message
		this.challenge = instance
	}
	validate(value: string | Date): boolean {
		let date = new Date()
		if (value instanceof Date) {
			date = value
		} else {
			date = new Date(value)
		}
		return !isNaN(date.valueOf())
	}
}