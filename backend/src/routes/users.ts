import { eq } from "drizzle-orm";
import { db } from "../../db";
import { NewUser, User, users } from "../../db/schema/users";
import { Static } from '@sinclair/typebox'
import { t } from "elysia";

export const UpdateUserSchema = t.Object({
    id: t.Number(),
    email: t.String(),
    username: t.String(),
    firstName: t.String(),
    lastName: t.String(),
    password: t.String(),
})

export type UpdateUser = Static<typeof UpdateUserSchema>

type A = {
    username: string
}

export const getAllUsers = async () => {
    const allUsers = await db.select().from(users);
    return allUsers;
}

// to improve in the future
export const createUser = async (body: NewUser) => {
    await db.insert(users).values(body);
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
