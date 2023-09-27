<script lang=ts>
    import { afterUpdate, onMount } from "svelte";
    import { IncomingPart } from "./lib/config/partStore";
    import { fly } from "svelte/transition";
    import { interceptLinks } from "./lib/routing/routeUpdate";

    export let partName: string;

    function defaultOutroStart(e: CustomEvent<null> & { currentTarget: EventTarget & HTMLElement; }) {
        const width = e.currentTarget.clientWidth;
        const height = e.currentTarget.clientHeight;

        e.currentTarget.style.width = `${width}px`;
        e.currentTarget.style.height = `${height}px`;
        e.currentTarget.style.overflow = "hidden";
        e.currentTarget.style.position = "absolute";
    }

    //Transition functions
    const inFunction = $IncomingPart?.[partName]?.transition?.in || fly
    const outFunction = $IncomingPart?.[partName]?.transition?.out || fly
    const inParams = $IncomingPart?.[partName]?.transition?.inParams || { x: 200 }
    const outParams = $IncomingPart?.[partName]?.transition?.outParams || { x: -200 }

    //Transition detail functions
    const introStart = $IncomingPart?.[partName]?.transition?.onIntroStart || (()=> true)
    const introEnd = $IncomingPart?.[partName]?.transition?.onIntroEnd || (()=> true)
    const outroStart = $IncomingPart?.[partName]?.transition?.onOutroStart || defaultOutroStart
    const outroEnd = $IncomingPart?.[partName]?.transition?.onOutroEnd || (()=> true)

    onMount(()=> {
        interceptLinks();
    })

    afterUpdate(() => {
        interceptLinks();
    })
</script>

{#if $IncomingPart?.[partName]}
    {#key $IncomingPart?.[partName]?.hash}
        <div
            in:inFunction={inParams} out:outFunction={outParams} 
            on:introstart={introStart}
            on:introend={introEnd}
            on:outrostart={outroStart}
            on:outroend={outroEnd}
        >
            {@html $IncomingPart?.[partName]?.content}
        </div>
    {/key}
{/if}
