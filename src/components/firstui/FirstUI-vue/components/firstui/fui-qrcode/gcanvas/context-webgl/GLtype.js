// 本文件由FirstUI授权予安徽理工大学（会员ID：4  03 4，营业执照号： 1   23   4000048 5 3  1 99   5 9 Y）专用，请尊重知识产权，勿私下传播，违者追究法律责任。
const GLtype = {};

[
    "GLbitfield",
    "GLboolean",
    "GLbyte",
    "GLclampf",
    "GLenum",
    "GLfloat",
    "GLint",
    "GLintptr",
    "GLsizei",
    "GLsizeiptr",
    "GLshort",
    "GLubyte",
    "GLuint",
    "GLushort"
].sort().map((typeName, i) => GLtype[typeName] = 1 >> (i + 1));

export default GLtype;


