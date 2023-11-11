import { IImage } from "../image.interface";

export interface IRepositoryImage {
    storeImage: (image: IImage) => Promise<string>;
}