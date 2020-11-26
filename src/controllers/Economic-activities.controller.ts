import { Request, Response } from 'express';
const economicActivitiesModel = require('../models/Economic-activities.model');

class EconomicActivities {

    public async createEconomicActivities(req: Request, res: Response) {

        try {

            const { body } = req;
            const activitiesToSave = new economicActivitiesModel(body);
            const activitiesSaved = await activitiesToSave.save();

            res.send({
                error: null,
                success: true,
                data: activitiesSaved
            })
        } catch (error) {

            res.send({
                error,
                success: false,
                data: []
            })
        }
    }

    public async getEconomicActivities(req: Request, res: Response) {

        try {
            const activities = await economicActivitiesModel.find({});

            res.send({
                error: null,
                success: true,
                data: activities
            })

        } catch (error) {
            res.send({
                error,
                success: false,
                data: null
            })
        }
    }

    public async SearchEconomicActivityByName(req: Request, res: Response) {

        try {
            const { search } = req.body;

            let economicActivities = null;

            if (search) {
                if (Number(search)) {

                    economicActivities = await economicActivitiesModel.find({ "code": { $regex: `.*${search}`, $options: "i" } }, { code: 1, title: 1 });
                } else {
                    economicActivities = await economicActivitiesModel.find({ "title": { $regex: `.*${search}`, $options: "i" } }, { code: 1, title: 1 });
                }

            } else {
                economicActivities = await economicActivitiesModel.find({}, { code: 1, title: 1 }).limit(5);
            }

            res.send({
                error: null,
                success: true,
                data: economicActivities
            });

        } catch (error) {
            res.send({
                error,
                success: false,
                data: null
            })
        }
    }

    public async DeleteEconomicActivityById(req: Request, res: Response) {

        try {
            const { id } = req.body;
            economicActivitiesModel.findOneAndDelete({ _id: id }, function (err: any, result: any) {

                if (err) {
                    console.log(err);
                    res.send(err);
                } else {
                    res.send({
                        error: null,
                        success: true,
                        data: result
                    });
                }
            });

        } catch (error) {
            res.send({
                error,
                success: false,
                data: null
            })
        }
    }

}
export const economicActivities = new EconomicActivities();