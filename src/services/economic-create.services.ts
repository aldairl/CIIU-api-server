const economicClasesModel = require('../models/Economic-clases.model');
const economicDivisionModel = require('../models/Economic-division.model');
const economicSubDivisionModel = require('../models/Economic-subdivision.model');
const economicActivitiesModel = require('../models/Economic-activities.model');

class EconomicCreate {
    public async createEconomicClase(body: { _id: string, clase: string, title: string }) {

        return new Promise(async (resolve, reject) => {
            try {

                const conditions = { _id: body._id }
                    , update = body
                    , options = { multi: true, upsert: true };

                const claseSaved = await economicClasesModel.updateOne(conditions, update, options);
                resolve(claseSaved);

            } catch (error) {
                console.log(error);
                reject(error);
            }
        })
    }

    public async createEconomicDivision(body: { _id: string, clase: string, title: string, economicClass: string }) {

        return new Promise(async (resolve, reject) => {
            try {
                const conditions = { _id: body._id }
                    , update = body
                    , options = { multi: true, upsert: true };

                const divisionSaved = await economicDivisionModel.updateOne(conditions, update, options);
                resolve(divisionSaved);

            } catch (error) {
                console.log(error);
                reject(error);
            }
        })
    }

    public async createEconomicSubDivision(body: { _id: string, clase: string, title: string, division: string }) {

        return new Promise(async (resolve, reject) => {
            try {
                const conditions = { _id: body._id }
                    , update = body
                    , options = { multi: true, upsert: true };

                const subDivisionSaved = await economicSubDivisionModel.updateOne(conditions, update, options);
                resolve(subDivisionSaved);

            } catch (error) {
                console.log(error);
                reject(error);
            }
        })
    }

    public async createEconomicActivity(body: { _id: string, code: string, title: string, subdivision: string }) {

        return new Promise(async (resolve, reject) => {
            try {

                const conditions = { _id: body._id }
                    , update = body
                    , options = { multi: true, upsert: true };

                const ActivitySaved = await economicActivitiesModel.updateOne(conditions, update, options);
                resolve(ActivitySaved);

            } catch (error) {
                console.log(error);
                reject(error);
            }
        })
    }

}

export const economicCreate = new EconomicCreate();