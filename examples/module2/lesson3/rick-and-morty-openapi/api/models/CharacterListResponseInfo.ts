/* tslint:disable */
/* eslint-disable */
/**
 * Rick and Morty API
 * Access information about characters from Rick and Morty.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CharacterListResponseInfo
 */
export interface CharacterListResponseInfo {
    /**
     * The total number of characters.
     * @type {number}
     * @memberof CharacterListResponseInfo
     */
    count?: number;
    /**
     * The total number of pages.
     * @type {number}
     * @memberof CharacterListResponseInfo
     */
    pages?: number;
    /**
     * URL of the next page.
     * @type {string}
     * @memberof CharacterListResponseInfo
     */
    next?: string | null;
    /**
     * URL of the previous page.
     * @type {string}
     * @memberof CharacterListResponseInfo
     */
    prev?: string | null;
}

/**
 * Check if a given object implements the CharacterListResponseInfo interface.
 */
export function instanceOfCharacterListResponseInfo(value: object): value is CharacterListResponseInfo {
    return true;
}

export function CharacterListResponseInfoFromJSON(json: any): CharacterListResponseInfo {
    return CharacterListResponseInfoFromJSONTyped(json, false);
}

export function CharacterListResponseInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CharacterListResponseInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'] == null ? undefined : json['count'],
        'pages': json['pages'] == null ? undefined : json['pages'],
        'next': json['next'] == null ? undefined : json['next'],
        'prev': json['prev'] == null ? undefined : json['prev'],
    };
}

export function CharacterListResponseInfoToJSON(json: any): CharacterListResponseInfo {
    return CharacterListResponseInfoToJSONTyped(json, false);
}

export function CharacterListResponseInfoToJSONTyped(value?: CharacterListResponseInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'count': value['count'],
        'pages': value['pages'],
        'next': value['next'],
        'prev': value['prev'],
    };
}

