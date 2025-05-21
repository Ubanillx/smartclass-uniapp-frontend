/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { PostThumbAddRequest } from '../models/PostThumbAddRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostThumbControllerService {
    /**
     * addThumb
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addThumbUsingPost({
        postThumbAddRequest,
    }: {
        /**
         * postThumbAddRequest
         */
        postThumbAddRequest: PostThumbAddRequest,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/post-thumbs',
            body: postThumbAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * hasThumb
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static hasThumbUsingGet({
        postId,
    }: {
        /**
         * postId
         */
        postId: number,
    }): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/post-thumbs/{postId}',
            path: {
                'postId': postId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * cancelThumb
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static cancelThumbUsingDelete({
        postId,
    }: {
        /**
         * postId
         */
        postId: number,
    }): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/post-thumbs/{postId}',
            path: {
                'postId': postId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
