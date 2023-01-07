import { TValidatorFunction, Validator } from "../validators/exports";
import { Field } from "./field";


export class CustomField extends Field {

	constructor(
		readonly field: string = "custom",
		public validators: Validator[]
		) {
		super()
	}

}