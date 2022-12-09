import { EqualTests, PlayTest } from "./equal.tests";
import { EmailValidator } from "./validator.email";



const playtests: PlayTest[] = [

	// Conform Email

	{
		validator: new EmailValidator(),
		test: "abc.def@ghi.jkl",
		shouldBe: true
	},
	{
		validator: new EmailValidator(),
		test: "Test@1234.fr",
		shouldBe: true
	},

	// 

	{
		validator: new EmailValidator(),
		test: undefined,
		shouldBe: false
	},
	{
		validator: new EmailValidator(),
		test: "",
		shouldBe: false
	},

	// Without @

	{
		validator: new EmailValidator(),
		test: "zfazgmail.com",
		shouldBe: false
	},

	// Without tld

	{
		validator: new EmailValidator(),
		test: "salut@gmailcom",
		shouldBe: false
	},

	// Without account name

	{
		validator: new EmailValidator(),
		test: "@gmail.com",
		shouldBe: false
	},

	// Without fqdn

	{
		validator: new EmailValidator(),
		test: "salut@",
		shouldBe: false
	},

]




/**
 * 
 * RUN TESTS
 * 
 */

EqualTests(`EmailValidator`, playtests)


