import express from "express";
import cors from "cors";
/* import { logger } from "logger-express"; */
import equipmentsRouter from "./config/routes/equipmentsRoutes.js";
import positionsRouter from "./config/routes/positionsRoutes.js";
import playersRouter from "./config/routes/playersRoutes.js";
import playerPositionRouter from "./config/routes/playerPositionRoutes.js";
import loginRoutes from "./config/routes/loginRoutes.js";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors());
/* app.use(logger()) problemas de compilacion */
app.use("/api/v1", equipmentsRouter);
app.use("/api/v1", positionsRouter);
app.use("/api/v1", playersRouter);
app.use("/api/v1", playerPositionRouter);
app.use("/api/v1", loginRoutes);

app.listen(PORT, () => {
  console.log(`🟢El servidor esta encendido en el puerto ${PORT}`);
});

export default app;
