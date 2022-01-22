<script lang="ts">
    import dayjs, { Dayjs } from "dayjs";

    export let dateS: string;
    export let icon: string = "public";
    export let color = "red";
    let complete = false;
    $: date = dayjs(dateS);
    $: complete = date <= dayjs();

    /**
     *
     * It's easier to just have to different card styles depending on mobile vs desktop
     * as the html structure is a bit wonky to make work.
     *
     * I WOULD RECOMMEND NEVER TRYING TO EDIT THIS WITHOUT REFACTORING AS IT IS A MESS...
     *
     */
</script>

<!-- 

    Desktop Card.

 -->

<article
    class="
            hidden
            md:flex
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
    <div
        class="w-full text-right group-even:text-left flex place-items-center gap-4 lg:gap-12 group-even:flex-col-reverse lg:group-even:flex-row-reverse flex-col-reverse lg:flex-row"
    >
        <div class="flex-1 group-odd:ml-auto group-even:mr-auto">
            <slot />
        </div>
        <div class="group-odd:ml-auto group-even:mr-auto">
            <span
                class="material-icons-outlined icon-graphic icon-graphic w-[64px] h-[64px] text-3xl lg:h-[82px] lg:w-[82px] lg:text-5xl flex place-items-center place-content-center bg-{color}-400/10 text-{color}-400"
                >{icon}</span
            >
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
        <span class="font-bold dark:text-white">{date.format("MMM YYYY")}</span>
    </div>
</article>

<!--

    Mobile Card

-->

<article
    class="
            flex
            md:hidden
            place-items-center 
            relative group 
            py-24
            gap-8

            after:w-[2px] 
            after:h-full 
            after:bg-gradient-to-t
            from-neutral-900/0 via-{color}-400{!complete ? '/10' : ''} to-neutral-900/0
            after:-z-10
            absolute-center-after
            after:left-6
        "
>
    <div class="absolute left-[15px] mx-auto flex-1">
        {#if complete}
            <span class="flex h-5 w-5 relative mx-auto">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-{color}-500" />
                <span class="relative inline-flex rounded-full h-full w-full bg-{color}-500" />
            </span>
        {:else}
            <span class="flex h-5 w-5">
                <span class="relative inline-flex rounded-full h-full w-full bg-white dark:bg-black border-2 border-{color}-400" />
            </span>
        {/if}
    </div>
    <div class="w-full pl-20">
        <div class="group-odd:ml-auto group-even:mr-auto">
            <span
                class="material-icons-outlined icon-graphic icon-graphic w-[64px] h-[64px] text-3xl lg:h-[82px] lg:w-[82px] lg:text-5xl flex place-items-center place-content-center bg-{color}-400/10 text-{color}-400"
            >
                {icon}
            </span>
        </div>
        <div class="w-full text-left py-6">
            <span class="font-bold dark:text-white">{date.format("MMM YYYY")}</span>
        </div>
        <div class="flex-1 group-odd:ml-auto group-even:mr-auto">
            <slot />
        </div>
    </div>
</article>

<!-- 

    We can not work with odd/even if we build 2 articles for every card.
    ... unless we add an empty artricle :flushed:

 -->

<article />
