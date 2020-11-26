import { Router } from 'express';
import { economicClasesController } from '../controllers/economic-clases.controller';

const routerEconomicClase = Router();

routerEconomicClase.get('/', economicClasesController.getEconomicClase);

routerEconomicClase.post('/', economicClasesController.createEconomicClase);

export default routerEconomicClase;