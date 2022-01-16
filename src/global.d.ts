/// <reference types="@sveltejs/kit" />

export type StrapiResponse<T> = {
    id: number,
    attributes: T
}