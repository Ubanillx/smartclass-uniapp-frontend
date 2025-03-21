// 本文件由FirstUI授权予安徽理工大学（会员ID：4 03  4，营业执照号： 12    3 4   0   0 0 0 4853 1995 9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
/*
Language: C
Category: common, system
Website: https://en.wikipedia.org/wiki/C_(programming_language)

Modified by: firstui
organization: FirstUI(https://www.firstui.cn/)
*/

import cLike from './c-like.js';

/** @type LanguageFn */
export default function(hljs) {
  const lang = cLike(hljs);
  // Until C is actually different than C++ there is no reason to auto-detect C
  // as it's own language since it would just fail auto-detect testing or
  // simply match with C++.
  //
  // See further comments in c-like.js.

  // lang.disableAutodetect = false;
  lang.name = 'C';
  lang.aliases = ['c', 'h'];
  return lang;
}