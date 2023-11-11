import Joi from "joi";
import { IImageCreate } from "../../../domain/image.interface";

const image = Joi.string();
const fileType = Joi.string();


export const imageSchema: Joi.Schema<IImageCreate> = Joi.object({
    image: image.required(),
    fileType: fileType.required()
});