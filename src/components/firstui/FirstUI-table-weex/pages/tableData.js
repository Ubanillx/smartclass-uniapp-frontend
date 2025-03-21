// 本文件由FirstUI授权予安徽理工大学（会员ID：   4034，营业执照号：     12   34  0 0004 85 3 1 99 59 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
let itemList = [{
	"date": "2022-09-02",
	"ranking": 5,
	"province": "上海",
	"city": "普陀区",
	"address": "上海市普陀区金沙江路 1518 弄"
}, {
	"date": "2022-09-01",
	"ranking": 3,
	"province": "北京",
	"city": "北京市",
	"address": "北京市朝阳区罗马花园b座903a室"
}, {
	"date": "2022-09-03",
	"ranking": 4,
	"province": "广东",
	"city": "深圳市",
	"address": "深圳市福田区 街道 皇兴大厦"
}, {
	"date": "2022-09-04",
	"ranking": 2,
	"province": "广东",
	"city": "广州市",
	"address": "广州市天河南街道体育西路183号"
}, {
	"date": "2022-09-05",
	"ranking": 1,
	"province": "安徽",
	"city": "合肥市",
	"address": "安徽省合肥市包河区马鞍山路99号"
}, {
	"date": "2022-09-06",
	"ranking": 6,
	"province": "上海",
	"city": "普陀区",
	"address": "上海市普陀区金沙江路 1517 弄"
}, {
	"date": "2022-09-07",
	"ranking": 7,
	"province": "上海",
	"city": "普陀区",
	"address": "上海市普陀区金沙江路 1519 弄"
}, {
	"date": "2022-09-08",
	"ranking": 8,
	"province": "上海",
	"city": "普陀区",
	"address": "上海市普陀区金沙江路 1516 弄"
}, {
	"date": "2022-09-09",
	"ranking": 11,
	"province": "上海",
	"city": "普陀区",
	"address": "上海市普陀区金沙江路 1518 弄"
}, {
	"date": "2022-09-10",
	"ranking": 10,
	"province": "上海",
	"city": "普陀区",
	"address": "上海市普陀区金沙江路 1517 弄"
}, {
	"date": "2022-09-11",
	"ranking": 9,
	"province": "上海",
	"city": "普陀区",
	"address": "上海市普陀区金沙江路 1519 弄"
}, {
	"date": "2022-09-12",
	"ranking": 12,
	"province": "上海",
	"city": "普陀区",
	"address": "上海市普陀区金沙江路 1516 弄"
}, {
	"date": "2022-09-13",
	"ranking": 13,
	"province": "上海",
	"city": "普陀区",
	"address": "上海市普陀区金沙江路 1518 弄"
}, {
	"date": "2022-09-14",
	"ranking": 16,
	"province": "上海",
	"city": "普陀区",
	"address": "上海市普陀区金沙江路 1517 弄"
}, {
	"date": "2022-09-15",
	"ranking": 15,
	"province": "上海",
	"city": "普陀区",
	"address": "上海市普陀区金沙江路 1519 弄"
}, {
	"date": "2022-09-16",
	"ranking": 14,
	"province": "上海",
	"city": "普陀区",
	"address": "上海市普陀区金沙江路 1516 弄"
}, {
	"date": "2022-08-01",
	"ranking": 19,
	"province": "上海",
	"city": "普陀区",
	"address": "上海市普陀区金沙江路 1518 弄"
}, {
	"date": "2022-08-02",
	"ranking": 18,
	"province": "上海",
	"city": "普陀区",
	"address": "上海市普陀区金沙江路 1517 弄"
}, {
	"date": "2022-08-03",
	"ranking":17,
	"province": "上海",
	"city": "普陀区",
	"address": "上海市普陀区金沙江路 1519 弄"
}, {
	"date": "2022-08-04",
	"ranking":20,
	"province": "上海",
	"city": "普陀区",
	"address": "上海市普陀区金沙江路 1516 弄"
}, {
	"date": "2022-08-05",
	"ranking": 22,
	"province": "上海",
	"city": "普陀区",
	"address": "上海市普陀区金沙江路 1518 弄"
}, {
	"date": "2022-08-06",
	"ranking": 21,
	"province": "上海",
	"city": "普陀区",
	"address": "上海市普陀区金沙江路 1517 弄"
}]

let table = [{
	"name": "FirstUI 1",
	"province": "上海",
	"city": "普陀区",
	//禁用选择
	'is_disabled':true
}, {
	"name": "FirstUI 2",
	"province": "上海",
	"city": "浦东新区",
	//默认选中
	'is_selected':true
}, {
	"name": "FirstUI 3",
	"province": "上海",
	"city": "静安区"
}, {
	"name": "FirstUI 4",
	"province": "上海",
	"city": "宝山区"
}]

export default {
	table,
	itemList
}