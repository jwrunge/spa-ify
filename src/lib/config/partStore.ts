import { writable } from "svelte/store";
import type { PartDefinitionStructure } from "../types/parts";

export const IncomingPart = writable<{[key: string]: PartDefinitionStructure}>({});
export const CurrentPart = writable<{[key: string]: PartDefinitionStructure}>({});