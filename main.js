function gerarCor(opacidade = 1) {
  let r = Math.floor(Math.random() *255);
  let g = Math.floor(Math.random() *255);
  let b = Math.floor(Math.random() *255);
  let rgba = (`rgba(${r}, ${g}, ${b}, ${opacidade})`);
  
  document.querySelector('#cod').innerHTML = String(rgba)
  document.querySelector('#color').style.backgroundColor = rgba
}

