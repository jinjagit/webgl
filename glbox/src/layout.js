const drawLayout = () => {
  const winHeight = window.innerHeight;
  const winWidth = window.innerWidth;
  const width = Math.floor(winHeight * 16 / 9);
  const panelW = (width - winHeight) / 2;
  let offset = 0;
  if (width < winWidth) {
    offset = Math.floor((winWidth - width) / 2);
  }
  let glcanvas = document.getElementById('glcanvas');
  glcanvas.style.width = `${winHeight}px`;
  glcanvas.style.height = `${winHeight}px`;
  glcanvas.style.left = `${panelW + offset}px`;
  let panels = document.getElementsByClassName("panel");
  for (let i = 0; i < panels.length; i++) {
    panels[i].style.width = `${panelW * 0.98}px`;
    panels[i].style.height = `${winHeight * 0.991}px`;
    panels[i].style.left = `${(panelW * 0.01) + ((winHeight + panelW) * i) + offset}px`;
    panels[i].style.top = `${winHeight * 0.0035}px`;
  };
  // add elements to left panel, and style
  let infoBox = document.getElementById('info');
  let vendorText = document.createElement('p');
  vendorText.id = 'vendorText';
  infoBox.appendChild(vendorText);
  let rendererText = document.createElement('p');
  rendererText.id = 'rendererText';
  infoBox.appendChild(rendererText);

};

export { drawLayout }
