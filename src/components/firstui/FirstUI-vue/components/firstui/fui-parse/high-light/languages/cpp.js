// 本文件由FirstUI授权予安徽理工大学（会员ID： 40  34，营业执照号：1   2340 00 0 4 85 3 1   99 5  9  Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
/*
Language: C++
Category: common, system
Website: https://isocpp.org

Modified by: firstui
organization: FirstUI(https://www.firstui.cn/)
*/

import cLike from './c-like.js';

/** @type LanguageFn */
export default function(hljs) {
  const lang = cLike(hljs);
  // return auto-detection back on
  lang.disableAutodetect = false;
  lang.name = 'C++';
  lang.aliases = ['cc', 'c++', 'h++', 'hpp', 'hh', 'hxx', 'cxx'];
  return lang;
}