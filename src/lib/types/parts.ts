import type { Transition } from "./transitions"

export interface PartDefinitionStructure {
    content: string
    transition?: Transition
    hash: string
}