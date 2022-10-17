import { RegExpValidator } from "./validator.regexp"

export class PasswordValidator extends RegExpValidator {
	name = "password"
	constructor(
		regexp: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/,
		message: string = "Password must contains lowercase uppercase numbers and special chars '#?!@$%^&*-'"
	) {
		super(regexp, message)
	}
}