import joi from "joi";

export const registerUserSchema = joi.object({
    user_id: joi.string(),
    name: joi.string(),
    email: joi.string().email(),
    role: joi.string(),
    password: joi.string(),
    areaofspecialization: joi.string(),
});
