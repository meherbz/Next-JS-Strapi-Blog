import type { z } from "zod";
import { type Post, PostsResponseSchema } from "./strapitypes";

const STRAPI_URL = "http://localhost:1337";
async function fetchFromStrapi<T>(
  path: string,
  schema: z.ZodType<T>,
): Promise<T> {
  const url = `${STRAPI_URL}/api/${path}`;

  const res = await fetch(url);
  const data = await res.json();
  return data;
}

// Get all posts (with populated relations)
export async function getAllPosts(): Promise<Post[]> {
  const data = await fetchFromStrapi(
    "articles?populate=*&sort=publishedAt:desc",
    PostsResponseSchema,
  );
  return data.data;
}

// Get single post by slug
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const data = await fetchFromStrapi(
    `articles?filters[slug][$eq]=${slug}&populate=*`,
    PostsResponseSchema,
  );
  return data.data[0] || null;
}

export async function getPosts(params): Promise<Post[]> {
  const data = await fetchFromStrapi(
    `articles?${params}&populate=*`,
    PostsResponseSchema,
  );
  console.log(data.data);
  return data.data;
}
