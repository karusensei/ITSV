export interface SchemaReport {
	[key: string]: Report | SchemaReport | SchemaReport[] | Report[]
}
export interface Report {
	name: string,
	pass: boolean,
	message: string,
	challenge: any,
	value: any
}