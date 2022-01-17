<script context="module" lang="ts">
    export const prerender = true;

    import teamApi from "./team/team.json";
</script>

<script lang="ts">
    import Avatar from "$lib/components/avatar.svelte";
</script>

<svelte:head>
    <title>Incorrect Games</title>
</svelte:head>

<header>
    <div class="container place-items-center">
        <div class="flex flex-col">
            <h1 class="max-w-lg">
                The journey <span class="decoration-lime-400 underline">awaits</span>.
            </h1>
            <div class="mt-8 gap-10 flex flex-col">
                <p class="max-w-sm text-lg">Walk with us while we explore uncharted territory.</p>
                <div class="flex place-items-center gap-6">
                    <a href="/blog/post/the-journey-awaits" class="bttn">Read blog post</a>

                    <!-- <span class="flex place-items-center gap-2">
                        Showreel coming soon!
                        <span class="material-icons-outlined text-2xl"> play_circle_outline </span>
                    </span> -->
                </div>
            </div>
        </div>
    </div>
</header>
<section>
    <div class="container">
        <div class="mt-8 grid gap-y-12 gap-4 xl:gap-14 md:grid-cols-3 grid-cols auto-cols-auto items-stretch">
            <div class="gap-8 flex flex-col">
                <div>
                    <span class="material-icons-outlined icon-graphic bg-indigo-400/10 text-indigo-400">group_work</span>
                </div>
                <div>
                    <h3>Independent work.</h3>
                    <p>We're free to create and publish what we want.</p>
                </div>
            </div>
            <div class="gap-8 flex flex-col">
                <div>
                    <span class="material-icons-outlined icon-graphic bg-lime-500/10 text-lime-500">sports_esports</span>
                </div>
                <div>
                    <h3>From hobbyist.</h3>
                    <p>As gaymers, we know what makes games fun.</p>
                </div>
            </div>
            <div class="gap-8 flex flex-col">
                <div>
                    <span class="material-icons-outlined icon-graphic bg-pink-400/10 text-pink-400">opacity</span>
                </div>
                <div>
                    <h3>Full transparency.</h3>
                    <p>Sincerity, honesty and transparency are values that represent the core of Incorrect Games.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="bg-amber-100 border-y-2 color-section border-black">
    <div class="container">
        <div class="block md:flex">
            <div class="flex-1">
                <h2>Become a sponsor.</h2>
                <p>Granting us the resources to produce both quantity and quality content for everyone to enjoy.</p>
                <a class="bttn mt-6" href="http://patreon.com/incorrectgames" target="_blank" rel="noopener noreferrer">
                    <span class="material-icons">favorite</span>
                    Sponsor
                </a>
            </div>
            <div class="flex flex-1 flex-col place-content-center justify-items-center" />
        </div>
    </div>
</section>
<section>
    <div class="container">
        <h2>Meet the team.</h2>
        <div>
            <p>A group of friends based in Denmark with background in technology and game design.</p>
        </div>
        <div class="mt-10 grid md:grid-cols-2 xl:grid-cols-3 grid-cols auto-cols-auto gap-y-12 gap-x-8">
            <!-- Ugly hack for JIT dynamic colors -->
            <div class="hidden">
                <span class="bg-indigo-500/10 text-indigo-500" />
                <span class="bg-rose-400/10 text-rose-400" />
                <span class="bg-blue-400/10 text-blue-400" />
                <span class="bg-amber-500/10 text-amber-500" />
            </div>
            {#each teamApi.team as person}
                <div class="group flex gap-4 justify-self-center text-center flex-col md:flex-row md:justify-self-start md:text-left">
                    <div>
                        <Avatar
                            src="/assets/images/team/{person.avatar}"
                            size={86}
                            alt="Avatar of {person.name}"
                            class="relative mx-auto"
                        />
                    </div>
                    <div>
                        <h4>{person.name}</h4>
                        <span>Denmark</span>
                        <div class="flex mt-4 gap-2">
                            {#each person.roles as role}
                                <span class="badge bg-{role.color}/10 text-{role.color}">{role.name}</span>
                            {/each}
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</section>
