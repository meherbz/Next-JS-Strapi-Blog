import { z } from "zod";

const DateTimeSchema = z.string().datetime();

// Author Schema
const AuthorSchema = z.object({
  id: z.number(),
  attributes: z.object({
    name: z.string(),
    slug: z.string(),
    bio: z.string().nullable(),
  }),
});

// Category Schema
const CategorySchema = z.object({
  id: z.number(),
  attributes: z.object({
    name: z.string(),
    slug: z.string(),
    featuredImage: z
      .object({
        data: z
          .object({
            attributes: z.object({
              url: z.string(),
              name: z.string(),
              width: z.number(),
              height: z.number(),
            }),
          })
          .nullable(),
      })
      .nullable(),
  }),
});

const TagSchema = z.object({
  id: z.number(),
  attributes: z.object({
    name: z.string(),
    slug: z.string(),
  }),
});

const PostSchema = z.object({
  id: z.number(),
  attributes: z
    .object({
      title: z.string(),
      description: z.string(),
      content: z.any(),
      slug: z.string(),
      publishedAt: DateTimeSchema.nullable(),
      createdAt: DateTimeSchema,
      updatedAt: DateTimeSchema,

      author: z.object({ data: AuthorSchema.nullable() }).nullable(),
      category: z.object({ data: CategorySchema.nullable() }).nullable(),
      tag: z.object({ data: z.array(TagSchema).nullable() }).nullable(),
    })
    .nullable(),
});

// Response schema for /posts
export const PostsResponseSchema = z.object({
  data: z.array(PostSchema),
  meta: z.object({
    pagination: z.object({
      page: z.number(),
      pageSize: z.number(),
      pageCount: z.number(),
      total: z.number(),
    }),
  }),
});

// Export types
export type Post = z.infer<typeof PostSchema>;
export type Author = z.infer<typeof AuthorSchema>;
export type Category = z.infer<typeof CategorySchema>;
export type Tag = z.infer<typeof TagSchema>;
