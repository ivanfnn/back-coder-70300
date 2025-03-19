export const ErrorCodes = {
    INVALID_PARAMS: 1,
    DUPLICATED_CODE: 2,
    DATABASE_ERROR: 3,
    NOT_FOUND: 4,
    AUTH_ERROR: 5
}

export const ErrorMessages = {
    [ErrorCodes.INVALID_PARAMS]: 'Parámetros inválidos',
    [ErrorCodes.DUPLICATED_CODE]: 'El recurso ya existe',
    [ErrorCodes.DATABASE_ERROR]: 'Error de base de datos',
    [ErrorCodes.NOT_FOUND]: 'Recurso no encontrado',
    [ErrorCodes.AUTH_ERROR]: 'Error de autenticación'
}