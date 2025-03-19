import { CustomError } from '../utils/errors/customError.js'
import logger from '../utils/logger.js';

const errorHandler = (err, req, res, next) => {
  logger.error(err.message);
  
  if (err instanceof  CustomError) {
    return res.status(err.statusCode).json({ error: err.message });
  }
  
  res.status(500).json({ error: 'Internal Server Error' });
};

export default errorHandler;
