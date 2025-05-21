/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_DailyWordVO_ } from '../models/BaseResponse_DailyWordVO_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_DailyWord_ } from '../models/BaseResponse_Page_DailyWord_';
import type { BaseResponse_Page_DailyWordVO_ } from '../models/BaseResponse_Page_DailyWordVO_';
import type { DailyWordAddRequest } from '../models/DailyWordAddRequest';
import type { DailyWordUpdateRequest } from '../models/DailyWordUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DailyWordControllerService {
    /**
     * addDailyWord
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addDailyWordUsingPost({
        dailyWordAddRequest,
    }: {
        /**
         * dailyWordAddRequest
         */
        dailyWordAddRequest: DailyWordAddRequest,
    }): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/daily-words',
            body: dailyWordAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listDailyWordByPage
     * @returns BaseResponse_Page_DailyWord_ OK
     * @throws ApiError
     */
    public static listDailyWordByPageUsingGet({
        adminId,
        category,
        createTime,
        current,
        difficulty,
        id,
        pageSize,
        publishDateEnd,
        publishDateStart,
        sortField,
        sortOrder,
        translation,
        word,
    }: {
        adminId?: number,
        category?: string,
        createTime?: string,
        current?: number,
        difficulty?: number,
        id?: number,
        pageSize?: number,
        publishDateEnd?: string,
        publishDateStart?: string,
        sortField?: string,
        sortOrder?: string,
        translation?: string,
        word?: string,
    }): CancelablePromise<BaseResponse_Page_DailyWord_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/daily-words/admin/page',
            query: {
                'adminId': adminId,
                'category': category,
                'createTime': createTime,
                'current': current,
                'difficulty': difficulty,
                'id': id,
                'pageSize': pageSize,
                'publishDateEnd': publishDateEnd,
                'publishDateStart': publishDateStart,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'translation': translation,
                'word': word,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listDailyWordVOByPage
     * @returns BaseResponse_Page_DailyWordVO_ OK
     * @throws ApiError
     */
    public static listDailyWordVoByPageUsingGet({
        adminId,
        category,
        createTime,
        current,
        difficulty,
        id,
        pageSize,
        publishDateEnd,
        publishDateStart,
        sortField,
        sortOrder,
        translation,
        word,
    }: {
        adminId?: number,
        category?: string,
        createTime?: string,
        current?: number,
        difficulty?: number,
        id?: number,
        pageSize?: number,
        publishDateEnd?: string,
        publishDateStart?: string,
        sortField?: string,
        sortOrder?: string,
        translation?: string,
        word?: string,
    }): CancelablePromise<BaseResponse_Page_DailyWordVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/daily-words/page',
            query: {
                'adminId': adminId,
                'category': category,
                'createTime': createTime,
                'current': current,
                'difficulty': difficulty,
                'id': id,
                'pageSize': pageSize,
                'publishDateEnd': publishDateEnd,
                'publishDateStart': publishDateStart,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'translation': translation,
                'word': word,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * searchDailyWord
     * @returns BaseResponse_Page_DailyWordVO_ OK
     * @throws ApiError
     */
    public static searchDailyWordUsingGet({
        searchText,
    }: {
        /**
         * searchText
         */
        searchText: string,
    }): CancelablePromise<BaseResponse_Page_DailyWordVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/daily-words/search',
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
     * getTodayWord
     * @returns BaseResponse_DailyWordVO_ OK
     * @throws ApiError
     */
    public static getTodayWordUsingGet({
        difficulty,
    }: {
        /**
         * difficulty
         */
        difficulty?: number,
    }): CancelablePromise<BaseResponse_DailyWordVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/daily-words/today',
            query: {
                'difficulty': difficulty,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getDailyWordVOById
     * @returns BaseResponse_DailyWordVO_ OK
     * @throws ApiError
     */
    public static getDailyWordVoByIdUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_DailyWordVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/daily-words/{id}',
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
     * deleteDailyWord
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static deleteDailyWordUsingDelete({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/daily-words/{id}',
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
     * updateDailyWord
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateDailyWordUsingPut({
        dailyWordUpdateRequest,
        id,
    }: {
        /**
         * dailyWordUpdateRequest
         */
        dailyWordUpdateRequest: DailyWordUpdateRequest,
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/daily-words/{id}/admin',
            path: {
                'id': id,
            },
            body: dailyWordUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
