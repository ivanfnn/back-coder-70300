import { ErrorCodes, ErrorMessages } from "./errorDictionary.js";

export class CustomError extends Error {
    constructor(code, additionalInfo = {}) {
        super(ErrorMessages[code]);
        this.code = code;
        this.additionalInfo = additionalInfo;
        this.statusCode = this.getStatusCode(code);
    }

    getStatusCode(code) {
        const statusMap = {
            [ErrorCodes.INVALID_PARAMS]: 400,
            [ErrorCodes.DUPLICATED_CODE]: 409,
            [ErrorCodes.DATABASE_ERROR]: 500,
            [ErrorCodes.NOT_FOUND]: 404,
            [ErrorCodes.AUTH_ERROR]: 401
        }
        return statusMap[code] || 500;
    }
}