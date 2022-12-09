import { EqualTests } from "./equal.tests"
import { Validator } from "./validator"

type Test = any

export function TrueFalseBulkTests(
	validatorName: string,
	validator: Validator,
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