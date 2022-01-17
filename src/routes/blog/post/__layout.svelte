<script lang="ts">
    import { page } from "$app/stores";

    // Remove zero-length tokens.
    const tokens = $page.url.pathname.split("/").filter((t) => t !== "");

    // Create { label, href } pairs for each token.
    let tokenPath = "";
    let crumbs = tokens.map((t) => {
        tokenPath += "/" + t;
        return {
            label: t,
            href: tokenPath,
        };
    });

    crumbs = crumbs.filter((c) => c.label != "post");

    // Add a way to get home too.
    crumbs.unshift({ label: "home", href: "/" });
</script>

<div class="">
    <nav class="container">
        <ul class="flex gap-2">
            {#each crumbs as c, i}
                {#if i == crumbs.length - 1}
                    <span>{c.label}</span>
                {:else}
                    <a href={c.href} class="font-bold link">{c.label}</a>\
                {/if}
            {/each}
        </ul>
    </nav>
    <section class="container pt-32 prose prose-neutral prose-lg prose-headings:text-black prose-p:text-neutral-900">
        <slot />
    </section>
</div>
