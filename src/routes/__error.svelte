<script context="module">
    /** @type {import('@sveltejs/kit').ErrorLoad} */
    export function load({ error, status }) {
        return {
            props: {
                error,
                status,
            },
        };
    }
</script>

<script lang="ts">
    export let error;
    export let status;
</script>

<section>
    <div class="container">
        <h1>{status}</h1>
        <p>{error.message}</p>
        {#if error.stack}
            <pre>{error.stack}</pre>
        {/if}
    </div>
</section>
