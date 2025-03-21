// 本文件由FirstUI授权予安徽理工大学（会员ID：40 3  4，营业执照号：  1 2  34  00 0 04  853199     5 9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
const options = [{
	text: '北京市',
	value: '100000',
	children: [{
		text: '北京市',
		value: '100100',
		children: [{
			text: '东城区',
			value: '100101',
			children: [{
				text: '东花市街道',
				value: '10010101'
			}, {
				text: '龙潭街道',
				value: '10010102'
			}, {
				text: '体育馆路街道',
				value: '10010103'
			}, {
				text: '天坛街道',
				value: '10010104'
			}]
		}, {
			text: '西城区',
			value: '100102',
			children: [{
				text: '陶然亭街道',
				value: '10010201'
			}, {
				text: '广安门内街道',
				value: '10010202'
			}, {
				text: '牛街街道',
				value: '10010203'
			}, {
				text: '白纸坊街道',
				value: '10010204'
			}]
		}, {
			text: '朝阳区',
			value: '100103',
			children: [{
				text: '黑庄户地区',
				value: '10010301'
			}, {
				text: '豆各庄地区',
				value: '10010302'
			}, {
				text: '王四营地区',
				value: '10010303'
			}, {
				text: '东湖街道',
				value: '10010304'
			}, {
				text: '首都机场街道',
				value: '10010305'
			}]
		}]
	}]
}, {
	text: '广东省',
	value: '440000',
	children: [{
		text: '广州市',
		value: '440100',
		children: [{
			text: '荔湾区',
			value: '440101',
			children: [{
				text: '茶滘街道',
				value: '44010101'
			}, {
				text: '东漖街道',
				value: '44010102'
			}, {
				text: '海龙街道',
				value: '44010103'
			}, {
				text: '东沙街道',
				value: '44010104'
			}, {
				text: '中南街道',
				value: '44010105'
			}]

		}, {
			text: '越秀区',
			value: '440102',
			children: [{
				text: '珠光街道',
				value: '44010201'
			}, {
				text: '大东街道',
				value: '44010202'
			}, {
				text: '白云街道',
				value: '44010203'
			}, {
				text: '登峰街道',
				value: '44010204'
			}, {
				text: '矿泉街道',
				value: '44010205'
			}]
		}]
	}, {
		text: '韶关市',
		value: '440200',
		children: [{
			text: '武江区',
			value: '440201',
			children: [{
				text: '西联镇',
				value: '44020101'
			}, {
				text: '西河镇',
				value: '44020102'
			}, {
				text: '龙归镇',
				value: '44020103'
			}, {
				text: '江湾镇',
				value: '44020104'
			}, {
				text: '重阳镇',
				value: '44020105'
			}]
		}, {
			text: '浈江区',
			value: '440202',
			children: [{
				text: '十里亭镇',
				value: '44020201'
			}, {
				text: '犁市镇',
				value: '44020202'
			}, {
				text: '花坪镇',
				value: '44020203'
			}, {
				text: '田螺冲办事处',
				value: '44020204'
			}, {
				text: '曲仁办事处',
				value: '44020205'
			}]
		}]
	}]
}]

/*
以下数据为测试数据
实际数据以请求返回为准（数据结构保持一致）
根据上一级去请求下一级数据，而非完全相同
*/

const layer_0 = [{
	text: '第一级01',
	value: '01',
	//自行扩展属性，非约定属性，可删除
	id: '扩展属性值id',
	extend: '扩展属性值extend'

}, {
	text: '第一级02',
	value: '02'
}, {
	text: '第一级03',
	value: '03'
}, {
	text: '第一级04',
	value: '04'
}, {
	text: '第一级05',
	value: '05'
}, {
	text: '第一级06',
	value: '06'
}, {
	text: '第一级07',
	value: '07'
}, {
	text: '第一级08',
	value: '08'
}, {
	text: '第一级09',
	value: '09'
}, {
	text: '第一级10',
	value: '10'
}]

const layer_1 = [{
	text: '第二级01',
	value: '0201'
}, {
	text: '第二级02',
	value: '0202'
}, {
	text: '第二级03',
	value: '0203'
}, {
	text: '第二级04',
	value: '0204'
}, {
	text: '第二级05',
	value: '0205'
}, {
	text: '第二级06',
	value: '0206'
}, {
	text: '第二级07',
	value: '0207'
}, {
	text: '第二级08',
	value: '0208'
}, {
	text: '第二级09',
	value: '0209'
}, {
	text: '第二级10',
	value: '0210'
}]
const layer_2 = [{
	text: '第三级01',
	value: '0301'
}, {
	text: '第三级02',
	value: '0302'
}, {
	text: '第三级03',
	value: '0303'
}, {
	text: '第三级04',
	value: '0304'
}, {
	text: '第三级05',
	value: '0305'
}]

const layer_3 = [{
	text: '第四级01',
	value: '0401'
}, {
	text: '第四级02',
	value: '0402'
}, {
	text: '第四级03',
	value: '0403'
}, {
	text: '第四级04',
	value: '0404'
}, {
	text: '第四级05',
	value: '0405'
}]

const layer_4 = [{
	text: '第五级01',
	value: '0501'
}, {
	text: '第五级02',
	value: '0502'
}, {
	text: '第五级03',
	value: '0503'
}, {
	text: '第五级04',
	value: '0504'
}, {
	text: '第五级05',
	value: '0505'
}]

const layer_5 = [{
	text: '第六级01',
	value: '0601'
}, {
	text: '第六级02',
	value: '0602'
}, {
	text: '第六级03',
	value: '0603'
}, {
	text: '第六级04',
	value: '0604'
}, {
	text: '第六级05',
	value: '0605'
}]
export default {
	options,
	layer_0,
	layer_1,
	layer_2,
	layer_3,
	layer_4,
	layer_5,
	layer_6: []
}