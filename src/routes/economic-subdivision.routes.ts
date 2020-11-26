import { Router } from 'express';
import { economicSubDivisionController } from '../controllers/Economic-subdivision.controller';

const routerEconomicClase = Router();

routerEconomicClase.get('/', economicSubDivisionController.getEconomicSubDivision);

routerEconomicClase.post('/', economicSubDivisionController.createEconomicSubDivision);

export default routerEconomicClase;