<script context="module" lang="ts">
    import type { StrapiResponseArray } from "src/global";
    import type { Post as PostType } from "./post/types";

    export async function load({ params, fetch }) {
        const res = await fetch("/api/blog.json");
        if (res.ok) {
            const data = await res.json();
            return {
                props: {
                    feed: data,
                },
            };
        }
    }
</script>

<script lang="ts">
    import { getMediaUrl } from "$lib/api/variables";
    import Post from "$lib/components/blog/post.svelte";
    import Seo from "$lib/seo.svelte";

    export let feed: StrapiResponseArray<PostType>;

    const latestPost = feed.data.shift();
</script>

<div class="py-4 container flex gap-2">
    <span class="font-bold">Blog</span> <span class="separator">|</span> Updates from Incorrect.
</div>
<div class="container">
    <Post post={latestPost}>
        <h2 class="text-2xl md:text-3xl">{latestPost.attributes.title}</h2>
    </Post>
</div>
<section>
    {#if feed.data.length > 0}
        <div class="container grid grid-cols md:grid-cols-2 gap-24 ">
            {#each feed.data as post}
                <Post {post} url={getMediaUrl(post.attributes.cover.data.attributes.formats.medium.url)}>
                    <h3>{post.attributes.title}</h3>
                </Post>
            {/each}
        </div>
    {:else}
        <div class="container text-center">
            <span class="icon-graphic material-icons-outlined bg-red-400/10 text-red-400">loyalty</span>
            <h3 class="mt-8 mb-2">More posts to come!</h3>
            <p>Keep an eye out for upcoming dev logs.</p>
        </div>
    {/if}
</section>

<Seo
    title="Incorrect Games | Blog"
    description="Stay up to date wtih our latest blog posts regarding Incorrect Games' growth and game development."
/>
