/// <reference types="@sveltejs/kit" />

export type StrapiResponse<T> = {
    id: number,
    attributes: T
}

export type StrapiResponseArray<T> = {
    data: Array<StrapiResponse<T>>
}