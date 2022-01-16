<script lang="ts">
    import { page } from "$app/stores";

    export let exact = false;

    $: isActive = exact ? $page.url.pathname === $$props.href : $page.url.pathname.startsWith($$props.href);
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<a {...$$restProps} class="nav-link {isActive ? 'active' : ''}">
    <slot />
</a>
