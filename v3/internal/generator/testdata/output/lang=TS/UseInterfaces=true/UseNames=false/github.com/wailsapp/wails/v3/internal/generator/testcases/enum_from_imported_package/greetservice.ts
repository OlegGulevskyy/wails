// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

/**
 * GreetService is great
 * @module
 */

import {Call as $Call, Create as $Create} from "/wails/runtime.js";

import * as services$0 from "./services/models.js";

/**
 * Greet does XYZ
 */
export function Greet(name: string, title: services$0.Title): Promise<string> & { cancel(): void } {
    let $resultPromise = $Call.ByID(1411160069, name, title) as any;
    return $resultPromise;
}
