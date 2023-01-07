import { BulkValidatorTest } from "./bulk.tests";
import { NotAfterValidator } from "./validator.notafter";

BulkValidatorTest(
	"InstanceValidator",
	new NotAfterValidator(new Date(50000)),
	[
		{
			shouldBe: true,
			tests: [
				new Date(45000)
			]
		},
		{
			shouldBe: false,
			tests: [
				new Date(55000)
			]
		},
	]
)