import { Request, Response } from 'express';
const economicSubDivisionModel = require('../models/Economic-subdivision.model');

class EconomicSubDivisionController {

    public async createEconomicSubDivision(req: Request, res: Response) {

        try {

            const { body } = req;
            const SubdivisionToSave = new economicSubDivisionModel(body);
            const SubdivisionSaved = await SubdivisionToSave.save();

            res.send({
                error: null,
                success: true,
                data: SubdivisionSaved
            })
        } catch (error) {

            res.send({
                error,
                success: false,
                data: []
            })
        }
    }

    public async getEconomicSubDivision(req: Request, res: Response) {

        try {
            const SubDivision = await economicSubDivisionModel.find({});

            res.send({
                error: null,
                success: true,
                data: SubDivision
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
export const economicSubDivisionController = new EconomicSubDivisionController();