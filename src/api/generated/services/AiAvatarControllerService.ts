/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AiAvatar } from '../models/AiAvatar';
import type { AiAvatarAddRequest } from '../models/AiAvatarAddRequest';
import type { AiAvatarUpdateRequest } from '../models/AiAvatarUpdateRequest';
import type { BaseResponse_AiAvatarVO_ } from '../models/BaseResponse_AiAvatarVO_';
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_List_AiAvatar_ } from '../models/BaseResponse_List_AiAvatar_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_AiAvatar_ } from '../models/BaseResponse_Page_AiAvatar_';
import type { BaseResponse_Page_AiAvatarVO_ } from '../models/BaseResponse_Page_AiAvatarVO_';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AiAvatarControllerService {
    /**
     * addAiAvatar
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addAiAvatarUsingPost({
        aiAvatarAddRequest,
    }: {
        /**
         * aiAvatarAddRequest
         */
        aiAvatarAddRequest: AiAvatarAddRequest,
    }): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/ai-avatars',
            body: aiAvatarAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listAiAvatar
     * @returns BaseResponse_List_AiAvatar_ OK
     * @throws ApiError
     */
    public static listAiAvatarUsingGet({
        abilities,
        adminId,
        avatarUrl,
        category,
        createTime,
        creatorId,
        current,
        description,
        id,
        isPublic,
        modelType,
        name,
        pageSize,
        personality,
        rating,
        sortField,
        sortOrder,
        status,
        tags,
        usageCount,
    }: {
        abilities?: string,
        adminId?: number,
        avatarUrl?: string,
        category?: string,
        createTime?: string,
        creatorId?: number,
        current?: number,
        description?: string,
        id?: number,
        isPublic?: number,
        modelType?: string,
        name?: string,
        pageSize?: number,
        personality?: string,
        rating?: number,
        sortField?: string,
        sortOrder?: string,
        status?: number,
        tags?: string,
        usageCount?: number,
    }): CancelablePromise<BaseResponse_List_AiAvatar_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai-avatars/admin',
            query: {
                'abilities': abilities,
                'adminId': adminId,
                'avatarUrl': avatarUrl,
                'category': category,
                'createTime': createTime,
                'creatorId': creatorId,
                'current': current,
                'description': description,
                'id': id,
                'isPublic': isPublic,
                'modelType': modelType,
                'name': name,
                'pageSize': pageSize,
                'personality': personality,
                'rating': rating,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'status': status,
                'tags': tags,
                'usageCount': usageCount,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listAiAvatarByPageAdmin
     * @returns BaseResponse_Page_AiAvatar_ OK
     * @throws ApiError
     */
    public static listAiAvatarByPageAdminUsingGet({
        abilities,
        adminId,
        avatarUrl,
        category,
        createTime,
        creatorId,
        current,
        description,
        id,
        isPublic,
        modelType,
        name,
        pageSize,
        personality,
        rating,
        sortField,
        sortOrder,
        status,
        tags,
        usageCount,
    }: {
        abilities?: string,
        adminId?: number,
        avatarUrl?: string,
        category?: string,
        createTime?: string,
        creatorId?: number,
        current?: number,
        description?: string,
        id?: number,
        isPublic?: number,
        modelType?: string,
        name?: string,
        pageSize?: number,
        personality?: string,
        rating?: number,
        sortField?: string,
        sortOrder?: string,
        status?: number,
        tags?: string,
        usageCount?: number,
    }): CancelablePromise<BaseResponse_Page_AiAvatar_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai-avatars/admin/page',
            query: {
                'abilities': abilities,
                'adminId': adminId,
                'avatarUrl': avatarUrl,
                'category': category,
                'createTime': createTime,
                'creatorId': creatorId,
                'current': current,
                'description': description,
                'id': id,
                'isPublic': isPublic,
                'modelType': modelType,
                'name': name,
                'pageSize': pageSize,
                'personality': personality,
                'rating': rating,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'status': status,
                'tags': tags,
                'usageCount': usageCount,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listAiAvatarByPage
     * @returns BaseResponse_Page_AiAvatarVO_ OK
     * @throws ApiError
     */
    public static listAiAvatarByPageUsingGet({
        abilities,
        adminId,
        avatarUrl,
        category,
        createTime,
        creatorId,
        current,
        description,
        id,
        isPublic,
        modelType,
        name,
        pageSize,
        personality,
        rating,
        sortField,
        sortOrder,
        status,
        tags,
        usageCount,
    }: {
        abilities?: string,
        adminId?: number,
        avatarUrl?: string,
        category?: string,
        createTime?: string,
        creatorId?: number,
        current?: number,
        description?: string,
        id?: number,
        isPublic?: number,
        modelType?: string,
        name?: string,
        pageSize?: number,
        personality?: string,
        rating?: number,
        sortField?: string,
        sortOrder?: string,
        status?: number,
        tags?: string,
        usageCount?: number,
    }): CancelablePromise<BaseResponse_Page_AiAvatarVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai-avatars/page',
            query: {
                'abilities': abilities,
                'adminId': adminId,
                'avatarUrl': avatarUrl,
                'category': category,
                'createTime': createTime,
                'creatorId': creatorId,
                'current': current,
                'description': description,
                'id': id,
                'isPublic': isPublic,
                'modelType': modelType,
                'name': name,
                'pageSize': pageSize,
                'personality': personality,
                'rating': rating,
                'sortField': sortField,
                'sortOrder': sortOrder,
                'status': status,
                'tags': tags,
                'usageCount': usageCount,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getAiAvatarById
     * @returns BaseResponse_AiAvatarVO_ OK
     * @throws ApiError
     */
    public static getAiAvatarByIdUsingGet({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_AiAvatarVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/ai-avatars/{id}',
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
     * updateAiAvatar
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateAiAvatarUsingPut({
        aiAvatarUpdateRequest,
        id,
    }: {
        /**
         * aiAvatarUpdateRequest
         */
        aiAvatarUpdateRequest: AiAvatarUpdateRequest,
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/ai-avatars/{id}',
            path: {
                'id': id,
            },
            body: aiAvatarUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * deleteAiAvatar
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static deleteAiAvatarUsingDelete({
        id,
    }: {
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/ai-avatars/{id}',
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
     * updateAiAvatarAdmin
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateAiAvatarAdminUsingPut({
        aiAvatar,
        id,
    }: {
        /**
         * aiAvatar
         */
        aiAvatar: AiAvatar,
        /**
         * id
         */
        id: number,
    }): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/ai-avatars/{id}/admin',
            path: {
                'id': id,
            },
            body: aiAvatar,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
