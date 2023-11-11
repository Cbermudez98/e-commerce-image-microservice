import { IImage } from "../../../../src/domain/image.interface";
import { IS3Service } from "../../../../src/domain/service/IS3Service.interface";
import { RepositoryImage } from "../../../../src/infrastructure/repositoty/RepositoryImage";

describe("Repository image", () => {
    it("Should response with the url", async () => {
        const url = "https://aws.image";
        const mockedBucket: IS3Service = {
            uploadImage: jest.fn(() => Promise.resolve(url))
        };

        const image: IImage = {
            fileType: "image/jpeg",
            image: "Base64 123131231",
            name: `${Date.now()}.jpeg`
        };
        const repository = new RepositoryImage(mockedBucket);
        const response = await repository.storeImage(image);
        expect(response).toBe(url);
    });

    it("Should throw an error", async () => {
        const mockedBucket: IS3Service = {
            uploadImage: jest.fn(() => Promise.reject(new Error()))
        };

        const image: IImage = {
            fileType: "image/jpeg",
            image: "Base64 123131231",
            name: `${Date.now()}.jpeg`
        };

        const repository = new RepositoryImage(mockedBucket);
        try {
            await repository.storeImage(image);
        } catch (error) {
            expect(error).toBeInstanceOf(Error);
            
        }
    });
});