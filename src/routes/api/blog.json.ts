import { setOrGet } from "$lib/api/cache";
import { variables } from "$lib/api/variables";

import type { StrapiDataResponse, StrapiResponseArray } from "src/global";
import type { Post } from "../blog/post/types";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
    const url = `${variables.STRAPI_API_URL}/posts?populate=*&sort[0]=id:desc`;
    try {
        const data: any = await setOrGet(url, async () => {
            const res = await fetch(`${variables.STRAPI_API_URL}/posts?populate=*&sort[0]=id:desc`);
            if (res.ok) {
                const strapiResponse: StrapiDataResponse<StrapiResponseArray<Post>> = await res.json();
                return strapiResponse;
            }
            throw {
                status: res.status,
                error: new Error(),
            };
        });
        return {
            body: data,
        };
    } catch (e) {
        if(e.status)
            return e;
        return {
            status: 500
        }
    }
}