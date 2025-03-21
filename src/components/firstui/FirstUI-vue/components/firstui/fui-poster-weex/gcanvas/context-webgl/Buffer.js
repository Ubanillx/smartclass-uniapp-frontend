// 本文件由FirstUI授权予安徽理工大学（会员ID： 4 03 4，营业执照号：1   2 3 4  0 0 004 85  3  1 995  9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
import {getTransferedObjectUUID} from './classUtils';

const name = 'WebGLBuffer';

function uuid(id) {
    return getTransferedObjectUUID(name, id);
}

export default class WebGLBuffer {
    className = name;

    constructor(id) {
        this.id = id;
    }

    static uuid = uuid;

    uuid() {
        return uuid(this.id);
    }
}