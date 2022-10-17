import { GenericValidator } from "./validator.generic"

export class ChoiceValidator extends GenericValidator {
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
		return value.every((v) => this.challenge.some((element) => v === element))
	}
}