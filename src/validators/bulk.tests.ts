import { Field } from "../fields/field"
import { Schema } from "../schema/schema"
import { EqualTests } from "./equal.tests"
import { Validator } from "./validator"

type Test = any
/**
 * 
 * @param validatorName 
 * @param validator 
 * @param testList 
 */
export function BulkValidatorTest(
	validatorName: string,
	validator: Validator | Field | Schema,
	testList: {
		shouldBe: boolean,
		tests: any[]
	}[]
) {
	testList.map((tests:any) => {
		EqualTests(
			validatorName,
			tests.tests.map((test: Test) => {
				return {
					validator: validator,
					test: test,
					shouldBe: tests.shouldBe
				}
			})
		)
	})
}