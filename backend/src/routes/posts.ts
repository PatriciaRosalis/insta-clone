import { eq } from "drizzle-orm";
import { db } from "../../db";
import { NewPost, Post, posts } from "../../db/schema/posts";

export const getAllPosts = async () => {
    const allPosts = await db.select().from(posts);
    return allPosts;
}

export const getAllPostsById = async (id: number) => {
    const allPosts = await db.select().from(posts).where(eq(posts.userId, id));
    return allPosts;
}

export const createPost = async (body: NewPost, userId: number) => {
    const p: NewPost = { description: body.description, userId };

    await db.insert(posts).values(p);
    return {};
}

export const updatePost = async (post: Post) => {
    await db.update(posts)
        .set({ description: post.description, updatedAt: new Date() })
        .where(eq(posts.id, post.id));

    return {};
}

export const deletePost = async (id: number) => {
    await db.delete(posts).where(eq(posts.id, id));
    return {};
}

// create updated at & createdAt
