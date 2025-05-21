/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_CourseChapter_ } from '../models/BaseResponse_CourseChapter_';
import type { BaseResponse_List_CourseChapter_ } from '../models/BaseResponse_List_CourseChapter_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_CourseChapter_ } from '../models/BaseResponse_Page_CourseChapter_';
import type { CourseChapter } from '../models/CourseChapter';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CourseChapterControllerService {
    /**
     * addChapter
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addChapterUsingPost({
        courseChapter,
    }: {
        /**
         * courseChapter
         */
        courseChapter: CourseChapter,
    }): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/course/chapter/add',
            body: courseChapter,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * deleteChapter
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteChapterUsingPost({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/course/chapter/delete',
            query: {
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
     * getChapterById
     * @returns BaseResponse_CourseChapter_ OK
     * @throws ApiError
     */
    public static getChapterByIdUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_CourseChapter_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/course/chapter/get',
            query: {
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
     * listChapters
     * @returns BaseResponse_List_CourseChapter_ OK
     * @throws ApiError
     */
    public static listChaptersUsingGet({
        courseId,
    }: {
        /**
         * courseId
         */
        courseId: number,
    }): CancelablePromise<BaseResponse_List_CourseChapter_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/course/chapter/list',
            query: {
                'courseId': courseId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listChaptersByPage
     * @returns BaseResponse_Page_CourseChapter_ OK
     * @throws ApiError
     */
    public static listChaptersByPageUsingGet({
        courseId,
        current = 1,
        pageSize = 10,
    }: {
        /**
         * courseId
         */
        courseId: number,
        /**
         * current
         */
        current?: number,
        /**
         * pageSize
         */
        pageSize?: number,
    }): CancelablePromise<BaseResponse_Page_CourseChapter_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/course/chapter/list/page',
            query: {
                'courseId': courseId,
                'current': current,
                'pageSize': pageSize,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * updateChapter
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateChapterUsingPost({
        courseChapter,
    }: {
        /**
         * courseChapter
         */
        courseChapter: CourseChapter,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/course/chapter/update',
            body: courseChapter,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
