import { db } from "../../db";
import { users } from "../../db/schema/users";

export const getUsers = async () => {
    const u = await db.select().from(users);
    return u
}