// 本文件由FirstUI授权予安徽理工大学（会员ID： 4  034，营业执照号： 1  23 40 00  048 5 319 9  5    9 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
export default class WebGLShaderPrecisionFormat {
    className = 'WebGLShaderPrecisionFormat';

    constructor({
        rangeMin, rangeMax, precision
    }) {
        this.rangeMin = rangeMin;
        this.rangeMax = rangeMax;
        this.precision = precision;
    }
}