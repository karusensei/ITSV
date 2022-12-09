import { Validator } from "./validator"

export class ChoiceValidator extends Validator {
	name = "choice"
	challenge: Array<any> = []
	constructor(
		choices: Array<any>,
		message: string = "Choice must be in array"
	) {
		super()
		this.message = message
		this.challenge = choices
	}
	validate(value: any[]) {
		return value?.every((v) => this.challenge.some((element) => v === element)) ?? false
	}
}