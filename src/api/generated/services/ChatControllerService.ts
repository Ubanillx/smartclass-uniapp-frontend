/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_int_ } from '../models/BaseResponse_int_';
import type { BaseResponse_List_PrivateChatSessionVO_ } from '../models/BaseResponse_List_PrivateChatSessionVO_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Map_string_object_ } from '../models/BaseResponse_Map_string_object_';
import type { BaseResponse_Page_PrivateMessageVO_ } from '../models/BaseResponse_Page_PrivateMessageVO_';
import type { BaseResponse_PrivateChatSessionVO_ } from '../models/BaseResponse_PrivateChatSessionVO_';
import type { PrivateChatSessionAddRequest } from '../models/PrivateChatSessionAddRequest';
import type { PrivateMessageAddRequest } from '../models/PrivateMessageAddRequest';
import type { SseEmitter } from '../models/SseEmitter';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChatControllerService {
    /**
     * connect
     * @returns SseEmitter OK
     * @throws ApiError
     */
    public static connectUsingGet(): CancelablePromise<SseEmitter> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private-chat/connect',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * disconnect
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static disconnectUsingPost(): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/private-chat/disconnect',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * markMessagesAsRead
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static markMessagesAsReadUsingPost({
        messageIds,
        sessionId,
    }: {
        /**
         * messageIds
         */
        messageIds: Array<number>,
        /**
         * sessionId
         */
        sessionId?: string,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/private-chat/messages/batch/read',
            query: {
                'sessionId': sessionId,
            },
            body: messageIds,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * markAllMessagesAsRead
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static markAllMessagesAsReadUsingPost(): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/private-chat/messages/read/all',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * markMessageAsRead
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static markMessageAsReadUsingPost({
        messageId,
        sessionId,
    }: {
        /**
         * messageId
         */
        messageId: number,
        /**
         * sessionId
         */
        sessionId?: string,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/private-chat/messages/{messageId}/read',
            path: {
                'messageId': messageId,
            },
            query: {
                'sessionId': sessionId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * sendSystemNotification
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static sendSystemNotificationUsingPost({
        content,
        data,
        userId,
    }: {
        /**
         * content
         */
        content: string,
        /**
         * data
         */
        data?: any,
        /**
         * userId
         */
        userId?: number,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/private-chat/notify',
            query: {
                'content': content,
                'data': data,
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
     * sendMessage
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static sendMessageUsingPost1({
        privateMessageAddRequest,
    }: {
        /**
         * privateMessageAddRequest
         */
        privateMessageAddRequest: PrivateMessageAddRequest,
    }): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/private-chat/send',
            body: privateMessageAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * createSession
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static createSessionUsingPost1({
        request,
    }: {
        /**
         * request
         */
        request: PrivateChatSessionAddRequest,
    }): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/private-chat/sessions',
            body: request,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listUserSessions
     * @returns BaseResponse_List_PrivateChatSessionVO_ OK
     * @throws ApiError
     */
    public static listUserSessionsUsingGet({
        userId,
    }: {
        /**
         * userId
         */
        userId?: number,
    }): CancelablePromise<BaseResponse_List_PrivateChatSessionVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private-chat/sessions/list',
            query: {
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
     * getSessionWithUser
     * @returns BaseResponse_PrivateChatSessionVO_ OK
     * @throws ApiError
     */
    public static getSessionWithUserUsingGet({
        targetUserId,
    }: {
        /**
         * targetUserId
         */
        targetUserId: number,
    }): CancelablePromise<BaseResponse_PrivateChatSessionVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private-chat/sessions/users/{targetUserId}',
            path: {
                'targetUserId': targetUserId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listSessionMessages
     * @returns BaseResponse_Page_PrivateMessageVO_ OK
     * @throws ApiError
     */
    public static listSessionMessagesUsingGet({
        sessionId,
        current = 1,
        size = 20,
    }: {
        /**
         * sessionId
         */
        sessionId: number,
        /**
         * current
         */
        current?: number,
        /**
         * size
         */
        size?: number,
    }): CancelablePromise<BaseResponse_Page_PrivateMessageVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private-chat/sessions/{sessionId}/messages',
            path: {
                'sessionId': sessionId,
            },
            query: {
                'current': current,
                'size': size,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * markSessionMessagesAsRead
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static markSessionMessagesAsReadUsingPost({
        sessionId,
    }: {
        /**
         * sessionId
         */
        sessionId: number,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/private-chat/sessions/{sessionId}/read/all',
            path: {
                'sessionId': sessionId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getSessionUnreadCount
     * @returns BaseResponse_int_ OK
     * @throws ApiError
     */
    public static getSessionUnreadCountUsingGet({
        sessionId,
    }: {
        /**
         * sessionId
         */
        sessionId: number,
    }): CancelablePromise<BaseResponse_int_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private-chat/sessions/{sessionId}/unread/count',
            path: {
                'sessionId': sessionId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getChatStatus
     * @returns BaseResponse_Map_string_object_ OK
     * @throws ApiError
     */
    public static getChatStatusUsingGet(): CancelablePromise<BaseResponse_Map_string_object_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private-chat/status',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getTotalUnreadCount
     * @returns BaseResponse_int_ OK
     * @throws ApiError
     */
    public static getTotalUnreadCountUsingGet(): CancelablePromise<BaseResponse_int_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/private-chat/unread/count',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
