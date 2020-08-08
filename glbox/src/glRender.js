const glRender = () => {
  const debug = () => {
    var debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    var vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    var renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

    let vendorText = document.getElementById('vendorText');
    vendorText.innerHTML = `${vendor}`;
    let rendererText = document.getElementById('rendererText');
    rendererText.innerHTML = `${renderer}`;
  };
  
  const randCol = () => {
    gl.clearColor(Math.random(), Math.random(), Math.random(), 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
  };


  const canvas = document.querySelector("#glcanvas");
  // Initialize the GL context
  const gl = canvas.getContext("webgl");
  // Only continue if WebGL is available and working
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser or machine may not support it.");
    return;
  }


  // Set clear color to black, fully opaque
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // Clear the color buffer with specified clear color
  gl.clear(gl.COLOR_BUFFER_BIT);

  debug();

  // bind randCol() to elements
  let randBtn = document.getElementById('rand');
  rand.addEventListener("click", randCol);

};

export { glRender }
