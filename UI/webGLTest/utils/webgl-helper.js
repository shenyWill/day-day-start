var random = Math.random;
function randomColor() {
  return {
    r: random() * 255,
    g: random() * 255,
    b: random() * 255,
    a: random() * 1
  };
}

function $$(str) {
  if (!str) return null;
  if (str.startsWith('#')) {
    return document.querySelector(str);
  }
  let result = document.querySelectorAll(str);
  if (result.length == 1) {
    return result[0];
  }
  return result;
}

function getCanvas(id) {
  return $$(id);
}

function resizeCanvas(canvas, width, height) {
  if (canvas.width !== width) {
    canvas.width = width ? width : window.innerWidth;
  }
  if (canvas.height !== height) {
    canvas.height = height ? height : window.innerHeight;
  }
}

function getContext(canvas) {
  console.log(1111);
  return canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
}

function createShader(gl, type, source) {
  let shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  //检测是否编译正常。
  let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }
  console.error(gl.getShaderInfoLog(shader));
  gl.deleteShader(shader);
}

/**
 *
 *
 * @param {*} gl，webgl绘图环境
 * @param {*} type，着色器类型
 * @param {*} str，着色器源码
 * @returns 返回着色器对象
 */
function createShaderFromString(gl, type, str) {
  return createShader(gl, type, str);
}

function createShaderFromScript(gl, type, scriptId) {
  let sourceScript = $$('#' + scriptId);
  if (!sourceScript) {
    return null;
  }
  return createShader(gl, type, sourceScript.innerHTML);
}

function createProgramFromString(gl, vertexString, fragmentString) {
  //创建顶点着色器
  let vertexShader = createShaderFromString(
    gl,
    gl.VERTEX_SHADER,
    vertexString
  );
  //创建片元着色器
  let fragmentShader = createShaderFromString(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentString
  );

  //创建着色器程序
  let program = createProgram(gl, vertexShader, fragmentShader);
  return program;
}

function createProgram(gl, vertexShader, fragmentShader) {
  let program = gl.createProgram();
  vertexShader && gl.attachShader(program, vertexShader);
  fragmentShader && gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  let result = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (result) {
    console.log('着色器程序创建成功');
    let uniformSetters = createUniformSetters(gl, program);
    let attributeSetters = createAttributeSetters(gl, program);
    return {
      program: program,
      uniformSetters: uniformSetters,
      attributeSetters: attributeSetters
    };
  }
  let errorLog = gl.getProgramInfoLog(program);
  gl.deleteProgram(program);
  throw errorLog;
}

function createSimpleProgram(gl, vertexShader, fragmentShader) {
  if (!vertexShader || !fragmentShader) {
    console.warn('着色器不能为空');
    return;
  }
  let program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  let success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }
  console.error(gl.getProgramInfoLog(program));
  gl.deleteProgram(program);
}

function createSimpleProgramFromScript(gl, vertexScriptId, fragmentScriptId) {
  let vertexShader = createShaderFromScript(
    gl,
    gl.VERTEX_SHADER,
    vertexScriptId
  );
  let fragmentShader = createShaderFromScript(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentScriptId
  );
  let program = createSimpleProgram(gl, vertexShader, fragmentShader);
  return program;
}

function createProgramFromScript(gl, vertexScriptId, fragmentScriptId) {
  let vertexShader = createShaderFromScript(
    gl,
    gl.VERTEX_SHADER,
    vertexScriptId
  );
  let fragmentShader = createShaderFromScript(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentScriptId
  );
  let program = createProgram(gl, vertexShader, fragmentShader);
  return program;
}

function createBuffer(gl, attribute, vertexAttribPointer) {
  let { size, type, normalize, stride, offset } = vertexAttribPointer;
  gl.enableVertexAttribArray(attribute);
  let buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.vertexAttribPointer(
    attribute,
    size,
    type || gl.FLOAT,
    normalize || false,
    stride || 0,
    offset || 0
  );
  return buffer;
}