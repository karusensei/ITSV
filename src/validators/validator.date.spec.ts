import { BulkValidatorTest } from "./bulk.tests";
import { nullableTestsValue } from "./equal.tests";
import { DateValidator } from "./validator.date";



BulkValidatorTest(
	"DateValidator",
	new DateValidator(),
	[
		{
			shouldBe: true,
			tests: [
				1667722518283,
				"2022-11-06T08:15:18.283Z",
				true,
				false
			],
		}, {
			shouldBe: false,
			tests: [
				"not-a-date",
				nullableTestsValue,
				1564898456465432154987798,
				{ hello: "ola"}
			]
		}
	]
)
