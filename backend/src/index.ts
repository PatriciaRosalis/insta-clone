import { Context, Elysia, t } from "elysia";
import { CreateUserSchema, LogInUserSchema, UpdateUserSchema, createUser, deleteUser, getAllUsers, getProfile, signIn, updateUser } from "./routes/users";
import { createPost, deletePost, getAllPosts, getAllPostsById, updatePost } from "./routes/posts";
import { cookie, SetCookieOptions } from '@elysiajs/cookie';
import { cors } from '@elysiajs/cors'
import { jwt } from '@elysiajs/jwt';

export type Handler<T> = Context & {
  jwt: any,
  cookie: {
    auth: string
  },
  setCookie: (name: string, value: string, options?: SetCookieOptions | undefined) => void;
  body: T,
}

const app = new Elysia()
  .use(cors())
  .use(
    jwt({
      name: 'jwt',
      secret: process.env.JWT_SECRETS as string,
    })
  )
  .use(cookie())
  .post("/auth/create-user", ({ body }) => createUser(body), {
    body: CreateUserSchema,
  })
  .post("/auth/sign-in", async (ctx) => signIn(ctx as any), {
    body: LogInUserSchema
  })
  .get("/users", getAllUsers)
  .put("/update-user", ({ body }) => updateUser(body), {
    body: UpdateUserSchema
  })
  .delete("/users/:id", ({ params: { id } }) => deleteUser(Number(id)))
  .get("/profile", async (ctx) => getProfile(ctx as any))
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
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
