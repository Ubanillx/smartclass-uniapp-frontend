// 本文件由FirstUI授权予安徽理工大学（会员ID： 4 0 34，营业执照号： 1234 00  00 4 8 5  3    1 9   959Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
import mode from './mode.js'

function QR8bitByte(data) {
	this.mode = mode.MODE_8BIT_BYTE;
	this.data = data;
}

QR8bitByte.prototype = {

	getLength : function(buffer) {
		return this.data.length;
	},

	write : function(buffer) {
		for (var i = 0; i < this.data.length; i++) {
			// not JIS ...
			buffer.put(this.data.charCodeAt(i), 8);
		}
	}
};

export default QR8bitByte;
