import { BulkValidatorTest } from "./bulk.tests";
import { booleanTestsValue, EqualTests, nullableTestsValue, PlayTest } from "./equal.tests";
import { EmailValidator } from "./validator.email";



BulkValidatorTest(
	"EmailValidator",
	new EmailValidator(),
	[
		{
			shouldBe: true,
			tests : [
				"abc.def@ghi.jkl", "Test@1234.fr", "a.b-c@d.e.f.g-aa.com", "a.b-c_@d.e.f.g-aa.com"
			],
		}, {
			shouldBe: false,
			tests: [
				...nullableTestsValue, ...booleanTestsValue, "@gmail.com", "abc.def.test.com",
				"abc.def@", "test test test at.com", "a.b-c_@_d.e.f.g-aa.com", new Date(), 18, 1000,
				-1
			]
		}
	]
)


