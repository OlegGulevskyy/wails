// @ts-check
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

/**
 * SomeMethods exports some methods.
 * @module
 */

import {Call as $Call, Create as $Create} from "/wails/runtime.js";

import * as $models from "./models.js";

/**
 * LikeThisOne is an example method that does nothing.
 * @returns {Promise<[$models.Person, $models.Impersonator, $models.HowDifferent<boolean>, $models.PrivatePerson]> & { cancel(): void }}
 */
export function LikeThisOne() {
    let $resultPromise = /** @type {any} */($Call.ByID(2124352079));
    let $typingPromise = /** @type {any} */($resultPromise.then(($result) => {
        $result[0] = $$createType0($result[0]);
        $result[1] = $$createType1($result[1]);
        $result[2] = $$createType2($result[2]);
        $result[3] = $$createType3($result[3]);
        return $result;
    }));
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

/**
 * LikeThisOtherOne does nothing as well, but is different.
 * @returns {Promise<void> & { cancel(): void }}
 */
export function LikeThisOtherOne() {
    let $resultPromise = /** @type {any} */($Call.ByID(4281222271));
    return $resultPromise;
}

// Private type creation functions
const $$createType0 = $models.Person.createFrom;
const $$createType1 = $models.Impersonator.createFrom;
const $$createType2 = $models.HowDifferent.createFrom($Create.Any);
const $$createType3 = $models.PrivatePerson.createFrom;
