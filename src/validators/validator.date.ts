import { Validator } from "./validator"

export class DateValidator extends Validator {
	name = "date"
	challenge: string
	constructor(
		challenge: string = "date",
		message: string = `Submitted value must be a valid date`
	) {
		super()
		this.message = message
		this.challenge = challenge
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