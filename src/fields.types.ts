import { GenericField, BooleanField, NumberField, StringField, DateField } from "./fields"
import { IValidatorReport } from "./reports.types"
import { GenericValidator, TValidatorFunction } from "./validators/exports"


export type TFieldName = "generic" | "boolean" | "number" | "string" | "date"

export interface IField {
	field: TFieldName
	validators: Array<GenericValidator>
	get required(): boolean
	setRequired(message?: string): GenericField
	setValidators(validators: Array<GenericValidator>): GenericField
	setAnonymousValidators(anonymousValidators: Array<TValidatorFunction>): GenericField
	validate(value: any): boolean
	report(value?: any): IValidatorReport[]
}


export const Fields = {
	generic: GenericField,
	boolean: BooleanField,
	number: NumberField,
	string: StringField,
	date: DateField
}