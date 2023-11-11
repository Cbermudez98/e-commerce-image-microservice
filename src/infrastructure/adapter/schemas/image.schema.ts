import Joi, { string } from "joi";
import { IImageCreate } from "../../../domain/image.interface";

const image = string();
const filetype = string();


export const imageSchema: Joi.Schema<IImageCreate> = Joi.object({
    image: image.required(),
    filetype: filetype.required()
});