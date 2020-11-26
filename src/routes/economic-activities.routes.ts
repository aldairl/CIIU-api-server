import { Router } from 'express';
import { economicActivities } from '../controllers/Economic-activities.controller';

const routerEconomicActivities = Router();

routerEconomicActivities.get('/', economicActivities.getEconomicActivities);

routerEconomicActivities.post('/', economicActivities.createEconomicActivities);

routerEconomicActivities.post('/delete', economicActivities.DeleteEconomicActivityById);

export default routerEconomicActivities;