import { Validator } from "./validator"

export class RegExpValidator extends Validator {
	name = "regexp"
	challenge: string
	constructor(
		regexp: RegExp | string,
		message: string = "Regular expression does not match"
	) {
		super()
		this.message = message
		if (regexp instanceof RegExp) {
			this.challenge = regexp.source
		} else {
			this.challenge = new RegExp(regexp).source
		}
	}
	validate(value: string): boolean {
		return new RegExp(this.challenge).test(value)
	}
}