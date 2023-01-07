
import { BulkValidatorTest } from "./bulk.tests"
import { booleanTestsValue, EqualTests, nullableTestsValue, PlayTest } from "./equal.tests"
import { MaxLengthValidator } from "./validator.maxlength"




BulkValidatorTest(
	"MaxLengthValidator",
	new MaxLengthValidator(10),
	[
		{
			shouldBe: true,
			tests: ["0", "0123456789"]
		},
		{
			shouldBe: false,
			tests: ["11.........","lorem ipsum oijo ijzeoi jzoiefj ozeijf oziejf ozeijo foze f",11,1234567891011, ...booleanTestsValue, 10,0,-1, ...nullableTestsValue  ]
		}


	]
)
