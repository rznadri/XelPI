import express from "express"
import { RegisterRoutes } from "./routes/routes"; // This is the generated routes file

const app = express();

app.use(express.json());
RegisterRoutes(app);

export default app;