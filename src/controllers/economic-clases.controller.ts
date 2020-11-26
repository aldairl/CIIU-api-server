import { Request, Response } from 'express';
const economicClasesModel = require('../models/Economic-clases.model');

class EconomicClasesController {

    public async createEconomicClase(req: Request, res: Response) {

        try {

            const { body } = req;
            const claseToSave = new economicClasesModel(body);
            const claseSaved = await claseToSave.save();

            res.send({
                error: null,
                success: true,
                data: claseSaved
            })
        } catch (error) {

            res.send({
                error,
                success: false,
                data: []
            })
        }
    }

    public async getEconomicClase(req: Request, res: Response) {

        try {
            const clases = await economicClasesModel.find({});

            res.send({
                error: null,
                success: true,
                data: clases
            })

        } catch (error) {
            res.send({
                error,
                success: false,
                data: null
            })
        }
    }

}
export const economicClasesController = new EconomicClasesController();