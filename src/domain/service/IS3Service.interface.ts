import { IImage } from "../image.interface";

export interface IS3Service {
    uploadImage: (image: IImage) => Promise<string>;
}