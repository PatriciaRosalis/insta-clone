import { Elysia, t } from "elysia";
import { createUser, getAllUsers } from "./routes/users";
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
    body: t.Object({
      firstName: t.String(),
      lastName: t.String(),
      username: t.String(),
      email: t.String(), 
      password: t.String(), 
    }),
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
