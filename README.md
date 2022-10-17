# Welcome to its-validation
A simple validation module written in typescript.


# Abstract
This validation module has be writtent to be simple to understand, easy to extend, and can be fully customizable.

There is 3 main component :
 - A `Schema` object
 - A collection of embedded `Field`
 - A collection of embedded `Validator`

Each of `XField` and `XValidator` is a child class of respectively `GenericField` and `GenericValidator`.

This module has be written to be used inside both frontend and backend project. You can use them for example in your API backend and FrontEnd project. `Schema.serialized` special function of schema can be send via JSON and can be used in your frontend to test user input in a form validation...

# API
## Validators
Validators must be derivated of `GenericValidator` that contains all sharable parameters such as name,  or message.

Each embedded `Validator` must be initialized in this constructor by two params :
 - A value to be tested (`min` for test if a number is greater than `min` value herself)
 - A message, that used for verbose reports of validation.

When a schema is serialized by callind his attribute `serialized` (a getter) or JSONyfied by calling this attribute `toJSON` the result can be sended over HTTP and can be rebuilded 
## Fields
A field must be derivated of `GenericField` and must implements `IField`.
## Schema


