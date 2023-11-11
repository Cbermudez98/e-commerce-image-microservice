import { config } from "dotenv";
config();

export abstract class Environment {
    static readonly REGION = process.env.REGION || "test";
    static readonly BUCKET_NAME = process.env.BUCKET_NAME || "test";
    static readonly SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY || "test";
    static readonly SECRET_ACCESS_KEY_ID = process.env.SECRET_ACCESS_KEY_ID || "test";
}