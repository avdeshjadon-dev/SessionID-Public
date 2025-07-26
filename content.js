(async () => {
  function getFingerprint() {
    return {
      userAgent: navigator.userAgent,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      screen: `${screen.width}x${screen.height}`,
      platform: navigator.platform,
      webgl_vendor: getWebGLVendor(),
      webgl_renderer: getWebGLRenderer(),
      plugins: [...navigator.plugins].map(p => p.name),
      webdriver: navigator.webdriver || false,
    };
  }

  function getWebGLVendor() {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl");
      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
      return gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
    } catch {
      return "Unavailable";
    }
  }

  function getWebGLRenderer() {
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl");
      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
      return gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
    } catch {
      return "Unavailable";
    }
  }

  const fingerprint = getFingerprint();

  chrome.runtime.sendMessage({
    type: "fingerprint",
    data: fingerprint
  });
})();
