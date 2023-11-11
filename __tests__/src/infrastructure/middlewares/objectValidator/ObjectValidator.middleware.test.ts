import { IImageCreate } from "../../../../../src/domain/image.interface";
import { objectValidator } from "../../../../../src/infrastructure/middlewares/objectValidator/ObjectValidator.middleware";
import { imageSchema } from "../../../../../src/infrastructure/middlewares/schemas/image.schema";

describe("Object validator middleware", () => {
    it("should responds with success", () => {
        const body: IImageCreate = {
            fileType: "image/jpeg",
            image: "Base64 123123123123213"
        };

        const valid = objectValidator(imageSchema)(body);
        expect(valid).toBeTruthy();
    });

    it("should responds with fail", () => {
        const body = {};

        const valid = objectValidator(imageSchema)(body);
        expect(valid).toBeFalsy();
    });
});