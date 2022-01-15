<script lang="ts">
    import "../app.css";
</script>

<nav>
    <div class="container flex h-[54px] place-items-center">
        <a href="/">
            <span class="font-title text-black font-bold text-2xl"
                >Incorrect</span
            >
        </a>
        <ul class="flex ml-auto gap-3">
            <li>
                <a href="/blog" class="nav-link">Blog</a>
            </li>
            <li>
                <a href="/team" class="nav-link">Team</a>
            </li>
        </ul>
    </div>
</nav>

<main>
    <slot />
</main>

<footer />
