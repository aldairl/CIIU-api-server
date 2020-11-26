const economicClasesModel = require('../models/Economic-clases.model');
const economicDivisionModel = require('../models/Economic-division.model');
const economicSubDivisionModel = require('../models/Economic-subdivision.model');
const economicActivitiesModel = require('../models/Economic-activities.model');

class EconomicCreate {
    public async createEconomicClase(body: { clase: string, title: string }) {

        return new Promise(async (resolve, reject) => {
            try {

                const claseToSave = new economicClasesModel(body);
                const claseSaved = await claseToSave.save();
                resolve(claseSaved);


            } catch (error) {
                console.log(error);
                reject(error);
            }
        })
    }

    public async createEconomicDivision(body: { clase: string, title: string, economicClass: string }) {

        return new Promise(async (resolve, reject) => {
            try {

                const divisionToSave = new economicDivisionModel(body);
                const divisionSaved = await divisionToSave.save();
                resolve(divisionSaved);

            } catch (error) {
                console.log(error);
                reject(error);
            }
        })
    }

    public async createEconomicSubDivision(body: { clase: string, title: string, division: string }) {

        return new Promise(async (resolve, reject) => {
            try {

                const subDivisionToSave = new economicSubDivisionModel(body);
                const subDivisionSaved = await subDivisionToSave.save();
                resolve(subDivisionSaved);

            } catch (error) {
                console.log(error);
                reject(error);
            }
        })
    }

    public async createEconomicActivity(body: { code: string, title: string, subdivision: string }) {

        return new Promise(async (resolve, reject) => {
            try {

                const ActivityToSave = new economicActivitiesModel(body);
                const ActivitySaved = await ActivityToSave.save();
                resolve(ActivitySaved);

            } catch (error) {
                console.log(error);
                reject(error);
            }
        })
    }

}

export const economicCreate = new EconomicCreate();