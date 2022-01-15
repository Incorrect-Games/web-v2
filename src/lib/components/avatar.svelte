<script lang="ts">
    export let clazz = "";
    export { clazz as class };
    export let size: Number;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img {...$$restProps} style="height: {size}px; width: {size}px;" class="{clazz} rounded-3xl" />
