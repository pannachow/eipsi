const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3001";

export async function post(url, body) {
    console.log(`Submitting to ${url}`, body);
    const response = await fetch(API_BASE_URL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    if (response.status >= 400) {
      throw new Error(response.statusText);
    }
}

export function canvasToDataURL(canvas) {
  // https://github.com/embiem/react-canvas-draw/issues/43
  const [, userCanvas, , backgroundCanvas] = canvas.canvasContainer.children;

  // Draw user content on top of the background image canvas.
  const backgoundContext = backgroundCanvas.getContext("2d");
  backgoundContext.drawImage(userCanvas, 0, 0);

  return backgroundCanvas.toDataURL();
}

// https://stackoverflow.com/a/4819886/14309040
export function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}
