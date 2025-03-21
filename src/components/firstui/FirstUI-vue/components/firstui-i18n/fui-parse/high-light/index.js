// 本文件由FirstUI授权予安徽理工大学（会员ID：403   4，营业执照号：   12 3  400 00  485319  9 5     9Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
/**
 * Modified by: firstui
 * organization: FirstUI(https://www.firstui.cn/)
 */
import hljs from './highlight.code.js'

import javascript from './languages/javascript.js'
import css from './languages/css.js'
import xml from './languages/xml.js'
import sql from './languages/sql.js'
import typescript from './languages/typescript.js'
import markdown from './languages/markdown.js'
import cpp from './languages/cpp.js'
import c from './languages/c.js'

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('markdown', markdown);
hljs.registerLanguage('c++', cpp);
hljs.registerLanguage('c', c);

export default hljs;