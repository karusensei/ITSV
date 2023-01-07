import { equal } from "assert";
import { randomUUID } from "crypto";
import { CustomField } from "./fields/field.custom";
import { DateField } from "./fields/field.date";
import { NumberField } from "./fields/field.number";
import { StringField } from "./fields/field.string";
import { Schema, SchemaDef } from "./schema/schema";


const schema = new Schema({
	'@timestamp': new DateField(),
	host: new Schema({
		id: new StringField().required(),
		hostname: new StringField().required()
	}),
	counters: new Schema({
		negative: new NumberField().max(0),
		positive: new NumberField().min(0),
		positiveInterval: new NumberField().min(0).max(10),
		negativeInterval: new NumberField().min(-10).max(-1)
	}),
	date: new Schema({
		date: new DateField().required(),
		nbdate: new DateField().notBefore(new Date(50000)),
		nadate: new DateField().notAfter(new Date(50000)),
		ivdate: new DateField().notBefore(new Date(40000)).notAfter(new Date(50000))
	})
})

const data = {
	'@timestamp': new Date(),
	host: {
		id: randomUUID(),
		hostname: "host1.example.com"
	},
	counters: {
		negative: -5,
		positive: 5,
		positiveInterval: 5,
		negativeInterval: -5
	},
	date: {
		date: new Date(),
		nbdate: new Date(50001),
		nadate: new Date(49999),
		ivdate: new Date(45000)
	}
}


describe(`Schema`, () => {
	describe(`Simple Validation`, () => {
		it(`TRUE`, () => {
			equal(schema.validate(data), true)

		})
	}),
		describe(`Schema JSONify, parse and validate`, () => {
			it(`TRUE`, () => {
				equal(Schema.fromJSON(schema.toJSON).validate(data), true)

			})
		})
})

console.time("Parsing")
console.time("Request")
console.log(schema.toJSON)
console.timeEnd("Parsing")

console.log(JSON.stringify(schema.report(data)))

console.timeEnd("Request")
