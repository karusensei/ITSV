import { assert } from "console"
import { DateField, GenericField } from "./fields"
import * as ITSV from "./index"

/**
 * Manual file for testing
 */

const nested:ITSV.SchemaDef = {
	date: new DateField()
}

const schemaDef: ITSV.SchemaDef = {
	...nested,
	nested: new ITSV.Schema(nested).setRequired("CUSTOM REQUIRED MESSAGE")
}

const dataset = {
	date: '2022-10-11'
}

const data = {
	...dataset,

}
/*
const jsonData = JSON.stringify(data)


const schema = new Schema(schemaDef)


console.log("PASS :", schema.validate(data))

console.log("RAPPORT :", schema.report(data))

console.log("TOJSON :",schema.toJSON)

console.log("PARSED JSON EQUALS INITIAL JSON ?", schema.toJSON === Schema.parseJsonString(schema.toJSON).toJSON)

console.log("PARSED JSON IS VALID ?", Schema.parseJsonString(schema.toJSON).report(JSON.parse(jsonData)))
*/


console.log("TESTING REQUIRED VALIDATOR", new ITSV.RequiredValidator(true), new ITSV.RequiredValidator(true).validate())

assert(!new ITSV.RequiredValidator(true).validate(), "OK")