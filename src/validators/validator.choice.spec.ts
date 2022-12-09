import { equal } from "assert";
import { EqualTests, PlayTest } from "./test";
import { ChoiceValidator} from "./validator.choice";


let validatorParam = ["A",5]
let test: any[] = ["A"]
let shouldbe = true


const playtest:PlayTest[] = [

	// Pass test

	{
		validator: new ChoiceValidator(["a"]),
		test: ["a"],
		shouldBe: true
	},
	{
		validator: new ChoiceValidator(["a"]),
		test: ["a"],
		shouldBe: true
	},

	// Empty test value

	{
		validator: new ChoiceValidator(["a"]),
		test: undefined,
		shouldBe: false
	},


	// Case sensitive

	{
		validator: new ChoiceValidator(["A"]),
		test: ["a"],
		shouldBe: false
	},

	// Not same type

	{
		validator: new ChoiceValidator(["a"]),
		test: [5],
		shouldBe: false
	},




] 


EqualTests("ChoiceValidator", playtest)
