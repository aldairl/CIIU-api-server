import { Router } from 'express';
import { economicDivisionController } from '../controllers/economic-division.controller';

const routerEconomicClase = Router();

routerEconomicClase.get('/', economicDivisionController.getEconomicDivision);

routerEconomicClase.post('/', economicDivisionController.createEconomicDivision);

export default routerEconomicClase;