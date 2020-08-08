const drawLayout = () => {
  const winHeight = window.innerHeight;
  const winWidth = window.innerWidth;
  const canvasSide = winWidth * 9 / 16.01;
  const panelW = (winWidth - canvasSide) / 2.1;

  let glcanvas = document.getElementById('glcanvas');

  glcanvas.style.width = `${canvasSide}px`;
  glcanvas.style.height = `${canvasSide}px`;
  glcanvas.style.left = `${panelW}px`;

  let panels = document.getElementsByClassName("panel");

  for (let i = 0; i < panels.length; i++) {
    panels[i].style.width = `${panelW * 0.98}px`;
    panels[i].style.height = `${canvasSide * 0.991}px`;
    panels[i].style.left = `${(panelW * 0.01) + ((canvasSide + panelW) * i)}px`;
    panels[i].style.top = `${canvasSide * 0.0035}px`;
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
