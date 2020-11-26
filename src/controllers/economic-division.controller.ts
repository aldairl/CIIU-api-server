import { Request, Response } from 'express';
const economicDivisionModel = require('../models/Economic-division.model');

class EconomicDivisionController {

    public async createEconomicDivision(req: Request, res: Response) {

        try {

            const { body } = req;
            const divisionToSave = new economicDivisionModel(body);
            const divisionSaved = await divisionToSave.save();

            res.send({
                error: null,
                success: true,
                data: divisionSaved
            })
        } catch (error) {

            res.send({
                error,
                success: false,
                data: []
            })
        }
    }

    public async getEconomicDivision(req: Request, res: Response) {

        try {
            const Division = await economicDivisionModel.find({});

            res.send({
                error: null,
                success: true,
                data: Division
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
export const economicDivisionController = new EconomicDivisionController();