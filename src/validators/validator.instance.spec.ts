import { EqualTests, PlayTest } from "./test"
import { InstanceValidator } from "./validator.instance"





const playtests :PlayTest[] = [

	// Pass test

	{
		validator: new InstanceValidator("array"),
		test: ["a"],
		shouldBe: true
	},
	{
		validator: new InstanceValidator("array"),
		test: [],
		shouldBe: true
	},
	{
		validator: new InstanceValidator("array"),
		test: 850000000,
		shouldBe: false
	},
	{
		validator: new InstanceValidator("array"),
		test: true,
		shouldBe: false
	},
	{
		validator: new InstanceValidator("array"),
		test: undefined,
		shouldBe: false
	},


	{
		validator: new InstanceValidator("date"),
		test: new Date(),
		shouldBe: true
	},
	{
		validator: new InstanceValidator("date"),
		test: 850000000,
		shouldBe: false
	},
	{
		validator: new InstanceValidator("date"),
		test: true,
		shouldBe: false
	},



	{
		validator: new InstanceValidator("object"),
		test: new Date(),
		shouldBe: true
	},
	{
		validator: new InstanceValidator("object"),
		test: {},
		shouldBe: true
	},
	{
		validator: new InstanceValidator("date"),
		test: 850000000,
		shouldBe: false
	},
	{
		validator: new InstanceValidator("date"),
		test: true,
		shouldBe: false
	},
]


EqualTests("InstanceValidator", playtests)




