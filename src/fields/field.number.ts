import { Field } from './exports';
import { MaxValidator, MinValidator, TypeValidator } from '../validators/exports';



export class NumberField extends Field {
	field = "number"

	constructor(message?: string) {
		super()
		this.validators.push(new TypeValidator("number", message))
	}

	min(min: number, message?: string) {
		this.validators.push(new MinValidator(min, message))
		return this
	}

	max(max: number, message?: string) {
		this.validators.push(new MaxValidator(max, message))
		return this
	}

}