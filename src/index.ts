import routerUpload from "./routes/upload.routes";
import routerClases from './routes/economic-clase.routes';
import routerDivision from "./routes/economic-division.routes";
import routerSubDivision from "./routes/economic-subdivision.routes";
import routerActivities from './routes/economic-activities.routes';

// config
import bodyParser from 'body-parser';

import Server from "./server";
import { connectToDb } from "./config/connectionDB";
import { readFile } from './services/economicWorker';

const server = new Server();
connectToDb();

server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

server.app.use('/api/upload', routerUpload);
server.app.use('/api/economic-clases', routerClases);
server.app.use('/api/economic-division', routerDivision);
server.app.use('/api/economic-subdivision', routerSubDivision);
server.app.use('/api/economic-activities', routerActivities);


server.start(() => {
    console.log(`server is running on port ${server.port}`)
});

// readFile();