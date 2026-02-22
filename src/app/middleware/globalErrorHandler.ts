/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { envVars } from "../../config/env";
import status from "http-status";

export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    if (envVars.nodeEnv === 'development') {
        console.log("error from globalErrorHandler", err)
    }

    let statuscode: number = status.INTERNAL_SERVER_ERROR;
    let message: string = "Internal Server Error";



    res.status(statuscode).json({
        success: false,
        message: message,
        data: err.message
    })
}