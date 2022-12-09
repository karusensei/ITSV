import * as ITSV from "./index"
import { Schema } from "./schema/schema"



const schemaDef: ITSV.SchemaDef = {
	num: new ITSV.NumberField("La donnée doit être un nombre")
		.setRequired("Champ obligatoire")
		.min(6, "Le nombre doit être >= 6")
		.max(12, "Le nombre doit être <= 12"),
	str: new ITSV.StringField("La donnée doit être une chaîne de caractères")
		.minlength(6, "Taille minimum : 6")
		.maxlength(16, "Taille maximum : 16")
		.regexp(/^[A-Z]*$/, "Que des lettres majuscules"),
	dat: new ITSV.DateField()
		.notBefore(new Date())
		.setRequired(),
	wrongDate: new ITSV.DateField()
		.setRequired()
}



const data = {
	num: 8,
	dat: new Date(),
	wrongDate: false,
	str: "ABCDEF"
}

const schema = new ITSV.Schema(schemaDef)

console.log(schema.report(data), schema.validate(data))
