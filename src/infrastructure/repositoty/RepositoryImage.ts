import { IImage } from "../../domain/image.interface";
import { IRepositoryImage } from "../../domain/repository/IRepositoryImage";
import { IS3Service } from "../../domain/service/IS3Service";

export class RepositoryImage implements IRepositoryImage {
    private s3Service: IS3Service;
    constructor(bucketService: IS3Service) {
        this.s3Service = bucketService;
    }
    async storeImage(image: IImage): Promise<string> {
        try {
            return await this.s3Service.uploadImage(image);
        } catch (error) {
            throw error;
        }
    }
}