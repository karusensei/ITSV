import { Field } from '../fields/exports';
import { Report, SchemaReport } from '../reports/exports';
import { RequiredValidator, Validator } from '../validators/exports';


export interface SchemaDef {
	[key: string]: Field | Schema | Field[] | Schema[]
}

export class Schema {
	protected schema: SchemaDef
	protected field = "schema"
	protected validators: Array<Validator> = []


	constructor(schemaDef: SchemaDef, requiredMessage?: string) {
		this.schema = schemaDef
		this.required(requiredMessage)
	}

	required(message?: string, required: boolean = false) {
		let requiredVal = this.validators.findIndex(
			validator => validator.name = "required"
		)

		if (requiredVal === -1) {
			this.validators.push(
				new RequiredValidator(required, message)
			)
		}
		else {
			this.validators[requiredVal] = new RequiredValidator(required, message)
		}
		return this
	}

	static parse(json: { [key: string]: any }): Schema {
		try {
			if (json.field === "schema") {

				const schema = Schema.parse(json.schema)

				const requiredValidator = json.validators.find(
					(validator: any) => validator.name === "required"
				) as RequiredValidator

				if (requiredValidator) {
					schema.required(
						requiredValidator.message,
						requiredValidator.challenge
					)
				}

				return schema

			} else {
				let schemaDef: SchemaDef = {}
				Object.entries(json).map(([fieldname, field]) => {
					if (Array.isArray(field)) {
						let arrayField = field[0]
						if (arrayField.field === "schema") {
							schemaDef[fieldname] = [Schema.parse(arrayField)]
						} else {
							schemaDef[fieldname] = [Field.parse(arrayField)]
						}
					} else {
						if (field.field === "schema") {
							schemaDef[fieldname] = Schema.parse(field)
						} else {
							schemaDef[fieldname] = Field.parse(field as Field)
						}
					}
				})
				return new Schema(schemaDef)
			}
		}
		catch (error) {
			console.log(error)
			throw new Error("SCHEMA-PARSING-ERROR")
		}
	}

	get requiredValidator(): RequiredValidator | undefined {
		return this.validators.find(
			validator => validator instanceof RequiredValidator
		) as RequiredValidator
	}



	validate(value?: any): boolean {
		if (value) {
			return Object.entries(this.schema).every(([fieldname, field]) => {
				if (Array.isArray(field)) {
					let arrayField = field[0]
					if (!Array.isArray(value[fieldname])) {
						return false
					}
					let arrayValue = value[fieldname] as Array<any>
					return arrayValue.every(
						v => arrayField.validate(v)
					)
				} else {
					return field.validate(value[fieldname])
				}
			})
		} else {
			return !this.requiredValidator
		}
	}


	report(value?: any): any {
		if (value) {
			let schemaReport: SchemaReport = {}
			Object.entries(this.schema).map(([fieldname, field]) => {
				if (Array.isArray(field)) {
					let arrayField = field[0]
					if (!Array.isArray(value[fieldname])) {
						let report: Report = {
							challenge: "array",
							message: "must be an array",
							name: "instance",
							pass: false,
							value: value[fieldname]
						}
						schemaReport[fieldname] = report
					}
					let arrayValue = value[fieldname] as Array<any>
					let arrayReport = arrayValue.map(
						v => arrayField.report(v)
					)
					schemaReport[fieldname] = arrayReport
				} else {
					return schemaReport[fieldname] = field.report(value[fieldname])
				}
			})
			return schemaReport
		} else {
			return this.validators.map(validator => validator.report())
		}
	}
}
