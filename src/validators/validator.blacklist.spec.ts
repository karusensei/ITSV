
import { BulkValidatorTest } from "./bulk.tests"
import { booleanTestsValue, nullableTestsValue } from "./equal.tests"
import { BlacklistValidator } from "./validator.blacklist"

BulkValidatorTest(
	"BlacklistValidator",
	new BlacklistValidator([0, 10, 20, "abcd", "Abcd"]),
	[
		{
			shouldBe: false,
			tests: [0, 10, 20, "abcd"]
		}, {
			shouldBe: true,
			tests: [
				...nullableTestsValue, ...booleanTestsValue,
				1, 11, -1, 0.0000005, "a", "A", "ZA", "za",
			]
		}
	]

)