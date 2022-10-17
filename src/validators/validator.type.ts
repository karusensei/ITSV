import { GenericValidator } from "./validator.generic"

export class TypeValidator extends GenericValidator {
	name = "type"
	challenge: "string" | "number" | "boolean"
	constructor(
		type: "string" | "number" | "boolean",
		message: string = "Type does not match"
	) {
		super()
		this.message = message
		this.challenge = type
	}
	validate(value: any): boolean {
		return typeof value === this.challenge
	}
}