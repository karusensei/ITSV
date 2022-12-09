import { EqualTests, PlayTest } from "./test"
import { MinValidator } from "./validator.min"

const playtests :PlayTest[] = [

	{
		validator: new MinValidator(10),
		test: 10,
		shouldBe: true
	},

	{
		validator: new MinValidator(10),
		test: 11,
		shouldBe: true
	},

	{
		validator: new MinValidator(1),
		test: true,
		shouldBe: true
	},

	{
		validator: new MinValidator(0),
		test: true,
		shouldBe: true
	},

	{
		validator: new MinValidator(0),
		test: false,
		shouldBe: true
	},


	{
		validator: new MinValidator(10),
		test: 0,
		shouldBe: false
	},

	{
		validator: new MinValidator(10),
		test: false,
		shouldBe: false
	},

	{
		validator: new MinValidator(10),
		test: true,
		shouldBe: false
	},

	{
		validator: new MinValidator(10),
		test: undefined,
		shouldBe: false
	},

]


EqualTests("MinValidator", playtests)