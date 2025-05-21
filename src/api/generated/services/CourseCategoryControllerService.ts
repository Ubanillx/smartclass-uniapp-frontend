/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_CourseCategory_ } from '../models/BaseResponse_CourseCategory_';
import type { BaseResponse_List_CourseCategory_ } from '../models/BaseResponse_List_CourseCategory_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { CourseCategory } from '../models/CourseCategory';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CourseCategoryControllerService {
    /**
     * addCategory
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addCategoryUsingPost({
        courseCategory,
    }: {
        /**
         * courseCategory
         */
        courseCategory: CourseCategory,
    }): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/course/category/add',
            body: courseCategory,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * deleteCategory
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteCategoryUsingPost({
        deleteRequest,
    }: {
        /**
         * deleteRequest
         */
        deleteRequest: DeleteRequest,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/course/category/delete',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getCategoryById
     * @returns BaseResponse_CourseCategory_ OK
     * @throws ApiError
     */
    public static getCategoryByIdUsingGet({
        id,
    }: {
        /**
         * id
         */
        id?: number,
    }): CancelablePromise<BaseResponse_CourseCategory_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/course/category/get',
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
     * getSubCategories
     * @returns BaseResponse_List_CourseCategory_ OK
     * @throws ApiError
     */
    public static getSubCategoriesUsingGet({
        parentId,
    }: {
        /**
         * parentId
         */
        parentId: number,
    }): CancelablePromise<BaseResponse_List_CourseCategory_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/course/category/sub',
            query: {
                'parentId': parentId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getTopCategories
     * @returns BaseResponse_List_CourseCategory_ OK
     * @throws ApiError
     */
    public static getTopCategoriesUsingGet(): CancelablePromise<BaseResponse_List_CourseCategory_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/course/category/top',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * updateCategory
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateCategoryUsingPost({
        courseCategory,
    }: {
        /**
         * courseCategory
         */
        courseCategory: CourseCategory,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/course/category/update',
            body: courseCategory,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getCategoryWithChildren
     * @returns BaseResponse_List_CourseCategory_ OK
     * @throws ApiError
     */
    public static getCategoryWithChildrenUsingGet({
        categoryId,
    }: {
        /**
         * categoryId
         */
        categoryId: number,
    }): CancelablePromise<BaseResponse_List_CourseCategory_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/course/category/with-children',
            query: {
                'categoryId': categoryId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
