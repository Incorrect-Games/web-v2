import { variables } from "$lib/api/variables";
import { SvelteHttpError } from "$lib/errors/svelte-http-error";

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	const { slug } = params;
    const url = `${variables.STRAPI_URL}/posts?filters[slug][$eq]=${slug}&populate=*`;
    console.log(url);

    try {
        let res = await fetch(url);
        const data: Array<any> = (await res.json()).data;
        if(!res.ok || data.length == 0) {
            throw new SvelteHttpError(404)
        }
        return {
            body: {
                feed: data[0],
            },
        };
    } catch(e) {
        return {
            status: e.status || 500,
            error: e.message || "Internal server error.",
        };
    }

}