<script context="module" lang="ts">
    export const prerender = true;

    import teamApi from "./team/team.json";
</script>

<script lang="ts">
    import Avatar from "$lib/components/Avatar.svelte";
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
                <p class="max-w-sm text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus, maiores.</p>
                <div class="flex place-items-center gap-6">
                    <a href="/blog" class="bttn">Read our Blog</a>
                    <a href="/team" class="flex place-items-center gap-2">
                        Watch showreel
                        <span class="material-icons-outlined text-2xl"> play_circle_outline </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</header>
<section>
    <div class="container">
        <div class="mt-8 grid gap-4 xl:gap-14 md:grid-cols-3 grid-cols auto-cols-auto items-stretch">
            <div class="gap-8 flex flex-col">
                <div>
                    <span class="material-icons-outlined icon-graphic bg-indigo-400/10 text-indigo-400">group_work</span>
                </div>
                <div>
                    <h3>Independent work.</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit, doloremque expedita quis ullam at?</p>
                </div>
            </div>
            <div class="gap-8 flex flex-col">
                <div>
                    <span class="material-icons-outlined icon-graphic bg-lime-500/10 text-lime-500">sports_esports</span>
                </div>
                <div>
                    <h3>From hobbiest.</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
            <div class="gap-8 flex flex-col">
                <div>
                    <span class="material-icons-outlined icon-graphic bg-pink-400/10 text-pink-400">opacity</span>
                </div>
                <div>
                    <h3>Full transparency.</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<section>
    <div class="container">
        <h2>Meet the team.</h2>
        <div>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione facilis odit sed in quasi doloribus, harum beatae
                assumenda voluptas dolor autem accusamus est sapiente perferendis ea omnis minima, officia quia!
            </p>
        </div>
        <div class="mt-10 grid grid-cols-3 grid-cols auto-cols-auto gap-12">
            <!-- Ugly hack for JIT dynamic colors -->
            <div class="hidden">
                <span class="bg-indigo-500/10 text-indigo-500" />
                <span class="bg-red-400/10 text-red-400" />
                <span class="bg-blue-400/10 text-blue-400" />
                <span class="bg-amber-500/10 text-amber-500" />
            </div>
            {#each teamApi.team as person}
                <div class="flex gap-4">
                    <div>
                        <Avatar src="/assets/images/team/{person.avatar}" size={86} alt="Avatar of {person.name}" class="relative" />
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
