<script lang="ts">
    import dayjs, { Dayjs } from "dayjs";

    export let dateS: string;
    export let icon: string = "public";
    export let color = "red";
    let complete = false;
    $: date = dayjs(dateS);
    $: complete = date <= dayjs();
</script>

<article
    class="
            flex
            place-items-center 
            relative group 
            py-24
            gap-16

            after:w-[2px] 
            after:h-full 
            after:bg-gradient-to-t
            from-neutral-900/0 via-{color}-400{!complete ? '/10' : ''} to-neutral-900/0
            after:-z-10
            absolute-center-after

            even:flex-row-reverse
        "
>
    <div class="w-full text-right group-even:text-left flex place-items-center gap-12 group-even:flex-row-reverse">
        <div class="flex-1">
            <slot />
        </div>
        <div>
            <span class="material-icons-outlined icon-graphic bg-{color}-400/10 text-{color}-400">{icon}</span>
        </div>
    </div>

    <div class="relative">
        {#if complete}
            <span class="flex h-5 w-5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-{color}-500" />
                <span class="relative inline-flex rounded-full h-full w-full bg-{color}-500" />
            </span>
        {:else}
            <span class="flex h-5 w-5">
                <span class="relative inline-flex rounded-full h-full w-full bg-white dark:bg-black border-2 border-{color}-400" />
            </span>
        {/if}
    </div>

    <div class="w-full group-even:text-right">
        <span class="font-bold text-white">{date.format("MMM YYYY")}</span>
    </div>
</article>
