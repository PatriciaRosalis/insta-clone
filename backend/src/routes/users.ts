import { eq } from "drizzle-orm";
import { db } from "../../db";
import { NewUser, User, users } from "../../db/schema/users";
import { Static } from '@sinclair/typebox'
import { t } from "elysia";
import { encryptPassword } from "../utils/password";

export const CreateUserSchema = t.Object({
    email: t.String(),
    username: t.String(),
    firstName: t.String(),
    lastName: t.String(),
    password: t.String(),
})

export type CreateUser = Static<typeof CreateUserSchema>

export const UpdateUserSchema = t.Object({
    id: t.Number(),
    email: t.String(),
    username: t.String(),
    firstName: t.String(),
    lastName: t.String(),
    password: t.String(),
})

export type UpdateUser = Static<typeof UpdateUserSchema>

export const LogInUserSchema = t.Object({
    username: t.String(),
    password: t.String()
})

export type LoginUser = Static<typeof LogInUserSchema>

export const getAllUsers = async () => {
    const allUsers = await db.select().from(users);
    return allUsers;
}

export const createUser = async (body: CreateUser) => {
    const encPassword = await encryptPassword(body.password);

    const b = {
        email: body.email,
        username: body.username,
        firstName: body.firstName,
        lastName: body.lastName,
        password: encPassword,
    }
    await db.insert(users).values(b);
    return {};
}

export const updateUser = async (body: UpdateUser) => {
    await db.update(users)
        .set({
            email: body.email,
            firstName: body.firstName,
            lastName: body.lastName,
            username: body.username,
            password: body.password,
            updatedAt: new Date()
        })
        .where(eq(users.id, body.id));

    return {};
}

export const deleteUser = async (id: number) => {
    await db.delete(users).where(eq(users.id, id))
    return {};
}

export const signIn = async (body: LoginUser) => {
    const user = await db.select().from(users).where(
        eq(users.username, body.username)
    );

    if (user.length === 0) {
        return new Response(undefined, {
            status: 401,
            statusText: "Unauthorized"
        })
    }

    const isMatch = await Bun.password.verify(body.password, user[0].password);

    if (!isMatch) {
        return new Response(undefined, {
            status: 401,
            statusText: "Unauthorized"
        })
    }

    return user[0];
}
