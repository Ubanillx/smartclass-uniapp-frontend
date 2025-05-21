/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_UserFeedback_ } from '../models/BaseResponse_Page_UserFeedback_';
import type { BaseResponse_UserFeedback_ } from '../models/BaseResponse_UserFeedback_';
import type { UserFeedbackAddRequest } from '../models/UserFeedbackAddRequest';
import type { UserFeedbackProcessRequest } from '../models/UserFeedbackProcessRequest';
import type { UserFeedbackReplyAddRequest } from '../models/UserFeedbackReplyAddRequest';
import type { UserFeedbackUpdateRequest } from '../models/UserFeedbackUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserFeedbackControllerService {
    /**
     * addUserFeedback
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addUserFeedbackUsingPost({
        userFeedbackAddRequest,
    }: {
        /**
         * userFeedbackAddRequest
         */
        userFeedbackAddRequest: UserFeedbackAddRequest,
    }): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user-feedbacks',
            body: userFeedbackAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listUserFeedbackByPage
     * @returns BaseResponse_Page_UserFeedback_ OK
     * @throws ApiError
     */
    public static listUserFeedbackByPageUsingGet({
        current,
        feedbackType,
        pageSize,
        sortField,
        sortOrder,
        status,
        title,
        userId,
    }: {
        current?: number,
        feedbackType?: string,
        pageSize?: number,
        sortField?: string,
        sortOrder?: string,
        status?: number,
        title?: string,
        userId?: number,
    }): CancelablePromise<BaseResponse_Page_UserFeedback_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user-feedbacks/page',
            query: {
                'current': current,
                'feedbackType': feedbackType,
                'pageSize': pageSize,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'status': status,
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
     * getUnreadCount
     * @returns BaseResponse_long_ OK
     * @throws ApiError
     */
    public static getUnreadCountUsingGet(): CancelablePromise<BaseResponse_long_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user-feedbacks/unread-count',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getUserFeedbackById
     * @returns BaseResponse_UserFeedback_ OK
     * @throws ApiError
     */
    public static getUserFeedbackByIdUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_UserFeedback_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/user-feedbacks/{id}',
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
     * updateUserFeedback
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateUserFeedbackUsingPut({
        id,
        userFeedbackUpdateRequest,
    }: {
        /**
         * id
         */
        id: number,
        /**
         * userFeedbackUpdateRequest
         */
        userFeedbackUpdateRequest: UserFeedbackUpdateRequest,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/user-feedbacks/{id}',
            path: {
                'id': id,
            },
            body: userFeedbackUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * deleteUserFeedback
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static deleteUserFeedbackUsingDelete({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/user-feedbacks/{id}',
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
     * processUserFeedback
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static processUserFeedbackUsingPut({
        id,
        userFeedbackProcessRequest,
    }: {
        /**
         * id
         */
        id: number,
        /**
         * userFeedbackProcessRequest
         */
        userFeedbackProcessRequest: UserFeedbackProcessRequest,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/user-feedbacks/{id}/process',
            path: {
                'id': id,
            },
            body: userFeedbackProcessRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * processAndReply
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static processAndReplyUsingPost({
        id,
        userFeedbackReplyAddRequest,
    }: {
        /**
         * id
         */
        id: number,
        /**
         * userFeedbackReplyAddRequest
         */
        userFeedbackReplyAddRequest: UserFeedbackReplyAddRequest,
    }): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/user-feedbacks/{id}/reply',
            path: {
                'id': id,
            },
            body: userFeedbackReplyAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
