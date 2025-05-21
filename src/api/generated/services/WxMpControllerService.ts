/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WxMpControllerService {
    /**
     * check
     * @returns string OK
     * @throws ApiError
     */
    public static checkUsingGet({
        echostr,
        nonce,
        signature,
        timestamp,
    }: {
        /**
         * echostr
         */
        echostr?: string,
        /**
         * nonce
         */
        nonce?: string,
        /**
         * signature
         */
        signature?: string,
        /**
         * timestamp
         */
        timestamp?: string,
    }): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/',
            query: {
                'echostr': echostr,
                'nonce': nonce,
                'signature': signature,
                'timestamp': timestamp,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * receiveMessage
     * @returns any OK
     * @throws ApiError
     */
    public static receiveMessageUsingPost(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * setMenu
     * @returns string OK
     * @throws ApiError
     */
    public static setMenuUsingGet(): CancelablePromise<string> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/setMenu',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
