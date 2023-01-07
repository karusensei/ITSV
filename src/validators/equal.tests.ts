import { equal } from "assert";
import { Field, Schema } from "..";
import { Validator } from "./validator";

export interface PlayTest {
	validator: Validator | Field | Schema
	test: any,
	shouldBe: boolean
}


export const nullableTestsValue = [
	null,
	undefined
]

export const booleanTestsValue = [
	true,
	false
]

export function EqualTests(
	validatorName: string,
	playtests: PlayTest[]
) {

	describe(`${validatorName}`, () => {
		describe(`validate() : ${playtests.length} tests`, () => {

			playtests.forEach((playtest, index) => {


				it(`${index + 1}) ${validatorName}(${JSON.stringify(playtest.validator.challenge, undefined, 2)})
	validate( ${JSON.stringify(playtest.test)} ) === ${playtest.shouldBe}
`, () => {
					equal(
						playtest.validator.validate(playtest.test),
						playtest.shouldBe
					)

				})
			})
		})
	});
}

