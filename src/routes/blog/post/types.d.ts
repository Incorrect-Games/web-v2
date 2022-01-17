import type { StrapiResponse, StrapiResponseArray, StrapiDataResponse } from "src/global"

export type Post = {
    title: string,
    slug: string,
    content: string,
    createdAt: string,
    publishedAt: string,
    updatedAt: string,
    tags: StrapiResponseArray<Tag>,
    cover: StrapiDataResponse<Media>,
    description: string,
}

export type Tag = {
    name: string
    createdAt: string,
    publishedAt: string,
    updatedAt: string,
}


export type Media = {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: any;
    provider: string;
    provider_metadata?: any;
    createdAt: Date;
    updatedAt: Date;
}

export type MediaData =  {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
}

export type Formats = {
    thumbnail: MediaData;
    large: MediaData;
    medium: MediaData;
    small: MediaData;
}


