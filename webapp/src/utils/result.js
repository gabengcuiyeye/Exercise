class Result {
    ok({ message = "操作成功", result }) {
        return {
            success: true,
            code: 200,
            message,
            result
        }
    }
    error({ message }) {
        return {
            success: false,
            code: 500,
            message,
        }
    }
}

exports.result = new Result()