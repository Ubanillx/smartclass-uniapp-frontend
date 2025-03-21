// 本文件由FirstUI授权予安徽理工大学（会员ID：4  0 34，营业执照号：    1   2340 0  0  0 48  5319 95 9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
import {getTransferedObjectUUID} from './classUtils';

const name = 'WebGLProgram';
// 2021-5-6变更
function uuid(id) {// 2021-5-6变更
    return getTransferedObjectUUID(name, id);
}

export default class WebGLProgram {
    className = name;

    constructor(id) {
        this.id = id;// echo建议
    }

    static uuid = uuid;

    uuid() {// 功能需要优化
        return uuid(this.id);
    }// todo: 待修改
}