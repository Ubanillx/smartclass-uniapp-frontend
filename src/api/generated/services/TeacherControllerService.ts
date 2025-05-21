/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_List_CourseVO_ } from '../models/BaseResponse_List_CourseVO_';
import type { BaseResponse_List_TeacherVO_ } from '../models/BaseResponse_List_TeacherVO_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_Teacher_ } from '../models/BaseResponse_Page_Teacher_';
import type { BaseResponse_Page_TeacherVO_ } from '../models/BaseResponse_Page_TeacherVO_';
import type { BaseResponse_Teacher_ } from '../models/BaseResponse_Teacher_';
import type { BaseResponse_TeacherVO_ } from '../models/BaseResponse_TeacherVO_';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { TeacherAddRequest } from '../models/TeacherAddRequest';
import type { TeacherQueryRequest } from '../models/TeacherQueryRequest';
import type { TeacherUpdateRequest } from '../models/TeacherUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TeacherControllerService {
    /**
     * addTeacher
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addTeacherUsingPost({
        teacherAddRequest,
    }: {
        /**
         * teacherAddRequest
         */
        teacherAddRequest: TeacherAddRequest,
    }): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/teacher/add',
            body: teacherAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getTeacherCourses
     * @returns BaseResponse_List_CourseVO_ OK
     * @throws ApiError
     */
    public static getTeacherCoursesUsingGet({
        teacherId,
    }: {
        /**
         * teacherId
         */
        teacherId: number,
    }): CancelablePromise<BaseResponse_List_CourseVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/teacher/courses/{teacherId}',
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
     * deleteTeacher
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteTeacherUsingPost({
        deleteRequest,
    }: {
        /**
         * deleteRequest
         */
        deleteRequest: DeleteRequest,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/teacher/delete',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getTeacherById
     * @returns BaseResponse_Teacher_ OK
     * @throws ApiError
     */
    public static getTeacherByIdUsingGet({
        id,
    }: {
        /**
         * id
         */
        id?: number,
    }): CancelablePromise<BaseResponse_Teacher_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/teacher/get',
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
     * getTeacherVOById
     * @returns BaseResponse_TeacherVO_ OK
     * @throws ApiError
     */
    public static getTeacherVoByIdUsingGet({
        id,
    }: {
        /**
         * id
         */
        id?: number,
    }): CancelablePromise<BaseResponse_TeacherVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/teacher/get/vo',
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
     * listTeacherByPage
     * @returns BaseResponse_Page_Teacher_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listTeacherByPageUsingPost({
        teacherQueryRequest,
    }: {
        /**
         * teacherQueryRequest
         */
        teacherQueryRequest: TeacherQueryRequest,
    }): CancelablePromise<BaseResponse_Page_Teacher_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/teacher/list/page',
            body: teacherQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listTeacherVOByPage
     * @returns BaseResponse_Page_TeacherVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listTeacherVoByPageUsingPost({
        teacherQueryRequest,
    }: {
        /**
         * teacherQueryRequest
         */
        teacherQueryRequest: TeacherQueryRequest,
    }): CancelablePromise<BaseResponse_Page_TeacherVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/teacher/list/page/vo',
            body: teacherQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getRecommendTeachers
     * @returns BaseResponse_List_TeacherVO_ OK
     * @throws ApiError
     */
    public static getRecommendTeachersUsingGet({
        expertise,
    }: {
        /**
         * expertise
         */
        expertise?: string,
    }): CancelablePromise<BaseResponse_List_TeacherVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/teacher/recommend',
            query: {
                'expertise': expertise,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * updateTeacher
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateTeacherUsingPost({
        teacherUpdateRequest,
    }: {
        /**
         * teacherUpdateRequest
         */
        teacherUpdateRequest: TeacherUpdateRequest,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/teacher/update',
            body: teacherUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
