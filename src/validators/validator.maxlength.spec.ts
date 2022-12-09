
import { EqualTests, PlayTest } from "./equal.tests"
import { MaxLengthValidator } from "./validator.maxlength"

const playtests: PlayTest[] = [

	{
		validator: new MaxLengthValidator(10),
		test: "0123456789",
		shouldBe: true
	},
	{
		validator: new MaxLengthValidator(10),
		test: "abcd",
		shouldBe: true
	},
	{
		validator: new MaxLengthValidator(10),
		test: undefined,
		shouldBe: true
	},
	{
		validator: new MaxLengthValidator(10),
		test: null,
		shouldBe: true
	},
	{
		validator: new MaxLengthValidator(10),
		test: "012345678910",
		shouldBe: false
	},

]


EqualTests("MaxLengthValidator", playtests)
