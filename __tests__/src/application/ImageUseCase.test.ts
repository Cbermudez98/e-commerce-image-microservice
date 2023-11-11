import { TypeImageUseCase, imageUseCase } from "../../../src/application/ImageUseCase";
import { IRepositoryImage } from "../../../src/domain/repository/IRepositoryImage.interface";

describe("Image use case test", () => {
    it("should response with success", async () => {
        const url = "https://aws.image";
        const repository: IRepositoryImage = {
            storeImage: jest.fn(() => Promise.resolve(url))
        };

        const mockUseCase: TypeImageUseCase = imageUseCase({
            repository
        });

        const response = await mockUseCase({
            fileType: "img/jpg",
            image: "123123123123"
        });

        expect(response.message).toBe(url);
    });

    it("should throw an error", async () => {
        const repository: IRepositoryImage = {
            storeImage: jest.fn(() => Promise.reject(new Error()))
        };

        const mockUseCase: TypeImageUseCase = imageUseCase({
            repository
        });

        try {
            await mockUseCase({
                fileType: "img/jpg",
                image: "123123123123"
            });
        } catch (error) {
            expect(error as Error).toBeInstanceOf(Error);
        }
    });
});