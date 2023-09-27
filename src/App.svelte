<script lang="ts">
    import { onMount } from "svelte";
    import { handlePopState, initializeRoute } from "./lib/routing/routeUpdate";
    import Root from "./Root.svelte";
    import { bodySelector, footerSelector, headerSelector } from "./lib/config/settings";

    onMount(() => {
        handlePopState();
        initializeRoute();
    });
</script>

<!-- <Header/> -->
<div id={headerSelector}>
    <Root partName={headerSelector}/>
</div>

<!-- Body -->
<div id={bodySelector}>
    <Root partName={bodySelector}/>
</div>

<!-- <Footer/> -->
<div id={footerSelector}>
    <Root partName={footerSelector}/>
</div>