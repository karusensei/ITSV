import { Report } from "../reports/exports"

export type IValidatorConstructorParams = [challenge?: any, message?: string]

export interface IValidatorConstructor {
	new(challenge?: any, message?: string): IValidator
}

export interface IValidator {
	name: string
	message: string
	challenge: any

	setValidate(validate: (value: any) => boolean): any
	validate<T>(value: T): boolean
	report(value: any): Report
}


export class Validator implements IValidator {

	name = "generic"
	message = "generic validator don't pass"
	challenge: any

	constructor(challenge?: any, message?: string) {
		this.message = message ?? this.message
		this.validate = challenge ?? this.validate
	}

	setValidate(validate: (value: any) => boolean): void {
		this.validate = validate
	}

	validate(value: any): boolean {
		throw new Error("Method not implemented.")
	}

	report(value?: any): Report {
		return {
			name: this.name,
			pass: this.validate(value),
			message: this.message,
			challenge: this.challenge,
			value: value
		}
	}
}