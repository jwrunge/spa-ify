import { writable } from "svelte/store";
import config from "./config.json";

export interface Config {
    header: {
        selector: string
        regex?: boolean
        allowScriptExecution?: boolean
    };
    body: {
        selector: string
        regex?: boolean
        allowScriptExecution?: boolean
    };
    footer: {
        selector: string
        regex?: boolean
        allowScriptExecution?: boolean
    };
}

export const appConfig = writable<Config>(config);

export const selectorPrefix = "wpspa";
export const headerSelector = `${selectorPrefix}-header`
export const bodySelector = `${selectorPrefix}-body`
export const footerSelector = `${selectorPrefix}-footer`