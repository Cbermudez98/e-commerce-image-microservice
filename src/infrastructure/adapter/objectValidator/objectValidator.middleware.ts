import Joi from "joi";

export const objectValidator = (schema: Joi.Schema) => {
    return (event: Record<string, any>) => {
        const { error } = schema.validate(event);
        if (error) {
            throw {
                status: 400,
                message: "Bad Request"
            }
        } else {
            return true;
        }
    };
};