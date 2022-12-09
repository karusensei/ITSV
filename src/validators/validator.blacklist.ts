import { Validator } from "./validator";


export class BlacklistValidator extends Validator {
	name = "blacklist"
	challenge: any[]

	constructor(
		challenge: any[],
		message: string = "Value is not acceptable"
		) {
		super()
		this.challenge = challenge ?? []
		this.message = message ?? this.message
	}

	validate(value: any): boolean {
		return ! this.challenge.some((element) => value === element)
	}

}