import { GenericField } from "./fields";
import { ISchemaReport, IValidatorReport } from "./reports.types";
import { Schema } from "./schema";
import { GenericValidator, RequiredValidator } from "./validators/exports";

export interface ISchemaDef {
	[key: string]: GenericField | Schema
}

export interface ISchema {
	schema: ISchemaDef
	validators: [RequiredValidator]
	get serialized(): ISchemaDef
	get toJSON():string
	get requiredValidator(): RequiredValidator
	get required(): boolean
	setRequired(message ?:string): void
	validate(data ?: {[key:string]: any}):boolean
	report(data?: { [key: string]: any}): ISchemaReport | IValidatorReport[]
}