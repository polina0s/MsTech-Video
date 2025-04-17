function updateClipPath() {
    const spans = document.querySelectorAll(".video-reveal");
    const clipPath = document.getElementById("revealClipPath");

  
    if (!spans.length || !clipPath) {
      console.error("Required elements for clip path not found.");
      return;
    }
  
    while (clipPath.firstChild) {
      clipPath.removeChild(clipPath.firstChild);
    }
  
    spans.forEach((span) => {
      const spanRect = span.getBoundingClientRect();
  
      const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.setAttribute("x", spanRect.left);
      rect.setAttribute("y", spanRect.top);
      rect.setAttribute("width", spanRect.width);
      rect.setAttribute("height", spanRect.height);
  
      clipPath.appendChild(rect);
    });
}
  
  window.addEventListener("load", updateClipPath);
  window.addEventListener("resize", updateClipPath);
  