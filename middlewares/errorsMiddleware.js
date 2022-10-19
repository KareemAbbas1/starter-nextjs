export const createError = (status, message) => {
    const error = new Error();
    error.code = status;
    error.message = message;
    return error;
}


const errorHandler = (handler) => {
    return async (req, res) => {
        return handler(req, res)
            .catch((error) => {
                const errorStatus = error.code || 500;
                const errorMessage = error.message || "Error Middleware >> Something went wrong"
                console.log("Error Handler Invoked", errorMessage)
                return res.status(errorStatus).json({
                    success: false,
                    status: errorStatus,
                    message: errorMessage,
                    stack: error.stack,
                });
            })
    }
}

export default errorHandler;

