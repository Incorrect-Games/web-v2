<script context="module" lang="ts">
    import { variables } from "$lib/api/variables";
    import type { StrapiResponseArray } from "src/global";
    import { onMount } from "svelte";
    import type { Post } from "./post/types";

    export async function load({ params, fetch }) {
        let res = await fetch(`${variables.STRAPI_URL}/posts?populate=*`);
        if (res.ok) {
            const data: Array<any> = await res.body();
            return {
                props: {
                    feed: data,
                },
            };
        }
        return {
            status: res.status,
            error: new Error(),
        };
    }
</script>

<script lang="ts">
    export let feed: StrapiResponseArray<Post>;

    const latestPost = feed.data.shift();
</script>

<header>
    <div class="container">
        <h1>{latestPost.attributes.title}</h1>
        {latestPost.attributes.cover.data.attributes.provider}
    </div>
</header>
