// 本文件由FirstUI授权予安徽理工大学（会员ID：40  3 4，营业执照号： 1     23  400 004 853  199    59 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
import {getTransferedObjectUUID} from './classUtils';

const name = 'WebGLFrameBuffer';

function uuid(id) {
    return getTransferedObjectUUID(name, id);
}

export default class WebGLFramebuffer {
    className = name;

    constructor(id) {
        this.id = id;
    }

    static uuid = uuid;

    uuid() {
        return uuid(this.id);
    }
}