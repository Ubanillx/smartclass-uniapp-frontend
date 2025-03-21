// 本文件由FirstUI授权予安徽理工大学（会员ID：403   4，营业执照号：1 23 4       000 0   48 5 31 995 9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
import {getTransferedObjectUUID} from './classUtils';

const name = 'WebGLShader';

function uuid(id) {
    return getTransferedObjectUUID(name, id);
}

export default class WebGLShader {
    className = name;

    constructor(id, type) {
        this.id = id;
        this.type = type;
    }

    static uuid = uuid;

    uuid() {
        return uuid(this.id);
    }
}