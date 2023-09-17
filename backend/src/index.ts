import { Elysia, t } from "elysia";
import { CreateUserSchema, LogInUserSchema, UpdateUserSchema, createUser, deleteUser, getAllUsers, signIn, updateUser } from "./routes/users";
import { createPost, deletePost, getAllPosts, getAllPostsById, updatePost } from "./routes/posts";

const app = new Elysia()
  .get("/users", getAllUsers)
  .get("/posts", getAllPosts)
  .get("/posts/:id", ({ params: { id } }) => getAllPostsById(Number(id)))
  .post("/create-post", ({ body }) => createPost(body, 1), {
    body: t.Object({
      description: t.String()
    }),
  })
  .put("/update-post", ({ body }) => updatePost(body), {
    body: t.Object({
      description: t.String(),
      id: t.Number(),
      userId: t.Number(), 
      createdAt: t.Date(),
      updatedAt: t.Date(),
      archived: t.Boolean(),
    }),
  })
  .delete("/posts/:id", ({ params: { id } }) => deletePost(Number(id)))
  .post("/create-user", ({ body }) => createUser(body), {
    body: CreateUserSchema,
  })
  .put("/update-user", ({ body }) => updateUser(body), {
    body: UpdateUserSchema
  })
  .delete("/users/:id", ({ params: { id } }) => deleteUser(Number(id)))
  .post("/sign-in", ({ body }) => signIn(body), {
    body: LogInUserSchema
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
