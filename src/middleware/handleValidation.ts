import  {Request, Response, NextFunction} from "express"
import { validationResult, ValidationError } from "express-validator"


export const validate = (req: Request, res: Response, next: NextFunction) => {

const errors = validationResult(req);

    if(errors.isEmpty()) {
        next()
    }

    const extratectErrors: object[] = [];

    errors.array().map((err: ValidationError) => 
        extratectErrors.push({ [err.param]: err.msg}));

    res.status(422).json({
        errors: extratectErrors,
    })
}