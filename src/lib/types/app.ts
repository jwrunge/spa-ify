import type { BlockType } from "./parts";
import type { Transition } from "./transitions";

export interface AppState {

}

export interface AppConfig {
    transitions: Map<BlockType, Transition>,
    hooks: {
        onHrefUpdate: (data: any) => any,
        onHashUpdate: (data: any) => any,
    }
}