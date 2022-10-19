import {
	ChoiceValidator,
	DateValidator,
	EmailValidator,
	GenericValidator,
	InstanceValidator,
	MaxLengthValidator,
	MaxValidator,
	MinLengthValidator,
	MinValidator,
	NotAfterValidator,
	NotBeforeValidator,
	PasswordValidator,
	RegExpValidator,
	RequiredValidator,
	TypeValidator
	} from './exports';

export type TValidatorName = "generic"
	| "required"
	| "type"
	| "minlength"
	| "maxlength"
	| "min"
	| "max"
	| "regexp"
	| "choice"
	| "password"
	| "email"
	| "instance"
	| "date"
	| "notbefore"
	| "notafter"

export const Validators: {[key in TValidatorName]: any} = {
	generic: GenericValidator,
	required: RequiredValidator,
	type: TypeValidator,
	minlength: MinLengthValidator,
	maxlength: MaxLengthValidator,
	min: MinValidator,
	max: MaxValidator,
	regexp: RegExpValidator,
	choice: ChoiceValidator,
	password: PasswordValidator,
	email: EmailValidator,
	instance: InstanceValidator,
	date: DateValidator,
	notbefore: NotBeforeValidator,
	notafter: NotAfterValidator
}