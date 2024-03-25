const { CustomAPIError } = require('../errors/custom-error');

const globalErrorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError)
    return res.status(err.statusCode).json({
      status: err.statusCode,
      err: err.message,
    });

  return res.status(500).json({
    status: 'error',
    message: 'Something went Wrong',
  });
};

module.exports = globalErrorHandler;
