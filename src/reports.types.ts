export interface ISchemaReport {
	[key: string]: IValidatorReport[] | ISchemaReport
}

export interface IValidatorReport {
	name: string,
	pass: boolean,
	message: string,
	challenge: any,
	value: any
}