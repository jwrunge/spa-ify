import { writable } from "svelte/store";
import config from "./config.json";

export const appConfig = writable<typeof config>(config);

export const selectorPrefix = "wpspa";
export const headerSelector = `${selectorPrefix}-header`
export const bodySelector = `${selectorPrefix}-body`
export const footerSelector = `${selectorPrefix}-footer`