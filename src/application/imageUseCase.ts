import { IResponseUseCase } from "../domain/application/IResponseUseCase";
import { IImageCreate } from "../domain/image.interface";
import { IRepositoryImage } from "../domain/repository/IRepositoryImage";

export type TypeImageUseCase = (event: IImageCreate) => Promise<IResponseUseCase>;

export const imageUseCase = ({ repository }: { repository: IRepositoryImage }): TypeImageUseCase => async (event: IImageCreate): Promise<IResponseUseCase> => {
    try {
        const name = `${Date.now}.${event.fileType.split("/")[1]}`;
        const imageToStore = {
            ...event,
            name
        };
        const url = await repository.storeImage(imageToStore);
        return {
            message: url
        };
    } catch (error) {
        throw error;
    }
};