import { Validator } from "./validator"

export class RequiredValidator extends Validator {
	name = "required"
	
	constructor(
		public challenge: boolean = true,
		public message: string = "Field missing"
	) {
		super()
	}
	validate(value?: any): boolean {
		if (this.challenge && (value === null || value === undefined)) {
			return false
		} else {
			return true
		}
	}
}