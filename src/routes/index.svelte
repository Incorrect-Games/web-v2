<script context="module" lang="ts">
    export const prerender = true;

    import teamApi from "./team/team.json";
</script>

<script lang="ts">
    import Avatar from "$lib/components/avatar.svelte";
    import Seo from "$lib/seo.svelte";
</script>

<header>
    <div class="container place-items-center">
        <div class="flex flex-col place-items-center sm:place-items-start text-center sm:text-left">
            <h1 class="max-w-lg ">
                The journey <span class="decoration-lime-400 underline">awaits</span>.
            </h1>
            <div class="mt-8 gap-10 flex flex-col">
                <p class="max-w-sm text-lg">Walk with us while we explore uncharted territory.</p>
                <div class="flex place-items-center gap-6 flex-wrap place-content-center sm:place-content-start">
                    <a href="/blog/post/the-journey-awaits" class="bttn">Read blog post</a>

                    <a href="/roadmap" class="bttn-alt">
                        See roadmap
                        <span class="material-icons-outlined text-2xl"> insights </span>
                    </a>
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
                    <h3>From hobbyists.</h3>
                    <p>As gamers, we know what makes games fun.</p>
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
<section class="bg-pink-200 color-section dark:bg-neutral-900">
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
                        <div class="flex mt-4 gap-2 justify-center md:justify-start">
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

<Seo />
