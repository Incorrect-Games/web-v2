<script lang="ts">
    import { navigating } from "$app/stores";
    import NavigationMain from "$lib/components/heading/navigation-main.svelte";
    import "../app.css";

    let loadTimer = 0;
    let loadInterval = null;

    navigating.subscribe((n) => {
        if (n) {
            clearInterval(loadInterval);
            loadTimer == 0;

            loadInterval = setInterval(() => loadTimer++, 1000);
        } else {
            clearInterval(loadInterval);
            loadTimer = 0;
        }
    });
</script>

<NavigationMain />

<main>
    {#if $navigating && loadTimer > 0}
        <section class="pt-32 container prose">
            <div class="animate-pulse flex flex-col gap-4">
                <div class="h-8 mb-8 bg-neutral-200 rounded-full" />
                <div class="flex gap-4">
                    <div class="h-4 flex-1 bg-neutral-200 rounded-full" />
                    <div class="h-4 flex-1 bg-neutral-200 rounded-full" />
                </div>
                <div class="h-4 bg-neutral-200 rounded-full" />
            </div>
        </section>
    {:else}
        <slot />
    {/if}
</main>

<footer>
    <div class="container">
        <div class="flex items-stretch justify-between gap-12 flex-wrap">
            <div class="flex flex-col">
                <h3>Incorrect Games</h3>
                <p>hello@incorrect.games</p>
                <!-- <p class="text-sm mt-auto flex place-items-center gap-1">
                    <span class="material-icons text-xs">copyright</span>incorrect.games
                </p> -->
            </div>
            <div>
                <h3>Pages</h3>
                <ul class="flex flex-col gap-2">
                    <li>
                        <a class="link" href="/">Home</a>
                    </li>
                    <li><a class="link" href="/blog">Blog</a></li>
                </ul>
            </div>
            <div>
                <h3>Social</h3>
                <ul class="flex flex-col gap-2">
                    <li>
                        <a
                            class="link flex place-items-center gap-2"
                            href="https://twitter.com/incorrectgames"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                ><path
                                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                                /></svg
                            >
                            Twitter
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</footer>
