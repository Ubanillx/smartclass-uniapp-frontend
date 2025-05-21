/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_Course_ } from '../models/BaseResponse_Course_';
import type { BaseResponse_CourseVO_ } from '../models/BaseResponse_CourseVO_';
import type { BaseResponse_List_Course_ } from '../models/BaseResponse_List_Course_';
import type { BaseResponse_List_CourseVO_ } from '../models/BaseResponse_List_CourseVO_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_CourseVO_ } from '../models/BaseResponse_Page_CourseVO_';
import type { CourseAddRequest } from '../models/CourseAddRequest';
import type { CourseUpdateRequest } from '../models/CourseUpdateRequest';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CourseControllerService {
    /**
     * addCourse
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addCourseUsingPost({
        courseAddRequest,
    }: {
        /**
         * courseAddRequest
         */
        courseAddRequest: CourseAddRequest,
    }): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/course/add',
            body: courseAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * deleteCourse
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteCourseUsingPost({
        deleteRequest,
    }: {
        /**
         * deleteRequest
         */
        deleteRequest: DeleteRequest,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/course/delete',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getCourseById
     * @returns BaseResponse_Course_ OK
     * @throws ApiError
     */
    public static getCourseByIdUsingGet({
        id,
    }: {
        /**
         * id
         */
        id?: number,
    }): CancelablePromise<BaseResponse_Course_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/course/get',
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
     * getCourseVOById
     * @returns BaseResponse_CourseVO_ OK
     * @throws ApiError
     */
    public static getCourseVoByIdUsingGet({
        id,
    }: {
        /**
         * id
         */
        id?: number,
    }): CancelablePromise<BaseResponse_CourseVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/course/get/vo',
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
     * listCourse
     * @returns BaseResponse_List_Course_ OK
     * @throws ApiError
     */
    public static listCourseUsingGet({
        categoryId,
        courseType,
        createTime,
        current,
        difficulty,
        id,
        maxPrice,
        minPrice,
        pageSize,
        sortField,
        sortOrder,
        status,
        tags,
        teacherId,
        title,
        updateTime,
        userId,
    }: {
        categoryId?: number,
        courseType?: number,
        createTime?: string,
        current?: number,
        difficulty?: number,
        id?: number,
        maxPrice?: number,
        minPrice?: number,
        pageSize?: number,
        sortField?: string,
        sortOrder?: string,
        status?: number,
        tags?: string,
        teacherId?: number,
        title?: string,
        updateTime?: string,
        userId?: number,
    }): CancelablePromise<BaseResponse_List_Course_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/course/list',
            query: {
                'categoryId': categoryId,
                'courseType': courseType,
                'createTime': createTime,
                'current': current,
                'difficulty': difficulty,
                'id': id,
                'maxPrice': maxPrice,
                'minPrice': minPrice,
                'pageSize': pageSize,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'status': status,
                'tags': tags,
                'teacherId': teacherId,
                'title': title,
                'updateTime': updateTime,
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
     * listCourseVOByPage
     * @returns BaseResponse_Page_CourseVO_ OK
     * @throws ApiError
     */
    public static listCourseVoByPageUsingGet({
        categoryId,
        courseType,
        createTime,
        current,
        difficulty,
        id,
        maxPrice,
        minPrice,
        pageSize,
        sortField,
        sortOrder,
        status,
        tags,
        teacherId,
        title,
        updateTime,
        userId,
    }: {
        categoryId?: number,
        courseType?: number,
        createTime?: string,
        current?: number,
        difficulty?: number,
        id?: number,
        maxPrice?: number,
        minPrice?: number,
        pageSize?: number,
        sortField?: string,
        sortOrder?: string,
        status?: number,
        tags?: string,
        teacherId?: number,
        title?: string,
        updateTime?: string,
        userId?: number,
    }): CancelablePromise<BaseResponse_Page_CourseVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/course/list/page/vo',
            query: {
                'categoryId': categoryId,
                'courseType': courseType,
                'createTime': createTime,
                'current': current,
                'difficulty': difficulty,
                'id': id,
                'maxPrice': maxPrice,
                'minPrice': minPrice,
                'pageSize': pageSize,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'status': status,
                'tags': tags,
                'teacherId': teacherId,
                'title': title,
                'updateTime': updateTime,
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
     * listMyCourseVOByPage
     * @returns BaseResponse_Page_CourseVO_ OK
     * @throws ApiError
     */
    public static listMyCourseVoByPageUsingGet({
        categoryId,
        courseType,
        createTime,
        current,
        difficulty,
        id,
        maxPrice,
        minPrice,
        pageSize,
        sortField,
        sortOrder,
        status,
        tags,
        teacherId,
        title,
        updateTime,
        userId,
    }: {
        categoryId?: number,
        courseType?: number,
        createTime?: string,
        current?: number,
        difficulty?: number,
        id?: number,
        maxPrice?: number,
        minPrice?: number,
        pageSize?: number,
        sortField?: string,
        sortOrder?: string,
        status?: number,
        tags?: string,
        teacherId?: number,
        title?: string,
        updateTime?: string,
        userId?: number,
    }): CancelablePromise<BaseResponse_Page_CourseVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/course/my/list/page/vo',
            query: {
                'categoryId': categoryId,
                'courseType': courseType,
                'createTime': createTime,
                'current': current,
                'difficulty': difficulty,
                'id': id,
                'maxPrice': maxPrice,
                'minPrice': minPrice,
                'pageSize': pageSize,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'status': status,
                'tags': tags,
                'teacherId': teacherId,
                'title': title,
                'updateTime': updateTime,
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
     * rateCourse
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static rateCourseUsingPost({
        id,
        score,
    }: {
        /**
         * id
         */
        id: number,
        /**
         * score
         */
        score: number,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/course/rate/{id}',
            path: {
                'id': id,
            },
            query: {
                'score': score,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getRecommendCourses
     * @returns BaseResponse_List_CourseVO_ OK
     * @throws ApiError
     */
    public static getRecommendCoursesUsingGet({
        categoryId,
        difficulty,
        limit = 10,
    }: {
        /**
         * categoryId
         */
        categoryId?: number,
        /**
         * difficulty
         */
        difficulty?: number,
        /**
         * limit
         */
        limit?: number,
    }): CancelablePromise<BaseResponse_List_CourseVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/course/recommend',
            query: {
                'categoryId': categoryId,
                'difficulty': difficulty,
                'limit': limit,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getCoursesByTeacher
     * @returns BaseResponse_List_CourseVO_ OK
     * @throws ApiError
     */
    public static getCoursesByTeacherUsingGet({
        teacherId,
    }: {
        /**
         * teacherId
         */
        teacherId: number,
    }): CancelablePromise<BaseResponse_List_CourseVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/course/teacher/{teacherId}',
            path: {
                'teacherId': teacherId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * updateCourse
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateCourseUsingPost({
        courseUpdateRequest,
    }: {
        /**
         * courseUpdateRequest
         */
        courseUpdateRequest: CourseUpdateRequest,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/course/update',
            body: courseUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
