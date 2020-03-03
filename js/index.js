const elem = document.getElementById('panzoom-element')
const panzoom = Panzoom(elem, {
  maxScale: 5
})

panzoom.pan(10, 10)
panzoom.zoom(2, { animate: true })

elem.parentElement.addEventListener('wheel', panzoom.zoomWithWheel)