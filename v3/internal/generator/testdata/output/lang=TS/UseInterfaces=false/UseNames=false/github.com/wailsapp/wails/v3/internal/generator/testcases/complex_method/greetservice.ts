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
 */
export function Greet(str: string, people: $models.Person[], $2: {"AnotherCount": number, "AnotherOne": $models.Person | null}, assoc: { [_: `${number}`]: boolean | null }, $4: (number | null)[], ...other: string[]): Promise<[$models.Person, any, number[]]> & { cancel(): void } {
    let $resultPromise = $Call.ByID(1411160069, str, people, $2, assoc, $4, other) as any;
    let $typingPromise = $resultPromise.then(($result) => {
        $result[0] = $$createType0($result[0]);
        $result[2] = $$createType1($result[2]);
        return $result;
    }) as any;
    $typingPromise.cancel = $resultPromise.cancel.bind($resultPromise);
    return $typingPromise;
}

// Private type creation functions
const $$createType0 = $models.Person.createFrom;
const $$createType1 = $Create.Array($Create.Any);
