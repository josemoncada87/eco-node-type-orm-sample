
import * as express from "express"
const router = require("../src/routes/taskRoutes");

// create and setup express app
const app = express()

app.use(express.json())
app.use('/api', router);

const port = process.env.PORT ?? 3000;

// start express server
app.listen(port, () => {
    console.log('Servidor corriendo en el puerto:' + port);
});