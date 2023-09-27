import type { TransitionConfig } from "svelte/transition";

export interface Transition {
    inParams?: TransitionConfig,
    outParams?: TransitionConfig,
    in?: (node: HTMLElement, params: TransitionConfig) => any,
    out?: (node: HTMLElement, params: TransitionConfig) => any,
    onIntroStart?: (e: CustomEvent<null> & { currentTarget: EventTarget & HTMLElement; }) => void,
    onIntroEnd?: (e: CustomEvent<null> & { currentTarget: EventTarget & HTMLElement; }) => void,
    onOutroStart?: (e: CustomEvent<null> & { currentTarget: EventTarget & HTMLElement; }) => void,
    onOutroEnd?: (e: CustomEvent<null> & { currentTarget: EventTarget & HTMLElement; }) => void
}