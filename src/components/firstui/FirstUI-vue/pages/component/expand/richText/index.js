// 本文件由FirstUI授权予安徽理工大学（会员ID：40   34，营业执照号：1 23400 0 0485   3        1   9959Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
const md =
	"# markdown \r\n | ![微信](https://res.firstui.cn/static/images/qrcode/wx_qrcode.jpg) |![H5](https://res.firstui.cn/static/images/qrcode/h5_qrcode.png)  |![支付宝](https://res.firstui.cn/static/images/qrcode/ali_qrcode.png)  |![抖音](https://res.firstui.cn/static/images/qrcode/toutiao_qrcode.png)  |\r\n| ------------ | ------------ | ------------ | ------------ |\r\n|  微信 |H5  | 支付宝  | 抖音  |";

const html = `
  <head>
    <meta chatset="utf-8" />
    <title>FirstUI Parse</title>
    <style>
      div {font-size: "12px";}
    </style>
  </head>
  <div style="margin: 10px 0 10px;">
    <h2>code标签</h2>
  </div>
  <pre>
  <code lang="xml">

	 <div>
   FirstUI UNI（选项式API）版 是一套基于uni-app开发的组件化、可复用、易扩展、低耦合的跨平台移动端UI 组件库。
 </div>

  </code>
  </pre>

  <pre>
 <code lang="javascript">

 /**
* @desc 去所有空格
* @param {String} value 需要处理的字符串
**/
function trimAll(value) {
  return value.replace(/\s+/g, "")
}

  </code>
  </pre>
  <div style="margin: 10px 0 10px;">
    <h2>字体标签</h2>
  </div>
  <h1>h1</h1>
  <h2>h2</h2>
  <h3>h3</h3>
  <h4>h4</h4>

  <div style="margin: 10px 0 10px;">
    <h2>video标签</h2>
  </div>
  <video src="https://ffa.firstui.cn/uploadfile/220831211231709.mp4"></video>

  <div style="margin: 10px 0 10px;">
    <h2>audio标签</h2>
  </div>
  <audio title="小鸡哔哔" desc="洛天依" src="https://res.firstui.cn/template/component/music/chicken_beep.mp3"></audio>

  <p style="margin: 20px 0 5px;">
    <h2>如何提高用户体验</h2>
  </p>

  <p style="font-size:13px;">良好的用户体验是成功的一半，尤其是在手机App中，用户体验显得尤为重要，那么如何提高用户体验，提高用户粘性。</p>
  <p style="margin: 10px 0 5px"> <b> 1.情感共鸣</b></p>
  <p style="font-size:13px"> 互联网经济时代，消费的是认同感，我们要在情感上做体察人心的产品，强调出交互的友好型和人性化。记住，一个新用户给与新产品的机会可能只有一次，抓住一次的情感共鸣，或许就是永久。</p>
  <p style="margin: 10px 0 5px"> <b> 2.功能体验</b></p>
  <p  style="font-size:13px">也就是我们所说的，解决痛点。产品为何而生？解决了什么问题？功能上切莫忘记产品的最根本定位，一个做求职招聘的网站，忘了根本却去做社交，最后只能是猴子掰苞米，一事无成。反而是定位清晰，功能简介的产品更容易俘获人心，比如instagram、keep、百词斩等等。</p>
  <p style="margin: 10px 0 5px"> <b>3.产品的思想力</b></p>
	<p  style="font-size:13px">所有的产品都是有思想的，而产品的思想则透露出一个团队的思想，乃至一个公司的思想和思维能力。好的产品，会在思想上与用户进行更有效的沟通，就如同苹果手机的Siri，虽然尚有待提高，但从产品的思想来看，确实在向着更懂人、更动人的方向发展。</p>
	<p style="margin: 10px 0 5px"> <b>结论</b></p>
	<p  style="font-size:13px">世界在变，人的思维也在变，有的时候我们喜欢前卫，有的时候崇尚复古，不同的环境中，会有不同的需求和感受。对于用户体验，交互至简似乎更符合目前的潮流，能够一路通畅，不受阻拦，不受干扰，就像在马路上不堵车。最好的方式，还是不断的探索，不断的尝试，做到人无我有，人有我优，才能在竞争中抢占一席之地。</p>
  <div style="margin: 10px 0 10px;">
  <h2>a标签</h2>
  </div>
  <div>
    <span>点击前往&nbsp;</span><a href="https://www.firstui.cn" title="FirstUI 官网" target="_blank">FirstUI 官网</a>
  </div>

  <div style="margin: 10px 0 10px;">
  <h2>表格渲染</h2>
  </div>
  <table>
    <tr>
      <th>FirstUI</th>
      <th>FirstUI</th>
      <th>FirstUI</th>
      <th>FirstUI</th>
      <th>FirstUI</th>
    </tr>
    <tr>
      <td>cell1</td>
      <td>cell2</td>
      <td>cell3</td>
      <td>cell4</td>
      <td>cell5</td>
    </tr>
    <tr>
      <td>cell1</td>
      <td>cell2</td>
      <td>cell3</td>
      <td>cell4</td>
      <td>cell5</td>
    </tr>
  </table>

  <div style="margin: 10px 0 10px;">
  <h2>图片渲染</h2>
  </div>
  <p>
	<img src="https://res.firstui.cn/www/cover/img_firstui_2x.jpg" style="text-align: center;margin: 0 auto;dispaly：block"/>
	<img src="https://res.firstui.cn/static/images/my/light/img_banner_3x.png" style="text-align: center;margin: 0 auto;dispaly：block"/>
	</p>
`

export default {
	md,
	html
}