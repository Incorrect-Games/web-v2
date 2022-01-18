<script lang="ts">
    import NavLink from "./nav-link.svelte";
</script>

<nav class="bg-white/80 backdrop-blur-lg sticky top-0 mt-6 z-30 dark:bg-[#060606]/90">
    <div class="container flex h-[64px] place-items-center">
        <a href="/">
            <span class="font-title text-black font-bold text-2xl dark:text-white">Incorrect</span>
        </a>
        <ul class="flex ml-auto gap-3">
            <li>
                <NavLink href="/blog">Blog</NavLink>
            </li>
        </ul>
    </div>
</nav>
