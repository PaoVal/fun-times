import Joi from "@hapi/joi";

// constants, may modify later
const NAME_MIN = 3; // min number of characters in username
const PASS_LEN_MIN = 5; // min length of password

const validSchema = Joi.object({
	Name: Joi.string().min(NAME_MIN).required(),
	Email: Joi.string().required().email(),
	Password1: Joi.string().min(PASS_LEN_MIN).required(),
	Password2: Joi.string().min(PASS_LEN_MIN).required()
});

export function regValidate(info) {
	const {error} = validSchema.validate(info);
	if (error != null) return error.details[0].message;
}