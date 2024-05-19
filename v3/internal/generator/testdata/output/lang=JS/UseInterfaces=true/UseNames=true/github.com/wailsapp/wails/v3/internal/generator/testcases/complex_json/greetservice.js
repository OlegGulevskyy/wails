// @ts-check
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
 * @param {$models.Person} person
 * @param {$models.Embedded1} emb
 * @returns {Promise<string> & { cancel(): void }}
 */
export function Greet(person, emb) {
    let $resultPromise = /** @type {any} */($Call.ByName("main.GreetService.Greet", person, emb));
    return $resultPromise;
}
