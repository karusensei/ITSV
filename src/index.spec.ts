import { equal } from "assert";
import { randomUUID } from "crypto";
import { DateField } from "./fields/field.date";
import { NumberField } from "./fields/field.number";
import { StringField } from "./fields/field.string";
import { Schema } from "./schema/schema";


const schemaDef = {
//	'@timestamp': new DateField(),
	host: new Schema({
		id: new StringField().required(),
//		hostname: new StringField().required()
	}).required(undefined, true),
/*
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
	})*/
}

const data_sample = {
//	'@timestamp': new Date(),
	host: {
		id: randomUUID(),
//		hostname: "host1.example.com"
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


const schema = new Schema({
//	nested: new Schema(schemaDef),
	...schemaDef
}).required(undefined, false)

const data = {
//	nested: data_sample,
	...data_sample
}

describe(`Schema`, () => {
	describe(`Simple Validation`, () => {
		it(`TRUE`, () => {
			equal(schema.validate(data), true)

		})
	}),
	describe(`Schema JSONify, parse and validate`, () => {
		it(`TRUE`, () => {
			equal(Schema.parse(JSON.parse(JSON.stringify(schema))).validate(data), true)

		})
	}),
	describe(`Schema JSONify, parse must be equal`, () => {
		it(`TRUE`, () => {
			equal(JSON.stringify(Schema.parse(JSON.parse(JSON.stringify(schema)))), JSON.stringify(schema))

		})
	})
})

console.time("Parsing")
console.time("Request")
console.log(JSON.stringify(schema))
console.timeEnd("Parsing")

console.log(JSON.stringify(schema.report(data)))

console.timeEnd("Request")


console.log(JSON.stringify(schema, undefined, "\t"))

Schema.parse(JSON.parse(JSON.stringify(schema, undefined, "\t")))