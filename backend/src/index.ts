import { Elysia, t } from "elysia";
import { getAllUsers } from "./routes/users";
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
    }),
  })
  .delete("/posts/:id", ({ params: { id } }) => deletePost(Number(id)))
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
