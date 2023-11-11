import AWS from 'aws-sdk';
import { S3Service } from '../../../../src/infrastructure/service/S3Service';
import { IImage } from '../../../../src/domain/image.interface';
describe("S3 service", () => {
    it("Should store the image", async () => {
        const url = "http://aws.image";
        const awsMock = jest.mock("aws-sdk", () => {
            return {
                S3: jest.fn(() => ({
                    upload: jest.fn().mockReturnThis(),
                    promise: jest.fn(() => ({
                        Location: url
                    }))
                }))
            }
        })

        const image: IImage = {
            fileType: "image/jpeg",
            image: "Base64 1231231231",
            name: "name.jpeg"
        };
        const service = new S3Service();
        const response = await service.uploadImage(image);
        console.log("🚀  ~ file: S3Service.test.ts:25 ~ it ~ response:", response);
        awsMock.resetModules();
        expect(response).toBe(url);
    });
});