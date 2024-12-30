const { contants } = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case contants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case contants.NOT_FOUND:
      res.json({
        title: "NOT FOUND",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case contants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case contants.FORBIDDEN:
      res.json({
        title: "FORBIDDEN",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case contants.SERVER_ERROR:
      res.json({
        title: "SERVER ERROR",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    default:
      console.log("No Error, All good !");
      break;
  }
};

module.exports = errorHandler;
