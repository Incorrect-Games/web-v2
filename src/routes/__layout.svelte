<script lang="ts">
    import "../app.css";
</script>

<nav>
    <div class="container flex">
        <span />
        <ul class="flex ml-auto">
            <li>
                <a href="/blog">Blog</a>
            </li>
            <li>
                <a href="/team">Team</a>
            </li>
        </ul>
    </div>
</nav>

<main>
    <slot />
</main>

<footer>
    <p>
        visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit
    </p>
</footer>
