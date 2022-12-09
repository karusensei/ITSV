import { equal } from "assert";
import { RequiredValidator} from "./validator.required";

let validatorParam: boolean | undefined = true
let test: any = "submitted"
let shouldbe = true

describe("RequiredValidator", () => {

	describe("validate()", () => {

		// ValidatorParam setted to true

		validatorParam = true;
		
		test = "any" ; shouldbe = true
		it(`validatorParam = [${validatorParam}]\t val = ${test}\t ${shouldbe}`, () => {
			equal(new RequiredValidator(validatorParam).validate(test), shouldbe);
		})

		test = null; shouldbe = false
		it(`validatorParam = [${validatorParam}]\t val = ${test}\t ${shouldbe}`, () => {
			equal(new RequiredValidator(validatorParam).validate(test), shouldbe);
		})

		test = undefined; shouldbe = false
		it(`validatorParam = [${validatorParam}]\t val = ${test}\t ${shouldbe}`, () => {
			equal(new RequiredValidator(validatorParam).validate(test), shouldbe);
		})


		// Validator param setted to false

		validatorParam = false
		
		test = "any"; shouldbe = true
		it(`validatorParam = [${validatorParam}]\t val = ${test}\t ${shouldbe}`, () => {
			equal(new RequiredValidator(validatorParam).validate(test), shouldbe);
		})

		test = null; shouldbe = true
		it(`validatorParam = [${validatorParam}]\t val = ${test}\t ${shouldbe}`, () => {
			equal(new RequiredValidator(validatorParam).validate(test), shouldbe);
		})

		test = undefined; shouldbe = true
		it(`validatorParam = [${validatorParam}]\t val = ${test}\t ${shouldbe}`, () => {
			equal(new RequiredValidator(validatorParam).validate(test), shouldbe);
		})

		// Validator param as default value
		validatorParam = undefined

		test = "any" ; shouldbe = true
		it(`validatorParam = [${validatorParam}]\t val = ${test}\t ${shouldbe}`, () => {
			equal(new RequiredValidator().validate(test), shouldbe);
		})

		test = null; shouldbe = false
		it(`validatorParam = [${validatorParam}]\t val = ${test}\t ${shouldbe}`, () => {
			equal(new RequiredValidator().validate(test), shouldbe);
		})

		test = undefined; shouldbe = false
		it(`validatorParam = [${validatorParam}]\t val = ${test}\t ${shouldbe}`, () => {
			equal(new RequiredValidator().validate(test), shouldbe);
		})

	})

});