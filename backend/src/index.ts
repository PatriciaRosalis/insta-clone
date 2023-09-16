import { Elysia } from "elysia";
import { getUsers } from "./routes/users";

const app = new Elysia()
  .get("/users", getUsers)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
