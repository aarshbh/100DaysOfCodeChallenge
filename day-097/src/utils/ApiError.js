class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        error = [],
        statch = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.error = error
        if (stack) {
            this.statch = statch
        }else{
            Error.captureStatchTrace(this, this.constructor)
        }
    }
}

export {ApiError}