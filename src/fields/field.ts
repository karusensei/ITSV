import { OptionalReport, Report, SchemaReport } from '../reports/exports';
import {
	RequiredValidator,
	TValidatorName,
	Validator,
	Validators,
} from '../validators/exports';


export interface IField {
	isRequired: boolean
	required(message: string): Field
	validate(value?: any): boolean
	report(value?: any): SchemaReport | Report[]
}

export class Field implements IField {
	validators: Array<Validator> = []

	constructor(
		readonly field: string = "generic"
	) { }

	get isRequired(): boolean {
		return this.requiredValidator?.challenge ?? false
	}

	get requiredValidator(): RequiredValidator | undefined {
		return this.validators.find(
			validator => validator instanceof RequiredValidator
		) as RequiredValidator
	}

	static parse(
		inputField: { field: string, validators: Validator[] }
			| Array<{ field: string, validators: Validator[] }>
	): Field {
		if (Array.isArray(inputField)) {
			var _field = inputField[0]
		} else {
			var _field = inputField
		}
		let field = new Field(_field.field)
		_field.validators.map(
			(validator: { name: string; challenge: any; message: any }) => {
				field.validators.push(
					new Validators[
						(validator.name as TValidatorName)
					](validator.challenge, validator.message)
				)
			})
		return field
	}

	required(message?: string, required: boolean = true) {
		let requiredValidatorIndex = this.validators.findIndex(
			validator => validator.name === "required"
		)

		if (requiredValidatorIndex === -1) {
			this.validators.push(
				new RequiredValidator(required, message)
			)
		}
		else {
			this.validators[requiredValidatorIndex] = new RequiredValidator(required, message)
		}
		return this
	}

	validate(value: any): boolean {
		if (value !== undefined && value !== null) {
			return this.validators.every((validator) => validator.validate(value))
		} else if (this.isRequired) {
			return false
		} else {
			return true
		}
	}

	report(value?: any): Report[] {
		if (value !== null && value !== undefined) {
			return this.validators.map(validator => validator.report(value))
		} else if (this.isRequired) {
			return [
				new RequiredValidator(true).report(undefined)
			]
		} else {
			return [OptionalReport]
		}
	}
}