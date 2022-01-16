<script lang="ts" context="module">
    import { page } from "$app/stores";
    import { get } from "svelte/store";

    export async function load({ params, fetch }) {
        let res = await fetch(`http://localhost:1337/api/posts?filters[slug][$eq]=${params.slug}`);
        if (res.ok) {
            const data: Array<any> = (await res.json()).data;
            if (data.length == 0) {
                return {
                    status: 404,
                    error: new Error(),
                };
            }
            return {
                props: {
                    feed: data[0],
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
    import type { StrapiResponse } from "src/global";
    import type { Post } from "./types";

    import { parse } from "marked";
    import dayjs from "dayjs";
    import relativeTime from "dayjs/plugin/relativeTime";

    dayjs.extend(relativeTime);

    export let feed: StrapiResponse<Post>;
</script>

<div class="mb-12">
    <h1 class="mb-0">{feed.attributes.title}</h1>
    <span class="text-sm">
        Posted
        {dayjs().diff(feed.attributes.createdAt, "week") >= 1
            ? dayjs(feed.attributes.createdAt).format("MMM DD")
            : dayjs(feed.attributes.createdAt).fromNow()}
        .
    </span>
</div>
{@html parse(feed.attributes.content)}

<svelte:head>
    <title>{feed.attributes.title} - Incorrect Games</title>
</svelte:head>
