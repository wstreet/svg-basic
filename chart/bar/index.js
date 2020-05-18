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
    const gGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    const container = this.get('container');
    const width = this.get('width');

    [50, 100, 150, 200].forEach(posY => {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      line.setAttribute('x1', 50)
      line.setAttribute('y1', posY)
      line.setAttribute('x2', width-50)
      line.setAttribute('y2', posY)
      line.setAttribute('stroke', '#ccc')
      line.setAttribute('stroke-width', 0.5)
      gGroup.appendChild(line)
    })
    container.appendChild(gGroup)
  }

  drawXAxis() {
    const container = this.get('container')
    const width = this.get('width');
    const xAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    xAxis.setAttribute('x1', 50)
    xAxis.setAttribute('y1', 250)
    xAxis.setAttribute('x2', width - 50)
    xAxis.setAttribute('y2', 250)
    xAxis.setAttribute('stroke', '#ccc')
    xAxis.setAttribute('stroke-width', '1')
    xAxis.setAttribute('marker-end', 'url(#arrow)')

    container.appendChild(xAxis)
  }

  drawYAxis() {
    const data = this.getData()
    const container = this.get('container')

    const yAxis = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    yAxis.setAttribute('x1', 50)
    yAxis.setAttribute('y1', 250)
    yAxis.setAttribute('x2', 50)
    yAxis.setAttribute('y2', 20)
    yAxis.setAttribute('stroke', '#ccc')
    yAxis.setAttribute('stroke-width', '1')
    yAxis.setAttribute('marker-end', 'url(#arrow)')

    container.appendChild(yAxis)
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
    const data = this.getData()
    const gGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    
    const container = this.get('container')

    data.forEach((ele, idx) => {
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      const x = (idx + 1) * 80
      text.setAttribute('x', x)
      text.setAttribute('y', 270)
      text.setAttribute('transform', `translate(15, 0)`)
      text.textContent = ele.type

      gGroup.setAttribute('fill', '#ccc')
      gGroup.appendChild(text)
    });

    container.appendChild(gGroup)
  }

  drawYLabel() {
    
  }

}
