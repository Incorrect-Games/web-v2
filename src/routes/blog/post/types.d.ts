import type { StrapiResponseArray } from "src/global"

export type Post = {
    title: string,
    slug: string,
    content: string,
    createdAt: string,
    publishedAt: string,
    updatedAt: string,
    tags: StrapiResponseArray<Tag>
}

export type Tag = {
    name: string
    createdAt: string,
    publishedAt: string,
    updatedAt: string,
}