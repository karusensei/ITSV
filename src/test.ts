import { fstat, writeFileSync } from "fs"
import * as ITSV from "./index"
import { SchemaReport, Report } from "./reports/report"
import { Schema, SchemaDef } from "./schema/schema"



const schemaDef: ITSV.SchemaDef = {
	str: [new ITSV.StringField().required()],
	num: new ITSV.NumberField()
}

const data = {
	str: [10, "esfgh"],
	num: 33
}



const schema = new ITSV.Schema(schemaDef)

console.log(JSON.stringify(schema, undefined, "\t"))
/*
console.log(JSON.stringify(schemaNested.report(dataNested), undefined, "\t"))


writeFileSync("./src/schema.json", JSON.stringify(schema, undefined, "\t"))
writeFileSync("./src/schema_report.json", JSON.stringify(schemaNested.report(dataNested), undefined, "\t"))

console.log(schema.validate(data))
console.log(schemaNested.validate(dataNested))

let json = JSON.stringify(schema)
const schema2 = ITSV.Schema.parse(JSON.parse(json))

writeFileSync("./src/schema2.json", JSON.stringify(schema2, undefined, "\t"))


console.log("Schema 1 and 2 are same : ",JSON.stringify(schema) === JSON.stringify(schema2))

console.log("Schema 1 and 2 validation : ",schema.validate(dataNested), schema2.validate(dataNested))

console.log(JSON.stringify(schema))
console.log(JSON.stringify(schema.report(data), undefined, "\t"))
*/