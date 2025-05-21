/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_CourseReviewVO_ } from '../models/BaseResponse_CourseReviewVO_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Map_string_object_ } from '../models/BaseResponse_Map_string_object_';
import type { BaseResponse_Page_CourseReviewVO_ } from '../models/BaseResponse_Page_CourseReviewVO_';
import type { CourseReview } from '../models/CourseReview';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CourseReviewControllerService {
    /**
     * addReview
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addReviewUsingPost({
        courseReview,
    }: {
        /**
         * courseReview
         */
        courseReview: CourseReview,
    }): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/course/review/add',
            body: courseReview,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * replyReview
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static replyReviewUsingPost({
        replyContent,
        reviewId,
    }: {
        /**
         * replyContent
         */
        replyContent: string,
        /**
         * reviewId
         */
        reviewId: number,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/course/review/admin/reply',
            query: {
                'replyContent': replyContent,
                'reviewId': reviewId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * updateReviewStatus
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateReviewStatusUsingPost({
        reviewId,
        status,
    }: {
        /**
         * reviewId
         */
        reviewId: number,
        /**
         * status
         */
        status: number,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/course/review/admin/status',
            query: {
                'reviewId': reviewId,
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
     * deleteReview
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteReviewUsingPost({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/course/review/delete',
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
     * getReviewById
     * @returns BaseResponse_CourseReviewVO_ OK
     * @throws ApiError
     */
    public static getReviewByIdUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_CourseReviewVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/course/review/get',
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
     * likeReview
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static likeReviewUsingPost({
        reviewId,
    }: {
        /**
         * reviewId
         */
        reviewId: number,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/course/review/like',
            query: {
                'reviewId': reviewId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listReviewsByPage
     * @returns BaseResponse_Page_CourseReviewVO_ OK
     * @throws ApiError
     */
    public static listReviewsByPageUsingGet({
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
    }): CancelablePromise<BaseResponse_Page_CourseReviewVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/course/review/list/page',
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
     * getRatingStats
     * @returns BaseResponse_Map_string_object_ OK
     * @throws ApiError
     */
    public static getRatingStatsUsingGet({
        courseId,
    }: {
        /**
         * courseId
         */
        courseId: number,
    }): CancelablePromise<BaseResponse_Map_string_object_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/course/review/stats',
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
}
