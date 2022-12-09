import { equal } from "assert";
import { DateValidator as TestingValidator} from "./validator.date";


let validatorParam: string | undefined = undefined
let test: any = ""
let shouldbe = true


describe("DateValidator", () => {

	describe(`validate()`, () => {

		// ValidatorParam with default value
		test = 1667722518283 ; shouldbe = true
		it(`ValidatorParam = [${validatorParam}]\t val = ${test}\t ${shouldbe}`, () => {
			equal(new TestingValidator().validate(test), shouldbe);
		})

		test = "2022-11-06T08:15:18.283Z" ; shouldbe = true
		it(`ValidatorParam = [${validatorParam}]\t val = ${test}\t ${shouldbe}`, () => {
			equal(new TestingValidator().validate(test), shouldbe);
		})

		test = "NonDateValue" ; shouldbe = false
		it(`ValidatorParam = [${validatorParam}]\t val = ${test}\t ${shouldbe}`, () => {
			equal(new TestingValidator().validate(test), shouldbe);
		})

		// ValidatorParam as custom value (only date expected)
		validatorParam = "date"
		
		test = 1667722518283 ; shouldbe = true
		it(`ValidatorParam = [${validatorParam}]\t val = ${test}\t ${shouldbe}`, () => {
			equal(new TestingValidator(validatorParam).validate(test), shouldbe);
		})

		test = "2022-11-06T08:15:18.283Z" ; shouldbe = true
		it(`ValidatorParam = [${validatorParam}]\t val = ${test}\t ${shouldbe}`, () => {
			equal(new TestingValidator(validatorParam).validate(test), shouldbe);
		})

		test = "NonDateValue" ; shouldbe = false
		it(`ValidatorParam = [${validatorParam}]\t val = ${test}\t ${shouldbe}`, () => {
			equal(new TestingValidator(validatorParam).validate(test), shouldbe);
		})

	})

});