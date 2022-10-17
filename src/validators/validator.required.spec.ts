import { equal } from "assert";
import { RequiredValidator} from "./validator.required";

describe("RequiredValidator", () => {

	describe("validate()", () => {
		it(`should be true when required = true and submitted not null or undefined`, () => {
			equal(new RequiredValidator(true).validate("submitted"), true);
		})

		it(`should be false when required = true and submitted is null`, () => {
			equal(new RequiredValidator(true).validate(null), false);
		})

		it(`should be false when required = true and submitted is undefined`, () => {
			equal(new RequiredValidator(true).validate(undefined), false);
		})

		it(`should be true when required = false and submitted is submitted`, () => {
			equal(new RequiredValidator(false).validate("submitted"), true);
		})

		it(`should be true when required = false and submitted is null`, () => {
			equal(new RequiredValidator(false).validate(null), true);
		})

		it(`should be true when required = false and submitted is undefined`, () => {
			equal(new RequiredValidator(false).validate(undefined), true);
		})

	})

});