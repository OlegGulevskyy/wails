// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

/**
 * GreetService is great
 * @module
 */

import {Call as $Call, Create as $Create} from "/wails/runtime.js";

import * as $models from "./models.js";

/**
 * Greet does XYZ
 */
export function Greet(name: string, title: $models.Title): Promise<string> & { cancel(): void } {
    let $resultPromise = $Call.ByID(1411160069, name, title) as any;
    return $resultPromise;
}

/**
 * NewPerson creates a new person
 */
export function NewPerson(name: string): Promise<$models.Person | null> & { cancel(): void } {
    let $resultPromise = $Call.ByID(1661412647, name) as any;
    return $resultPromise;
}
