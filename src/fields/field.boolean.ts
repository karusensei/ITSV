import { TypeValidator } from "../validators/exports"
import { Field } from "./field"

export class BooleanField extends Field {
	readonly field = "boolean"
	constructor(message?: string) {
		super()
		this.validators.push(new TypeValidator("boolean", message))
	}
}