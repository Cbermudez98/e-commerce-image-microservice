export interface IImage {
    name: string;
    image: string;
    fileType: string;
}

export interface IImageCreate extends Omit<IImage, "name"> {}