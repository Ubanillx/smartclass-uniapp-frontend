/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnnouncementAddRequest } from '../models/AnnouncementAddRequest';
import type { AnnouncementUpdateRequest } from '../models/AnnouncementUpdateRequest';
import type { BaseResponse_AnnouncementVO_ } from '../models/BaseResponse_AnnouncementVO_';
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_Announcement_ } from '../models/BaseResponse_Page_Announcement_';
import type { BaseResponse_Page_AnnouncementVO_ } from '../models/BaseResponse_Page_AnnouncementVO_';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AnnouncementControllerService {
    /**
     * addAnnouncement
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addAnnouncementUsingPost({
        announcementAddRequest,
    }: {
        /**
         * announcementAddRequest
         */
        announcementAddRequest: AnnouncementAddRequest,
    }): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/announcements',
            body: announcementAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listAnnouncementByPage
     * @returns BaseResponse_Page_Announcement_ OK
     * @throws ApiError
     */
    public static listAnnouncementByPageUsingGet({
        adminId,
        content,
        coverImage,
        createTime,
        current,
        endTime,
        id,
        isValid,
        pageSize,
        priority,
        sortField,
        sortOrder,
        startTime,
        status,
        title,
    }: {
        adminId?: number,
        content?: string,
        coverImage?: string,
        createTime?: string,
        current?: number,
        endTime?: string,
        id?: number,
        isValid?: boolean,
        pageSize?: number,
        priority?: number,
        sortField?: string,
        sortOrder?: string,
        startTime?: string,
        status?: number,
        title?: string,
    }): CancelablePromise<BaseResponse_Page_Announcement_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/announcements/admin/page',
            query: {
                'adminId': adminId,
                'content': content,
                'coverImage': coverImage,
                'createTime': createTime,
                'current': current,
                'endTime': endTime,
                'id': id,
                'isValid': isValid,
                'pageSize': pageSize,
                'priority': priority,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'startTime': startTime,
                'status': status,
                'title': title,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listAnnouncementVOByPage
     * @returns BaseResponse_Page_AnnouncementVO_ OK
     * @throws ApiError
     */
    public static listAnnouncementVoByPageUsingGet({
        adminId,
        content,
        coverImage,
        createTime,
        current,
        endTime,
        id,
        isValid,
        pageSize,
        priority,
        sortField,
        sortOrder,
        startTime,
        status,
        title,
    }: {
        adminId?: number,
        content?: string,
        coverImage?: string,
        createTime?: string,
        current?: number,
        endTime?: string,
        id?: number,
        isValid?: boolean,
        pageSize?: number,
        priority?: number,
        sortField?: string,
        sortOrder?: string,
        startTime?: string,
        status?: number,
        title?: string,
    }): CancelablePromise<BaseResponse_Page_AnnouncementVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/announcements/page',
            query: {
                'adminId': adminId,
                'content': content,
                'coverImage': coverImage,
                'createTime': createTime,
                'current': current,
                'endTime': endTime,
                'id': id,
                'isValid': isValid,
                'pageSize': pageSize,
                'priority': priority,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'startTime': startTime,
                'status': status,
                'title': title,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getAnnouncementVOById
     * @returns BaseResponse_AnnouncementVO_ OK
     * @throws ApiError
     */
    public static getAnnouncementVoByIdUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_AnnouncementVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/announcements/{id}',
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
     * deleteAnnouncement
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static deleteAnnouncementUsingDelete({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/announcements/{id}',
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
     * updateAnnouncement
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateAnnouncementUsingPut({
        announcementUpdateRequest,
        id,
    }: {
        /**
         * announcementUpdateRequest
         */
        announcementUpdateRequest: AnnouncementUpdateRequest,
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/announcements/{id}/admin',
            path: {
                'id': id,
            },
            body: announcementUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * hasReadAnnouncement
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static hasReadAnnouncementUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/announcements/{id}/has-read',
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
     * readAnnouncement
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static readAnnouncementUsingPost({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/announcements/{id}/read',
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
