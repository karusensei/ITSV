import { GenericValidator } from "./validator.generic"

export class RequiredValidator extends GenericValidator {
	name = "required"
	challenge: boolean
	constructor(
		required: boolean = true,
		message: string = "Field missing"
	) {
		super()
		this.message = message
		this.challenge = required
	}
	get required(): any {
		return this.challenge
	}
	validate(value?: any): boolean {
		if (this.challenge && (value === null || value === undefined)) {
			return false
		} else {
			return true
		}
	}
}