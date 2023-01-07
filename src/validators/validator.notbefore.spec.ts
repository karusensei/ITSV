import { BulkValidatorTest } from "./bulk.tests";
import { NotBeforeValidator } from "./validator.notbefore";

BulkValidatorTest(
	"InstanceValidator",
	new NotBeforeValidator(new Date(50000)),
	[
		{
			shouldBe: false,
			tests: [
				new Date(45000)
			]
		},
		{
			shouldBe: true,
			tests: [
				new Date(55000)
			]
		},
	]
)