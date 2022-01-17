<script lang="ts">
    import { variables } from "$lib/api/variables";

    import dayjs from "dayjs";
    import relativeTime from "dayjs/plugin/relativeTime.js";
    dayjs.extend(relativeTime);

    import type { StrapiResponse } from "src/global";
    import type { Post } from "src/routes/blog/post/types";

    export let post: StrapiResponse<Post>;
    export let url: string = null;
</script>

<a href="/blog/post/{post.attributes.slug}">
    <img
        class="w-full mb-4 rounded-xl"
        src={url || post.attributes.cover.data.attributes.url}
        alt={post.attributes.cover.data.attributes.alternativeText}
    />
    <div class="flex gap-2 mb-8 place-items-center">
        <div class="flex gap-2">
            {#each post.attributes.tags.data as tag}
                <span class="badge capitalize">{tag.attributes.name}</span>
            {/each}
        </div>
        <span class="separator">|</span>
        <span class="text-sm">
            Posted
            {dayjs().diff(post.attributes.createdAt, "week") >= 1
                ? dayjs(post.attributes.createdAt).format("MMM DD, YYYY")
                : dayjs(post.attributes.createdAt).fromNow()}.
        </span>
    </div>
    <slot />
    <p>{post.attributes.description}</p>
</a>
