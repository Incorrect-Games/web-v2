<script lang="ts">
    import RoadmapCard from "$lib/components/roadmap/roadmap-card.svelte";
    import Seo from "$lib/seo.svelte";
</script>

<div class="roadmap">
    <header>
        <div class="container text-center relative">
            <h2><span class="mr-4 opacity-20">01</span>Launch</h2>
        </div>
    </header>
    <section>
        <div
            class="
        container 
        grid 
        relative             
        after:w-[0]
        after:h-full 
        after:-z-10
        md:absolute-center-after
        after:border-dotted
        dark:after:border-white/10
        after:border-black/10
        after:border-l-4
        absolute-center-after
        after:left-10
    "
        >
            <RoadmapCard dateS="2022-01-16T18:33:36.018Z" icon="public" color="indigo">
                <h3>Website & Social Pressence</h3>
                <p>Focus on launching our company website and start building media presence.</p>
            </RoadmapCard>
            <RoadmapCard dateS="2022-06-16T18:33:36.018Z" icon="emoji_events" color="amber">
                <h3>Project B</h3>
                <p>Minimum Viable Project showcase of Project B.</p>
            </RoadmapCard>
        </div>
    </section>
    <section class="pt-0">
        <div class="container text-center relative">
            <h2><span class="mr-4 opacity-20">02</span>Game Development</h2>
        </div>
        <div class="container pt-12 text-center">
            <span class="icon-graphic material-icons-outlined bg-red-400/10 text-red-400">insights</span>
            <h3 class="mt-8 mb-2">We're still planning!</h3>
            <p>Stay updated with with our <a class="underline decoration-black-400 font-bold" href="/blog/">blog</a>.</p>
        </div>
    </section>
</div>

<Seo title="Incorrect Games | Roadmap" />
