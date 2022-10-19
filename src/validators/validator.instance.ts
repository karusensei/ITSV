import { Validator } from "./validator"

type TInstances = "array" | "date" | "object"

const Instances: {[key in TInstances] : any} = {
	array: Array,
	date: Date,
	object: Object
}


export class InstanceValidator extends Validator {
	name = "instance"
	challenge: TInstances
	constructor(
		instance: TInstances,
		message: string = "Submitted data is not a valid instance of"
	) {
		super()
		this.challenge = instance
		this.message = message
	}
	validate(value: any): boolean {
		return value instanceof Instances[this.challenge]
	}
}