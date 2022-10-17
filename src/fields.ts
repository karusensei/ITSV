import { IField, TFieldName } from "./fields.types"
import { OptionalReport } from "./reports"
import { IValidatorReport } from "./reports.types"
import { GenericValidator, RequiredValidator, TypeValidator, MinValidator, MaxValidator, MaxLengthValidator, MinLengthValidator, PasswordValidator, RegExpValidator, EmailValidator, DateValidator, NotBeforeValidator, NotAfterValidator } from "./validators"
import { TValidatorFunction } from "./validators.types"
import { Validators, TValidatorName } from "./validators.validators"


export class GenericField {
	field = "generic"
	validators: Array<GenericValidator> = []
	protected anonymousValidators: Array<TValidatorFunction> = []

	constructor(field?: string) {
		this.field = field ?? this.field
	}

	get required() {
		return (this.validators.find(validator => validator.name === "required") as RequiredValidator).required ?? false
	}


	static parse( _field:{[key: string]: any} ): GenericField {
		let field = (_field as IField)
		return new GenericField(field.field).setValidators(field.validators.map( validator => {
			return new Validators[(validator.name as TValidatorName)](validator.challenge, validator.message)
		}))
	}

	setRequired(message?: string) {
		this.validators.push(new RequiredValidator(true, message))
		return this
	}

	setValidators(validators: Array<GenericValidator>) {
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

	report(value?: any): IValidatorReport[] {
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


export class BooleanField extends GenericField {
	field = "boolean"
	constructor(message?: string) {
		super()
		this.validators.push(new TypeValidator("boolean", message))
	}
}




export class NumberField extends GenericField {
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




export class StringField extends GenericField {

	field = "string"

	constructor(message?: string) {
		super()
		this.validators.push(new TypeValidator("string", message))
	}

	minlength(minlength: number, message?: string) {
		this.validators.push(new MinLengthValidator(minlength, message))
		return this
	}

	maxlength(maxlength: number, message?: string) {
		this.validators.push(new MaxLengthValidator(maxlength, message))
		return this
	}

	regexp(regexp: RegExp, message?: string) {
		this.validators.push(new RegExpValidator(regexp, message))
		return this
	}

	password(
		regexp: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/,
		message?: string) {
		this.validators.push(new PasswordValidator(regexp, message))
		return this
	}

	email(
		regexp: RegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
		message?: string
	) {
		this.validators.push(new EmailValidator(regexp, message))
		return this
	}
}


export class DateField extends GenericField {
	field = "date"

	constructor(message: string = "Date must be valid") {
		super()
		this.validators.push(new DateValidator("date", message))
		return this
	}

	notBefore(date: Date | string, message?: string) {
		this.validators.push(new NotBeforeValidator(date, message))
		return this
	}

	notAfter(date: Date | string, message ?: string) {
		this.validators.push(new NotAfterValidator(date, message))
		return this
	}
}

