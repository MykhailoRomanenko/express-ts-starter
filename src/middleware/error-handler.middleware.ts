import HttpError from '../errors/HttpError'
import {Request, Response} from 'express'

function handleHttpErrors(err: HttpError, req: Request, res: Response) {
    const status = err.status || 500
    const message = err.message || 'Unknown server error'
    res
        .status(status)
        .json({
            message,
            status,
        })
}

export default handleHttpErrors