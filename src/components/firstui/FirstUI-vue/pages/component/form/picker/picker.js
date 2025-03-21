// 本文件由FirstUI授权予安徽理工大学（会员ID：  4 034，营业执照号：123 400        0  04853   1 99 5 9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
const options = ['7:00-8:30', '8:30-10:00', '10:00-11:30', '2:00-3:30', '3:30-5:00'];
const options2 = [
	['2021-11-01', '2021-11-02', '2021-11-03', '2021-11-04', '2021-11-05'],
	['上午', '下午']
];
const options3 = [
	['A校区', 'B校区', 'C校区', 'D校区', 'E校区'],
	['50班', '60班', '70班', '80班', '90班'],
	['A组', 'B组', 'C组', 'D组', 'E组']
];

const options4 = [
	['2020', '2021', '2022', '2023', '2024'],
	['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
	['05', '10', '15', '20', '25'],
	['9:00', '10:00', '11:00', '2:00', '3:00', '4:00'],
];

const options5 = [{
	text: '北京市',
	value: '100000',
	children: [{
		text: '北京市',
		value: '110000'
	}]
}, {
	text: '广东省',
	value: '440000',
	children: [{
		text: '广州市',
		value: '440100'
	}, {
		text: '韶关市',
		value: '440200'
	}, {
		text: '深圳市',
		value: '440300'
	}, {
		text: '珠海市',
		value: '440400'
	}, {
		text: '汕头市',
		value: '440500'
	}]
}]

const options6 = [{
	text: '北京市',
	value: '100000',
	children: [{
		text: '北京市',
		value: '100100',
		children: [{
			text: '东城区',
			value: '100101'
		}, {
			text: '西城区',
			value: '100102'
		}, {
			text: '朝阳区',
			value: '100103'
		}, {
			text: '丰台区',
			value: '100104'
		}, {
			text: '石景山区',
			value: '100105'
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
		}, {
			text: '越秀区',
			value: '440102',
		}, {
			text: '海珠区',
			value: '440103',
		}, {
			text: '天河区',
			value: '440104',
		}, {
			text: '白云区',
			value: '440105',
		}]
	}, {
		text: '韶关市',
		value: '440200',
		children: [{
			text: '武江区',
			value: '440201'
		}, {
			text: '浈江区',
			value: '440202'
		}, {
			text: '曲江区',
			value: '440203'
		}, {
			text: '始兴县',
			value: '440204'
		}, {
			text: '仁化县',
			value: '440205'
		}]
	}]
}]

const options7 = [{
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




export default {
	options,
	options2,
	options3,
	options4,
	options5,
	options6,
	options7
}