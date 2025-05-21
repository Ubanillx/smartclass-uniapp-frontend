/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_int_ } from '../models/BaseResponse_int_';
import type { BaseResponse_Page_DailyArticleVO_ } from '../models/BaseResponse_Page_DailyArticleVO_';
import type { DailyArticleQueryRequest } from '../models/DailyArticleQueryRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DailyArticleFavourControllerService {
    /**
     * listMyFavourArticleByPage
     * @returns BaseResponse_Page_DailyArticleVO_ OK
     * @throws ApiError
     */
    public static listMyFavourArticleByPageUsingGet({
        dailyArticleQueryRequest,
    }: {
        /**
         * dailyArticleQueryRequest
         */
        dailyArticleQueryRequest: DailyArticleQueryRequest,
    }): CancelablePromise<BaseResponse_Page_DailyArticleVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/daily-articles/favourites/me/page',
            body: dailyArticleQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * doArticleFavour
     * @returns BaseResponse_int_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static doArticleFavourUsingPost({
        articleId,
    }: {
        /**
         * articleId
         */
        articleId: number,
    }): CancelablePromise<BaseResponse_int_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/daily-articles/favourites/{articleId}',
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
     * cancelArticleFavour
     * @returns BaseResponse_int_ OK
     * @throws ApiError
     */
    public static cancelArticleFavourUsingDelete({
        articleId,
    }: {
        /**
         * articleId
         */
        articleId: number,
    }): CancelablePromise<BaseResponse_int_> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/daily-articles/favourites/{articleId}',
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
     * isFavourArticle
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static isFavourArticleUsingGet({
        articleId,
    }: {
        /**
         * articleId
         */
        articleId: number,
    }): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/daily-articles/favourites/{articleId}/status',
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
