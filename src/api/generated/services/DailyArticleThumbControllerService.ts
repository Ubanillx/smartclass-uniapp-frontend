/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_int_ } from '../models/BaseResponse_int_';
import type { BaseResponse_Page_DailyArticleVO_ } from '../models/BaseResponse_Page_DailyArticleVO_';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DailyArticleThumbControllerService {
    /**
     * listMyThumbArticleByPage
     * @returns BaseResponse_Page_DailyArticleVO_ OK
     * @throws ApiError
     */
    public static listMyThumbArticleByPageUsingGet({
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
            url: '/api/daily-articles/thumbs/me/page',
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
     * thumbArticle
     * @returns BaseResponse_int_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static thumbArticleUsingPost({
        articleId,
    }: {
        /**
         * articleId
         */
        articleId: number,
    }): CancelablePromise<BaseResponse_int_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/daily-articles/{articleId}/thumbs',
            path: {
                'articleId': articleId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * cancelArticleThumb
     * @returns BaseResponse_int_ OK
     * @throws ApiError
     */
    public static cancelArticleThumbUsingDelete({
        articleId,
    }: {
        /**
         * articleId
         */
        articleId: number,
    }): CancelablePromise<BaseResponse_int_> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/daily-articles/{articleId}/thumbs',
            path: {
                'articleId': articleId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * isThumbArticle
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static isThumbArticleUsingGet({
        articleId,
    }: {
        /**
         * articleId
         */
        articleId: number,
    }): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/daily-articles/{articleId}/thumbs/status',
            path: {
                'articleId': articleId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
