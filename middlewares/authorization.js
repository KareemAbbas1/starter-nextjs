const authorize = (handler) => {
    return async (req, res) => {
        try {
            console.log("Authorization Middleware invoked")
            // Add middleware proccesing here
            return handler(req, res);
        }
        catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

export default authorize;