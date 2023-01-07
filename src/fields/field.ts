import { OptionalReport, Report, SchemaReport } from '../reports/exports';
import { Schema } from '../schema/schema';
import {
	RequiredValidator,
	TValidatorFunction,
	TValidatorName,
	Validator,
	Validators
} from '../validators/exports';


export interface IField {
	isRequired: boolean
	required(message: string): Field | Schema
	validate(value?: any): boolean
	report(value?: any): SchemaReport | Report[]
}

export class Field implements IField{
	readonly validators: Array<Validator> = []

	constructor(
		readonly field: string = "generic"
	) { }

	get isRequired(): boolean {
		return this.validators.find(validator => validator instanceof RequiredValidator)?.challenge ?? false
	}

	static parse(_field: { field: string, validators: Validator[] }): Field {
		let field = new Field(_field.field)
		_field.validators.forEach((validator: { name: string; challenge: any; message: any }) => {
			field.validators.push(new Validators[(validator.name as TValidatorName)](validator.challenge, validator.message))
			//return new Validators[(validator.name as TValidatorName)](validator.challenge, validator.message)
		}, field)
		return field
	}

	required(message?: string) {
		this.validators.push(new RequiredValidator(true, message))
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