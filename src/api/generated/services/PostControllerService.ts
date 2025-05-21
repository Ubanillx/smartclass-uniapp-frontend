/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_Post_ } from '../models/BaseResponse_Page_Post_';
import type { BaseResponse_Page_PostVO_ } from '../models/BaseResponse_Page_PostVO_';
import type { BaseResponse_PostVO_ } from '../models/BaseResponse_PostVO_';
import type { PostAddRequest } from '../models/PostAddRequest';
import type { PostEditRequest } from '../models/PostEditRequest';
import type { PostUpdateRequest } from '../models/PostUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PostControllerService {
    /**
     * addPost
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addPostUsingPost({
        postAddRequest,
    }: {
        /**
         * postAddRequest
         */
        postAddRequest: PostAddRequest,
    }): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/posts',
            body: postAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listPostByPage
     * @returns BaseResponse_Page_Post_ OK
     * @throws ApiError
     */
    public static listPostByPageUsingGet({
        content,
        current,
        favourUserId,
        id,
        notId,
        orTags,
        pageSize,
        searchText,
        sortField,
        sortOrder,
        tags,
        title,
        userId,
    }: {
        content?: string,
        current?: number,
        favourUserId?: number,
        id?: number,
        notId?: number,
        orTags?: Array<string>,
        pageSize?: number,
        searchText?: string,
        sortField?: string,
        sortOrder?: string,
        tags?: Array<string>,
        title?: string,
        userId?: number,
    }): CancelablePromise<BaseResponse_Page_Post_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/posts/admin/page',
            query: {
                'content': content,
                'current': current,
                'favourUserId': favourUserId,
                'id': id,
                'notId': notId,
                'orTags': orTags,
                'pageSize': pageSize,
                'searchText': searchText,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'tags': tags,
                'title': title,
                'userId': userId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listMyPostVOByPage
     * @returns BaseResponse_Page_PostVO_ OK
     * @throws ApiError
     */
    public static listMyPostVoByPageUsingGet({
        content,
        current,
        favourUserId,
        id,
        notId,
        orTags,
        pageSize,
        searchText,
        sortField,
        sortOrder,
        tags,
        title,
        userId,
    }: {
        content?: string,
        current?: number,
        favourUserId?: number,
        id?: number,
        notId?: number,
        orTags?: Array<string>,
        pageSize?: number,
        searchText?: string,
        sortField?: string,
        sortOrder?: string,
        tags?: Array<string>,
        title?: string,
        userId?: number,
    }): CancelablePromise<BaseResponse_Page_PostVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/posts/me/page',
            query: {
                'content': content,
                'current': current,
                'favourUserId': favourUserId,
                'id': id,
                'notId': notId,
                'orTags': orTags,
                'pageSize': pageSize,
                'searchText': searchText,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'tags': tags,
                'title': title,
                'userId': userId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listPostVOByPage
     * @returns BaseResponse_Page_PostVO_ OK
     * @throws ApiError
     */
    public static listPostVoByPageUsingGet({
        content,
        current,
        favourUserId,
        id,
        notId,
        orTags,
        pageSize,
        searchText,
        sortField,
        sortOrder,
        tags,
        title,
        userId,
    }: {
        content?: string,
        current?: number,
        favourUserId?: number,
        id?: number,
        notId?: number,
        orTags?: Array<string>,
        pageSize?: number,
        searchText?: string,
        sortField?: string,
        sortOrder?: string,
        tags?: Array<string>,
        title?: string,
        userId?: number,
    }): CancelablePromise<BaseResponse_Page_PostVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/posts/page',
            query: {
                'content': content,
                'current': current,
                'favourUserId': favourUserId,
                'id': id,
                'notId': notId,
                'orTags': orTags,
                'pageSize': pageSize,
                'searchText': searchText,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'tags': tags,
                'title': title,
                'userId': userId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * searchPostVOByPage
     * @returns BaseResponse_Page_PostVO_ OK
     * @throws ApiError
     */
    public static searchPostVoByPageUsingGet({
        searchText,
    }: {
        /**
         * searchText
         */
        searchText?: string,
    }): CancelablePromise<BaseResponse_Page_PostVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/posts/search/page',
            query: {
                'searchText': searchText,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getPostVOById
     * @returns BaseResponse_PostVO_ OK
     * @throws ApiError
     */
    public static getPostVoByIdUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_PostVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/posts/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * editPost
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static editPostUsingPut({
        id,
        postEditRequest,
    }: {
        /**
         * id
         */
        id: number,
        /**
         * postEditRequest
         */
        postEditRequest: PostEditRequest,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/posts/{id}',
            path: {
                'id': id,
            },
            body: postEditRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * deletePost
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static deletePostUsingDelete({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/posts/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * updatePost
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updatePostUsingPut({
        id,
        postUpdateRequest,
    }: {
        /**
         * id
         */
        id: number,
        /**
         * postUpdateRequest
         */
        postUpdateRequest: PostUpdateRequest,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/posts/{id}/admin',
            path: {
                'id': id,
            },
            body: postUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
