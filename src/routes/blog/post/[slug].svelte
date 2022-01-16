<script lang="ts" context="module">
    export async function load({ fetch }) {
        let res = await fetch(`https://www.googleapis.com/blogger/v3/blogs/2940280955464517677/posts?key=`);
        if (res.ok) {
            return {
                props: {
                    feed: await res.json(),
                },
            };
        }
        return {
            status: res.status,
            error: new Error(),
        };
    }
</script>

<script>
    import { onMount } from "svelte";

    import * as sanitizeHtml from "sanitize-html";
    export let feed;

    const post = feed.items[0];

    let sanitized = false;
    onMount(() => {
        console.log(post.content);
        post.content = sanitizeHtml(post.content, {
            allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        });
        console.log(post.content);
        sanitized = true;
    });
</script>

{#if sanitized}
    {@html post.content}
{:else}
    <div class="animate-pulse flex flex-col gap-4">
        <div class="h-8 mb-8 bg-neutral-200 rounded-full" />
        <div class="flex gap-4">
            <div class="h-4 flex-1 bg-neutral-200 rounded-full" />
            <div class="h-4 flex-1 bg-neutral-200 rounded-full" />
        </div>
        <div class="h-4 bg-neutral-200 rounded-full" />
    </div>
{/if}
<svelte:head />
