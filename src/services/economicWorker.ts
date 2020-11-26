const fs = require('fs');
import { economicCreate } from './economic-create.services';

export const readFile = () => {

    fs.readFile('CIIU.json', 'utf-8', async (err: any, data: any) => {

        if (err) {
            console.log('error: ', err);
        } else {

            const dataJson = JSON.parse(data);
            const classes = Object.keys(dataJson);

            for (let i = 0; i < classes.length; i++) {

                const classComplete: any = dataJson[classes[i]];  //contain the titulo and divisiones fields
                const nameClass = classes[i]; //the name class for example A, B
                const titleClass = classComplete.titulo; //title class
                const divisionClass = Object.keys(classComplete['divisiones']); //get arary names of divisions
                const divisionClassComplete = classComplete['divisiones']; //Object complete, contain divisions object

                const classTosave = { _id: nameClass + titleClass, clase: nameClass, title: titleClass };

                const classSaved: any = await economicCreate.createEconomicClase(classTosave);

                for (let d = 0; d < divisionClass.length; d++) {

                    const nameDivision = divisionClass[d]; //name division, exmaple 01, 02
                    const titleDivision = classComplete.divisiones[nameDivision].titulo; //title of class
                    const subDivisions = Object.keys(divisionClassComplete[nameDivision].subdivisiones); //array names of subDivisions
                    const subDivisionComplete = divisionClassComplete[nameDivision].subdivisiones; //object complete subdivions, contain subdivions objects

                    const divisionTosave = { _id: nameDivision + titleDivision, clase: nameDivision, title: titleDivision, economicClass: classSaved._id };
                    const divisionSaved: any = await economicCreate.createEconomicDivision(divisionTosave);

                    for (let s = 0; s < subDivisions.length; s++) {

                        const nameSubDivision = subDivisions[s];
                        const titleSubDivision = subDivisionComplete[nameSubDivision].titulo;
                        const activities = Object.keys(subDivisionComplete[nameSubDivision].actividades);
                        const activitiesComplete = subDivisionComplete[nameSubDivision].actividades;

                        const subDivisionToSave = { _id: nameDivision + titleSubDivision, clase: nameSubDivision, title: titleSubDivision, division: divisionSaved._id };
                        const subDivisionSaved: any = await economicCreate.createEconomicSubDivision(subDivisionToSave);

                        for (let a = 0; a < activities.length; a++) {

                            const nameActivity = activities[a];
                            const titleActivity = activitiesComplete[nameActivity];

                            const activityToSave = { _id: nameActivity + titleActivity, code: nameActivity, title: titleActivity, subdivision: subDivisionSaved._id };
                            const activitySaved = await economicCreate.createEconomicActivity(activityToSave);
                        }

                    }

                }
            }
        }
    });
}