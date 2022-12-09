import { equal } from "assert";
import { EqualTests, PlayTest } from "./equal.tests";
import { DateValidator, DateValidator as TestingValidator} from "./validator.date";


let validatorParam: string | undefined = undefined
let test: any = ""
let shouldbe = true


const playtests: PlayTest[] = [
	{
		validator: new DateValidator(),
		test: 1667722518283,
		shouldBe: true
	},
	{
		validator: new DateValidator(),
		test: "2022-11-06T08:15:18.283Z",
		shouldBe: true
	},
	{
		validator: new DateValidator(),
		test: "non-date-value",
		shouldBe: false
	},
	{
		validator: new DateValidator(),
		test: undefined,
		shouldBe: false
	},

	// Boolean is also a number...

	{
		validator: new DateValidator(),
		test: true,
		shouldBe: true
	},
	{
		validator: new DateValidator(),
		test: false,
		shouldBe: true
	},
]

EqualTests("DateValidator", playtests)
