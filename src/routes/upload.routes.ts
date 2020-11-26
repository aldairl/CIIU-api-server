import { Router, Request, Response } from 'express';

const routerUpload = Router();

routerUpload.get('/', (req: Request, res: Response) => {

    res.status(200).send({
        error: null,
        success: true,
        data: 'all OK'
    })
});

routerUpload.post('/', (req: Request, res: Response) => {

    res.status(200).send({
        error: null,
        success: true,
        data: 'all OK POST'
    })
});

export default routerUpload;