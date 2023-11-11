import { TypeImageUseCase, imageUseCase } from "./application/ImageUseCase";
import { httpHandler } from "./infrastructure/handler/httpHandler";
import { RepositoryImage } from "./infrastructure/repositoty/RepositoryImage";
import { S3Service } from "./infrastructure/service/S3Service";

const bucketService = new S3Service();
const repository = new RepositoryImage(bucketService);
const useCase: TypeImageUseCase = imageUseCase({
    repository
});

export const handler = httpHandler(useCase);