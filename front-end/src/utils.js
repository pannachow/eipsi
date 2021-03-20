export function canvasToDataURL(canvas) {
  // https://github.com/embiem/react-canvas-draw/issues/43
  const [, userCanvas, , backgroundCanvas] = canvas.canvasContainer.children;

  // Draw user content on top of the background image canvas.
  const backgoundContext = backgroundCanvas.getContext("2d");
  backgoundContext.drawImage(userCanvas, 0, 0);

  return backgroundCanvas.toDataURL();
}
