import express, { Request, Response } from "express";
import cors from "cors";
import connectToDatabase from "./src/db";
import categoryRoutes from "./src/routes/category.routes";
import taskRoutes from "./src/routes/task.routes";
import userRoutes from "./src/routes/user.routes";

const application = express();

application.use(express.json());
application.use(cors());

const PORT = 1337;

connectToDatabase();

application.get("/ping", (request: Request, response: Response) => {
  response.send("Pong");
});

application.use("/users", userRoutes);
application.use("/categories", categoryRoutes);
application.use("/tasks", taskRoutes);

application.listen(PORT, () => {
  console.log("Server up and running");
});
