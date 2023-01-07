import * as ITSV from "./index"
import { Schema } from "./schema/schema"



const schemaDef: ITSV.SchemaDef = {
	str: new ITSV.StringField("La donnée doit être une chaîne de caractères")
		.regexp(/^[A-Z]*$/, "Que des lettres majuscules"),
}

let finalSchema: ITSV.SchemaDef = {
	...schemaDef
}


const data = {
	str: "ABCaDEF"
}

const schema = new ITSV.Schema(finalSchema)


const schema2 = ITSV.Schema.fromJSON(schema.toJSON)

console.log(schema.toJSON)
console.log(schema2.toJSON)