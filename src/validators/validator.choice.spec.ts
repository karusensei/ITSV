import { ChoiceValidator } from "./validator.choice";
import { TrueFalseBulkTests } from "./bulk.tests"
import { booleanTestsValue, nullableTestsValue } from "./equal.tests"




TrueFalseBulkTests(
	"ChoiceValidator",
	new ChoiceValidator([0, 10, 20, "abcd", "Abcd"]),
	[
		{
			shouldBe: true,
			tests: [[0], [10, 0], [20], ["abcd"], [0, 10, 20, "abcd", "Abcd"]]
		}, {
			shouldBe: false,
			tests: [
				[
					...nullableTestsValue, ...booleanTestsValue,
					1, 11, -1, 0.0000005, "a", "A", "ZA", "za",
					[1, 0], [new Date(355), 0]
				].flatMap(v => [v]),
				...nullableTestsValue,
				...booleanTestsValue, new Date(355),
				1, 11, -1, 0.0000005, "a", "A", "ZA", "za",
			]
		}
	]

)
