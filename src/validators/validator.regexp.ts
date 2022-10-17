import { GenericValidator } from "./validator.generic"

export class RegExpValidator extends GenericValidator {
	name = "regexp"
	challenge: string
	constructor(
		regexp: RegExp,
		message: string = "Regular expression does not match"
	) {
		super()
		this.message = message
		this.challenge = regexp.source
	}
	validate(value: string): boolean {
		return new RegExp(this.challenge).test(value)
	}
}