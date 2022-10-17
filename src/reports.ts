import { IValidatorReport } from "./reports.types";

export const OptionalReport: IValidatorReport = {
	name: "optional",
	pass: true,
	message: "Optional value not submitted",
	challenge: "optional",
	value: "undefined"
}