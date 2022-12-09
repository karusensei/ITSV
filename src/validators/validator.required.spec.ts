import { equal } from "assert";
import { RequiredValidator} from "./validator.required";

let validatorParam: boolean | undefined = true
let test: any = "submitted"
let shouldbe = true


import { EqualTests, PlayTest } from "./test"





const playtests :PlayTest[] = [

	// Pass test

	{
		validator: new RequiredValidator() ,
		test: "any",
		shouldBe: true
	},
	{
		validator: new RequiredValidator() ,
		test: false,
		shouldBe: true
	},
	{
		validator: new RequiredValidator() ,
		test: true,
		shouldBe: true
	},



	{
		validator: new RequiredValidator() ,
		test: null,
		shouldBe: false
	},
	{
		validator: new RequiredValidator() ,
		test: undefined,
		shouldBe: false
	},


	{
		validator: new RequiredValidator(false) ,
		test: "any",
		shouldBe: true
	},
	{
		validator: new RequiredValidator(false) ,
		test: false,
		shouldBe: true
	},
	{
		validator: new RequiredValidator(false) ,
		test: true,
		shouldBe: true
	},



	{
		validator: new RequiredValidator(false) ,
		test: null,
		shouldBe: true
	},
	{
		validator: new RequiredValidator(false) ,
		test: undefined,
		shouldBe: true
	},


]


EqualTests("RequiredValidator", playtests)
