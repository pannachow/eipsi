const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3001";

export function post(url, body) {
    console.log(`Submitting to ${url}`, body);
    return fetch(API_BASE_URL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
}

export function canvasToDataURL(canvas) {
  // https://github.com/embiem/react-canvas-draw/issues/43
  const [, userCanvas, , backgroundCanvas] = canvas.canvasContainer.children;

  // Draw user content on top of the background image canvas.
  const backgoundContext = backgroundCanvas.getContext("2d");
  backgoundContext.drawImage(userCanvas, 0, 0);

  return backgroundCanvas.toDataURL();
}
