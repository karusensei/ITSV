import { BulkValidatorTest } from "./bulk.tests"
import { booleanTestsValue, EqualTests, nullableTestsValue, PlayTest } from "./equal.tests"
import { InstanceValidator } from "./validator.instance"


BulkValidatorTest(
	"InstanceValidator",
	new InstanceValidator("array"),
	[
		{
			shouldBe: true,
			tests: [
				[], [0,1,2], ["a", new Date(), 0, ...nullableTestsValue],
				[...booleanTestsValue]
			]
		},
		{
			shouldBe: false,
			tests: [
				...nullableTestsValue, ...booleanTestsValue, 0, 1, 2, -1, -2,
				"aaa", "bbb", 850000000
			]
		},
	]
)

BulkValidatorTest(
	"InstanceValidator",
	new InstanceValidator("date"),
	[
		{
			shouldBe: true,
			tests: [
				new Date()
			]
		},
		{
			shouldBe: false,
			tests: [
				...nullableTestsValue, ...booleanTestsValue, 0, 1, 2, -1, -2,
				"aaa", "bbb", 850000000
			]
		},
	]
)

BulkValidatorTest(
	"InstanceValidator",
	new InstanceValidator("object"),
	[
		{
			shouldBe: true,
			tests: [
				{1: 2}, {a : "b"}, {b: {c:"d"}}, [], [0,1,2], ["a", new Date(), 0, ...nullableTestsValue],
				[...booleanTestsValue]
			]
		},
		{
			shouldBe: false,
			tests: [
				...nullableTestsValue, ...booleanTestsValue, 0, 1, 2, -1, -2,
				"aaa", "bbb", 850000000
			]
		},
	]
)




