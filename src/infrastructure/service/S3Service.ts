import AWS, { S3 } from "aws-sdk";

import { IImage } from "../../domain/image.interface";
import { IS3Service } from "../../domain/service/IS3Service";
import { Environment } from "../../utils/Environment";

export class S3Service implements IS3Service {
    constructor() {
        AWS.config.update({
            region: Environment.REGION,
        });
    }
    async uploadImage(image: IImage): Promise<string> {
        try {
            const s3 = new S3();
            const params: S3.PutObjectRequest = {
                Bucket: Environment.BUCKET_NAME,
                Key: image.name,
                Body: Buffer.from(image.image, "base64"),
                ContentType: image.fileType
            };
            const uploaded = await s3.upload(params).promise();
            return uploaded.Location;
        } catch (error) {
            const err = error as Error;
            throw new Error(err.message);
        }
    }
}