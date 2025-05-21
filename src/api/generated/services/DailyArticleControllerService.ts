/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_DailyArticleVO_ } from '../models/BaseResponse_DailyArticleVO_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_DailyArticle_ } from '../models/BaseResponse_Page_DailyArticle_';
import type { BaseResponse_Page_DailyArticleVO_ } from '../models/BaseResponse_Page_DailyArticleVO_';
import type { DailyArticleAddRequest } from '../models/DailyArticleAddRequest';
import type { DailyArticleUpdateRequest } from '../models/DailyArticleUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DailyArticleControllerService {
    /**
     * addDailyArticle
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addDailyArticleUsingPost({
        dailyArticleAddRequest,
    }: {
        /**
         * dailyArticleAddRequest
         */
        dailyArticleAddRequest: DailyArticleAddRequest,
    }): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/daily-articles',
            body: dailyArticleAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listDailyArticleByPage
     * @returns BaseResponse_Page_DailyArticle_ OK
     * @throws ApiError
     */
    public static listDailyArticleByPageUsingGet({
        adminId,
        author,
        category,
        content,
        createTime,
        current,
        difficulty,
        id,
        maxReadTime,
        minReadTime,
        minViewCount,
        pageSize,
        publishDateEnd,
        publishDateStart,
        sortField,
        sortOrder,
        source,
        summary,
        tags,
        title,
    }: {
        adminId?: number,
        author?: string,
        category?: string,
        content?: string,
        createTime?: string,
        current?: number,
        difficulty?: number,
        id?: number,
        maxReadTime?: number,
        minReadTime?: number,
        minViewCount?: number,
        pageSize?: number,
        publishDateEnd?: string,
        publishDateStart?: string,
        sortField?: string,
        sortOrder?: string,
        source?: string,
        summary?: string,
        tags?: string,
        title?: string,
    }): CancelablePromise<BaseResponse_Page_DailyArticle_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/daily-articles/admin/page',
            query: {
                'adminId': adminId,
                'author': author,
                'category': category,
                'content': content,
                'createTime': createTime,
                'current': current,
                'difficulty': difficulty,
                'id': id,
                'maxReadTime': maxReadTime,
                'minReadTime': minReadTime,
                'minViewCount': minViewCount,
                'pageSize': pageSize,
                'publishDateEnd': publishDateEnd,
                'publishDateStart': publishDateStart,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'source': source,
                'summary': summary,
                'tags': tags,
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
     * listDailyArticleVOByPage
     * @returns BaseResponse_Page_DailyArticleVO_ OK
     * @throws ApiError
     */
    public static listDailyArticleVoByPageUsingGet({
        adminId,
        author,
        category,
        content,
        createTime,
        current,
        difficulty,
        id,
        maxReadTime,
        minReadTime,
        minViewCount,
        pageSize,
        publishDateEnd,
        publishDateStart,
        sortField,
        sortOrder,
        source,
        summary,
        tags,
        title,
    }: {
        adminId?: number,
        author?: string,
        category?: string,
        content?: string,
        createTime?: string,
        current?: number,
        difficulty?: number,
        id?: number,
        maxReadTime?: number,
        minReadTime?: number,
        minViewCount?: number,
        pageSize?: number,
        publishDateEnd?: string,
        publishDateStart?: string,
        sortField?: string,
        sortOrder?: string,
        source?: string,
        summary?: string,
        tags?: string,
        title?: string,
    }): CancelablePromise<BaseResponse_Page_DailyArticleVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/daily-articles/page',
            query: {
                'adminId': adminId,
                'author': author,
                'category': category,
                'content': content,
                'createTime': createTime,
                'current': current,
                'difficulty': difficulty,
                'id': id,
                'maxReadTime': maxReadTime,
                'minReadTime': minReadTime,
                'minViewCount': minViewCount,
                'pageSize': pageSize,
                'publishDateEnd': publishDateEnd,
                'publishDateStart': publishDateStart,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'source': source,
                'summary': summary,
                'tags': tags,
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
     * searchDailyArticle
     * @returns BaseResponse_Page_DailyArticleVO_ OK
     * @throws ApiError
     */
    public static searchDailyArticleUsingGet({
        searchText,
    }: {
        /**
         * searchText
         */
        searchText: string,
    }): CancelablePromise<BaseResponse_Page_DailyArticleVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/daily-articles/search',
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
     * getTodayArticle
     * @returns BaseResponse_DailyArticleVO_ OK
     * @throws ApiError
     */
    public static getTodayArticleUsingGet(): CancelablePromise<BaseResponse_DailyArticleVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/daily-articles/today',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getDailyArticleVOById
     * @returns BaseResponse_DailyArticleVO_ OK
     * @throws ApiError
     */
    public static getDailyArticleVoByIdUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_DailyArticleVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/daily-articles/{id}',
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
     * updateDailyArticle
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateDailyArticleUsingPut({
        dailyArticleUpdateRequest,
        id,
    }: {
        /**
         * dailyArticleUpdateRequest
         */
        dailyArticleUpdateRequest: DailyArticleUpdateRequest,
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/daily-articles/{id}',
            path: {
                'id': id,
            },
            body: dailyArticleUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * deleteDailyArticle
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static deleteDailyArticleUsingDelete({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/daily-articles/{id}',
            path: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
