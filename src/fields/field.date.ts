import { DateValidator, NotAfterValidator, NotBeforeValidator } from "../validators/exports"
import { Field } from "./exports"

export class DateField extends Field {
	field = "date"

	constructor(message: string = "Date must be valid") {
		super()
		this.validators.push(new DateValidator("date", message))
		return this
	}

	notBefore(date: Date | string, message?: string) {
		this.validators.push(new NotBeforeValidator(date, message))
		return this
	}

	notAfter(date: Date | string, message ?: string) {
		this.validators.push(new NotAfterValidator(date, message))
		return this
	}
}