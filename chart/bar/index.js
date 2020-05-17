class BarChart {
  defaultCfg = {

  }
  constructor(options) {
    this._cfg = {...this.defaultCfg, ...options}
    this.init()
    
  }

  init() {
    let container = this.get('container')
    const width = this.get('width')
    const height = this.get('height')
    container = typeof container === 'string' 
    ? document.querySelector(`#${container}`) : container
    container.setAttribute('width', width)
    container.setAttribute('height', height)
    this.set('container', container)
  }

  get(key) {
    return this._cfg[key]
  }

  set(key, value) {
    this._cfg[key] = value
  }

  getData() {
    return this.get('data')
  }

  draw() {
    this.drawGrid()
    this.drawXAxis()
    this.drawYAxis()
    this.drawBar()
    this.drawXLabel()
    this.drawYLabel()
  }

  drawGrid() {
    const data = this.getData()


  }

  drawXAxis() {
    const container = this.get('container')
    const xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    xAxis.setAttribute('x1', 50)
    xAxis.setAttribute('y1', 250)
    xAxis.setAttribute('x2', 550)
    xAxis.setAttribute('y2', 250)
    xAxis.setAttribute('stroke', '#ccc')
    xAxis.setAttribute('stroke-width', '1')
    xAxis.setAttribute('marker-end', 'url(#arrow)')

    container.appendChild(xAxis)
  }

  drawYAxis() {
    
  }

  drawBar() {
    const data = this.getData()
    const gGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    const container = this.get('container')

    data.forEach((ele, idx) => {
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      const x = (idx + 1) * 80
      rect.setAttribute('width', 40)
      rect.setAttribute('height', ele.value)
      rect.setAttribute('x', x)
      rect.setAttribute('y', 250)
      rect.setAttribute('fill', '#1B63DA')
      rect.setAttribute('transform', `rotate(180, ${x + 20}, 250)`)

      gGroup.appendChild(rect)
    });

    container.appendChild(gGroup)
  }

  drawXLabel() {

  }

  drawYLabel() {
    
  }

}
