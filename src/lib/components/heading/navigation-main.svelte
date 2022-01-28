<script lang="ts">
    import NavLink from "./nav-link.svelte";
</script>

<nav class="bg-white/80 backdrop-blur-lg sticky top-0 mt-4 z-30 dark:bg-[#060606]/90">
    <div class="container flex h-[72px] place-items-center">
        <a href="/" class="flex place-items-center gap-3">
            <span class="font-title text-black font-bold text-2xl dark:text-white">Incorrect</span>
        </a>
        <ul class="flex ml-auto gap-3">
            <li>
                <NavLink href="/roadmap">Roadmap</NavLink>
                <NavLink sveltekit:prefetch href="/blog">Blog</NavLink>
            </li>
        </ul>
    </div>
</nav>
