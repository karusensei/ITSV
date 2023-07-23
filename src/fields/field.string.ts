import { EmailValidator, MaxLengthValidator, MinLengthValidator, PasswordValidator, RegExpValidator, RequiredValidator, TypeValidator } from "../validators/exports"
import { Field } from "./exports"



export class StringField extends Field {

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