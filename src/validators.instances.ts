export type TInstances = "array" | "date" | "object"

export const Instances: {[key in TInstances] : any} = {
	array: Array,
	date: Date,
	object: Object
}