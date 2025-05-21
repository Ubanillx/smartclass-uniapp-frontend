/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_FriendRequestVO_ } from '../models/BaseResponse_FriendRequestVO_';
import type { BaseResponse_List_FriendRequestVO_ } from '../models/BaseResponse_List_FriendRequestVO_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_FriendRequest_ } from '../models/BaseResponse_Page_FriendRequest_';
import type { BaseResponse_Page_FriendRequestVO_ } from '../models/BaseResponse_Page_FriendRequestVO_';
import type { FriendRequestAddRequest } from '../models/FriendRequestAddRequest';
import type { FriendRequestQueryRequest } from '../models/FriendRequestQueryRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FriendRequestControllerService {
    /**
     * addFriendRequest
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addFriendRequestUsingPost({
        friendRequestAddRequest,
    }: {
        /**
         * friendRequestAddRequest
         */
        friendRequestAddRequest: FriendRequestAddRequest,
    }): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/friend-requests',
            body: friendRequestAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listFriendRequestByPage
     * @returns BaseResponse_Page_FriendRequest_ OK
     * @throws ApiError
     */
    public static listFriendRequestByPageUsingGet({
        friendRequestQueryRequest,
    }: {
        /**
         * friendRequestQueryRequest
         */
        friendRequestQueryRequest: FriendRequestQueryRequest,
    }): CancelablePromise<BaseResponse_Page_FriendRequest_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/friend-requests/page',
            body: friendRequestQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listFriendRequestVOByPage
     * @returns BaseResponse_Page_FriendRequestVO_ OK
     * @throws ApiError
     */
    public static listFriendRequestVoByPageUsingGet({
        friendRequestQueryRequest,
    }: {
        /**
         * friendRequestQueryRequest
         */
        friendRequestQueryRequest: FriendRequestQueryRequest,
    }): CancelablePromise<BaseResponse_Page_FriendRequestVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/friend-requests/page/vo',
            body: friendRequestQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getPendingRequestCount
     * @returns BaseResponse_long_ OK
     * @throws ApiError
     */
    public static getPendingRequestCountUsingGet(): CancelablePromise<BaseResponse_long_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/friend-requests/pending/count',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getReceivedFriendRequests
     * @returns BaseResponse_List_FriendRequestVO_ OK
     * @throws ApiError
     */
    public static getReceivedFriendRequestsUsingGet({
        status,
    }: {
        /**
         * status
         */
        status?: string,
    }): CancelablePromise<BaseResponse_List_FriendRequestVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/friend-requests/received',
            query: {
                'status': status,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getSentFriendRequests
     * @returns BaseResponse_List_FriendRequestVO_ OK
     * @throws ApiError
     */
    public static getSentFriendRequestsUsingGet({
        status,
    }: {
        /**
         * status
         */
        status?: string,
    }): CancelablePromise<BaseResponse_List_FriendRequestVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/friend-requests/sent',
            query: {
                'status': status,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getFriendRequestById
     * @returns BaseResponse_FriendRequestVO_ OK
     * @throws ApiError
     */
    public static getFriendRequestByIdUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_FriendRequestVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/friend-requests/{id}',
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
     * deleteFriendRequest
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static deleteFriendRequestUsingDelete({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/friend-requests/{id}',
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
     * acceptFriendRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static acceptFriendRequestUsingPost({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/friend-requests/{id}/accept',
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
     * rejectFriendRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static rejectFriendRequestUsingPost({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/friend-requests/{id}/reject',
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
}
