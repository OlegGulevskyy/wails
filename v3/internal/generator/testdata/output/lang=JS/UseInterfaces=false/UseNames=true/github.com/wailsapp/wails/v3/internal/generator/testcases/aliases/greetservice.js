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
 * Get someone
 * @param {$models.Alias} aliasValue
 * @returns {Promise<$models.Person> & { cancel(): void }}
 */
export function Get(aliasValue) {
    let $resultPromise = /** @type {any} */($Call.ByName("main.GreetService.Get", aliasValue));
    let $typingPromise = /** @type {any} */($resultPromise.then(($result) => {
        return $$createType0($result);
    }));
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

/**
 * Get someone quite different
 * @returns {Promise<$models.GenericPerson<boolean>> & { cancel(): void }}
 */
export function GetButDifferent() {
    let $resultPromise = /** @type {any} */($Call.ByName("main.GreetService.GetButDifferent"));
    let $typingPromise = /** @type {any} */($resultPromise.then(($result) => {
        return $$createType1($result);
    }));
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

/**
 * Greet a lot of unusual things.
 * @param {$models.EmptyAliasStruct} $0
 * @param {$models.EmptyStruct} $1
 * @returns {Promise<$models.AliasStruct> & { cancel(): void }}
 */
export function Greet($0, $1) {
    let $resultPromise = /** @type {any} */($Call.ByName("main.GreetService.Greet", $0, $1));
    let $typingPromise = /** @type {any} */($resultPromise.then(($result) => {
        return $$createType5($result);
    }));
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

// Private type creation functions
const $$createType0 = $models.Person.createFrom;
const $$createType1 = $models.GenericPerson.createFrom($Create.Any);
const $$createType2 = $Create.Array($Create.Any);
const $$createType3 = $Create.Array($Create.Any);
const $$createType4 = $Create.Struct({
    "NoMoreIdeas": $$createType3,
});
const $$createType5 = $Create.Struct({
    "Foo": $$createType2,
    "Other": $$createType4,
});
