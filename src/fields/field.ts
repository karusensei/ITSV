import { OptionalReport, Report } from '../reports/exports';
import {
	RequiredValidator,
	TValidatorFunction,
	TValidatorName,
	Validator,
	Validators
	} from '../validators/exports';


export class Field {
	field = "generic"
	validators: Array<Validator> = []
	protected anonymousValidators: Array<TValidatorFunction> = []

	constructor(field?: string) {
		this.field = field ?? this.field
	}

	get required() {
		return (this.validators.find(validator => validator.name === "required") as RequiredValidator).required ?? false
	}


	static parse( _field:{[key: string]: any} ): Field {
		let field = (_field as Field)
		return new Field(field.field).setValidators(field.validators.map( (validator: { name: string; challenge: any; message: any }) => {
			return new Validators[(validator.name as TValidatorName)](validator.challenge, validator.message)
		}))
	}

	setRequired(message?: string) {
		this.validators.push(new RequiredValidator(true, message))
		return this
	}

	setValidators(validators: Array<Validator>) {
		this.validators = validators
		return this
	}

	setAnonymousValidators(anonymousValidators: Array<TValidatorFunction>) {
		this.anonymousValidators = anonymousValidators
		return this
	}


	validate(value: any): boolean {
		if (value !== undefined && value !== null) {
			return this.validators.every((validator) => validator.validate(value))
		} else if (this.required) {
			return false
		} else {
			return true
		}
	}

	report(value?: any): Report[] {
		if (value !== null && value !== undefined) {
			return this.validators.map(validator => validator.report(value))
		} else if (this.required /* && (value === null || value === undefined)*/) {
			return [
				new RequiredValidator(true).report(undefined)
			]
		} else {
			return [OptionalReport]
		}
	}
}