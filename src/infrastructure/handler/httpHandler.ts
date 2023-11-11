import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { objectValidator } from '../adapter/objectValidator/objectValidator.middleware';
import { imageSchema } from '../adapter/schemas/image.schema';
import { TypeImageUseCase } from '../../application/imageUseCase';

const extractBody = (event: string | null) => ({ image: event ? JSON.parse(event).image : "", filetype: event ? JSON.parse(event).filetype : "" });

const response = (status: number = 200, message: string = ""): APIGatewayProxyResult => {
    return {
        statusCode: status,
        body: message
    };
};

export const httpHandler = (useCase: TypeImageUseCase) => async (event: APIGatewayProxyEvent) => {
    try {
        const body = extractBody(event.body);
        const valid = objectValidator(imageSchema)(body);
        if (!valid) throw new Error("Bad Request");
        const responseModel = await useCase(body as any);
        return response(200, responseModel.message);
    } catch (error) {
        const err = error as Error;
        return response(500, err?.message || "Internal server error")
    }
};