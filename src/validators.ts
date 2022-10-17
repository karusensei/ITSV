import { IValidatorReport } from "./reports.types"
import { TInstances, Instances } from "./validators.instances"
import { TType } from "./validators.types"

export class GenericValidator {

	name = "generic"
	message = "generic validator don't pass"
	challenge: any

	constructor(challenge?: any, message?: string) {
		this.message = message ?? this.message
		this.validate = challenge ?? this.validate
	}

	validate(value: any): boolean {
		throw new Error("Method not implemented.")
	}

	report(value: any): IValidatorReport {
		return {
			name: this.name,
			pass: this.validate(value),
			message: this.message,
			challenge: this.challenge,
			value: value
		}
	}
}


export class RequiredValidator extends GenericValidator {
	name = "required"
	challenge: boolean
	constructor(
		required: boolean = true,
		message: string = "Field missing"
	) {
		super()
		this.message = message
		this.challenge = required
	}
	get required(): any {
		return this.challenge
	}
	validate(value?: any): boolean {
		console.log(this.challenge, value)
		if (this.challenge && (value === null || value === undefined)) {
			return false
		} else {
			return true
		}
	}
}


export class TypeValidator extends GenericValidator {
	name = "type"
	challenge: TType
	constructor(
		type: TType,
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


export class MinLengthValidator extends GenericValidator {
	name = "minlength"
	challenge: number
	constructor(
		minlength: number,
		message: string = "Length too small"
	) {
		super()
		this.message = message
		this.challenge = minlength
	}
	validate(value: string) {
		return value.length >= this.challenge
	}
}


export class MaxLengthValidator extends GenericValidator {
	name = "maxlength"
	challenge: number
	constructor(
		maxlength: number,
		message: string = "Length too large"
	) {
		super()
		this.message = message
		this.challenge = maxlength
	}

	validate(value: string) {
		return value.length <= this.challenge
	}
}


export class MinValidator extends GenericValidator {
	name = "min"
	challenge: number
	constructor(
		min: number,
		message: string = "Number too small"
	) {
		super()
		this.message = message
		this.challenge = min
	}
	validate(value: number): boolean {
		return value >= this.challenge
	}
}


export class MaxValidator extends GenericValidator {
	name = "max"
	challenge: number
	constructor(
		max: number,
		message: string = "Number too large"
	) {
		super()
		this.message = message
		this.challenge = max
	}
	validate(value: number): boolean {
		return value <= this.challenge
	}
}


export class RegExpValidator extends GenericValidator {
	name = "regexp"
	challenge: string
	constructor(
		regexp: RegExp,
		message: string = "Regular expression does not match"
	) {
		super()
		this.message = message
		this.challenge = regexp.source
	}
	validate(value: string): boolean {
		return new RegExp(this.challenge).test(value)
	}
}


export class ChoiceValidator extends GenericValidator {
	name = "choice"
	challenge: Array<any> = []
	constructor(
		choices: Array<any>,
		message: string = "Choice must be in array"
	) {
		super()
		this.message = message
		this.challenge = choices
	}
	validate(value: any[]) {
		return value.every((v) => this.challenge.some((element) => v === element))
	}
}


export class PasswordValidator extends RegExpValidator {
	name = "password"
	constructor(
		regexp: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/,
		message: string = "Password must contains lowercase uppercase numbers and special chars '#?!@$%^&*-'"
	) {
		super(regexp, message)
	}
}

export class EmailValidator extends RegExpValidator {
	name = "email"
	constructor(
		regexp: RegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
		message: string = "Please enter a valid email address"
	) {
		super(regexp, message)
	}
}

export class InstanceValidator extends GenericValidator {
	name = "instance"
	challenge: TInstances
	constructor(
		instance: TInstances,
		message: string = "Submitted data is not a valid instance of"
	) {
		super()
		this.challenge = instance
		this.message = message
	}
	validate(value: any): boolean {
		return value instanceof Instances[this.challenge]
	}
}

export class DateValidator extends GenericValidator {
	name = "date"
	challenge: string
	constructor(
		instance: string = "date",
		message: string = `Submitted value must be a valid date`
	) {
		super()
		this.message = message
		this.challenge = instance
	}
	validate(value: string | Date): boolean {
		let date = new Date()
		if (value instanceof Date) {
			date = value
		} else {
			date = new Date(value)
		}
		return !isNaN(date.valueOf())
	}
}


export class NotBeforeValidator extends GenericValidator {
	name = "notbefore"
	challenge: Date
	constructor(
		notBefore: Date | string = new Date(),
		message: string = "Date too early"
	) {
		super()
		if (notBefore instanceof Date) {
			this.challenge = notBefore
		} else {
			this.challenge = new Date(notBefore)
		}
		this.message = message
	}
	validate(value: Date): boolean {
		return value <= this.challenge
	}
}



export class NotAfterValidator extends GenericValidator {
	name = "notafter"
	challenge: Date
	constructor(
		notAfter: Date | string = new Date(),
		message: string = "Date too late"
	) {
		super()
		if (notAfter instanceof Date) {
			this.challenge = notAfter
		} else {
			this.challenge = new Date(notAfter)
		}
		this.message = message
	}
	validate(value: Date): boolean {
		return value >= this.challenge
	}
}