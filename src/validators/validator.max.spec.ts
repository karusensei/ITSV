import { EqualTests, PlayTest } from "./test"
import { MaxValidator } from "./validator.max"

const playtests :PlayTest[] = [

	{
		validator: new MaxValidator(10),
		test: 10,
		shouldBe: true
	},

	{
		validator: new MaxValidator(10),
		test: 0,
		shouldBe: true
	},

	{
		validator: new MaxValidator(10),
		test: false,
		shouldBe: true
	},

	{
		validator: new MaxValidator(10),
		test: true,
		shouldBe: true
	},

	{
		validator: new MaxValidator(10),
		test: 11,
		shouldBe: false
	},

	{
		validator: new MaxValidator(10),
		test: undefined,
		shouldBe: false
	},

]


EqualTests("MaxValidator", playtests)
