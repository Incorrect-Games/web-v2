<script lang="ts">
    import { assets } from "$app/paths";
    export let title: string = "Incorrect Games | A Journey Awaits";
    export let description: string = "Stay up to date with Incorrect Games progress and their upcoming projects.";
    export let image: string = `${assets}/assets/images/og/og-image.png`;
</script>

<svelte:head>
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://incorrect.games/" />
    <meta property="og:site_name" content="Incorrect Games" />

    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:site" content="@incorrectgames" />
    <meta property="twitter:site:id" content="@incorrectgames" />
    <meta property="twitter:creator" content="@incorrectgames" />
    <meta property="twitter:creator:id" content="@incorrectgames" />

    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="twitter:image" content={image} />
    <title>{title}</title>
</svelte:head>
