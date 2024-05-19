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
 * It has a multiline doc comment
 * The comment has even some * / traps!!
 * @param {string} str
 * @param {$models.Person[] | null} people
 * @param {{"AnotherCount": number, "AnotherOne": $models.Person | null}} $2
 * @param {{ [_: `${number}`]: boolean | null } | null} assoc
 * @param {(number | null)[] | null} $4
 * @param {string[]} other
 * @returns {Promise<[$models.Person, any, number[] | null]> & { cancel(): void }}
 */
export function Greet(str, people, $2, assoc, $4, ...other) {
    let $resultPromise = /** @type {any} */($Call.ByName("main.GreetService.Greet", str, people, $2, assoc, $4, other));
    return $resultPromise;
}
