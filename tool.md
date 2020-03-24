let canvas = document.createElement('canvas')
canvas.width = 256
canvas.height = 256
canvas.style.position = 'fixed'
canvas.style.borderRadius = '6px'
canvas.style.border = '1px solid #404040'
canvas.style.background = '#160f19'
canvas.onclick = () => canvas.remove()
let ctx = canvas.getContext('2d')
let onDefinitions = () => {
  let element = document.querySelector('#sidebar-files li.active')
  return element && element.title.split('/').slice(-1)[0] === 'definitions.js'
}
let derive = (m, target = {}) => {
  if (Array.isArray(m)) {
    for (let element of m)
      derive(element, target)
  }
  if (m.PARENT)
    derive(m.PARENT, target)
  for (let [key, value] of Object.entries(m))
    target[key] = value
  return target
}
let drawPolygon = sides => {
  ctx.beginPath()
  if (!sides) {
    ctx.arc(0, 0, 10, 0, Math.PI * 2)
  } else if (sides < 0) { // Star
    let angle = sides % 2 === 0 ? Math.PI / sides : 0
    sides = -sides
    let dip = 1 - 6 / (sides * sides)
    ctx.moveTo(10 * Math.cos(angle), 10 * Math.sin(angle))
    for (let i = 0; i < sides; i++) {
      let theta = (i + 1) / sides * 2 * Math.PI
      let hTheta = (i + 0.5) / sides * 2 * Math.PI
      let c = {
        x: 10 * dip * Math.cos(hTheta + angle),
        y: 10 * dip * Math.sin(hTheta + angle),
      }
      let p = {
        x: 10 * Math.cos(theta + angle),
        y: 10 * Math.sin(theta + angle),
      }
      ctx.quadraticCurveTo(c.x, c.y, p.x, p.y);
    }
    ctx.closePath()
  } else if (sides > 0) { // Polygon
    for (let i = 0; i < sides; i++) {
      let theta = (i * 2 + 1 - sides % 2) * Math.PI / sides
      ctx.lineTo(10 * Math.cos(theta), 10 * Math.sin(theta))
    }
    ctx.closePath()
  }
  ctx.stroke()
  ctx.fill()
}
let drawEntity = (source, scaled) => {
  ctx.lineWidth = 1 / scaled
  let m = derive(source)
  if (m.TURRETS)
    for (let { POSITION: [size, x, y, angle, _arc, layer], TYPE } of m.TURRETS) {
      if (layer !== 0) continue
      ctx.save()
      ctx.rotate(angle / 180 * Math.PI)
      ctx.translate(x, y)
      ctx.scale(size / 20, size / 20)
      drawEntity(TYPE, scaled * size / 20)
      ctx.restore()
    }
  if (m.GUNS)
    for (let { POSITION: [length, width, aspect, x, y, angle, _delay] } of m.GUNS) {
      ctx.save()
      ctx.rotate(angle / 180 * Math.PI)
      ctx.beginPath()
      let extend = width * 0.5
      if (aspect === 0 || aspect === 1 || aspect === -1) {
        ctx.rect(x, y - extend, length, width)
      } else {
        let a = aspect > 0 ? aspect : 1
        let b = aspect < 0 ? -aspect : 1
        ctx.moveTo(x, y - extend * b)
        ctx.lineTo(x, y + extend * b)
        ctx.lineTo(x + length, y + extend * a)
        ctx.lineTo(x + length, y - extend * a)
        ctx.closePath()
      }
      ctx.stroke()
      ctx.fill()
      ctx.restore()
    }
  drawPolygon(m.SHAPE)
  if (m.TURRETS)
    for (let { POSITION: [size, x, y, angle, _arc, layer], TYPE } of m.TURRETS) {
      if (layer !== 1) continue
      ctx.save()
      ctx.scale(size / 20, size / 20)
      ctx.translate(x / 10, y / 10)
      ctx.rotate(angle)
      drawEntity(TYPE, scaled * size / 20)
      ctx.restore()
    }
}
let drawTank = m => {
  ctx.fillStyle = '#333'
  ctx.strokeStyle = '#fff'
  ctx.lineJoin = 'round'
  ctx.fillRect(0, 0, 256, 256)
  ctx.save()
  ctx.translate(128, 128)
  ctx.scale(4, 4)
  drawEntity(m, 0.5)
  ctx.restore()
}

let getExports = code => {
  let script = `
    let exports = {}
    let module = { exports }
    let require = module => {
      if (module === '../config.json') return { MAX_SKILL: 9 }
      throw new Error('Cannot find module')
    }
    ;${ code };
    postMessage(module)
  `
  let blob = new Blob([script], { type: 'application/javascript' })
  return new Promise((resolve, reject) => {
    let worker = new Worker(URL.createObjectURL(blob))
    worker.onmessage = ({ data }) => resolve(data.exports)
    worker.onerror = reject
  })
}

let addToLine = lineHandle => {
  let line = lineHandle.lineNo()
  for (let mark of instance.findMarksAt({ line, ch: 0 }))
    mark.clear()
  for (let mark of instance.findMarks({ line, ch: 0 }, { line: line + 1, ch: 0 }))
    mark.clear()

  let regex = /\bexports\s*\.\s*[a-zA-Z$_][a-zA-Z0-9$_]*\b/g
  let match
  while (match = regex.exec(lineHandle.text)) {
    let { index: ch } = match
    let widget = document.createElement('span')
    widget.innerHTML = '<span class="CodeMirror-foldmarker">+</span>'
    widget.onclick = () => {
      let { ch } = bookmark.find()
      let [line] = bookmark.lines
      if (!line) return
      let match = line.text.slice(ch).match(/^exports\s*\.\s*([a-zA-Z$_][a-zA-Z0-9$_]*)\b/)
      if (!match || !match[1]) return
      getExports(instance.getValue()).then(r => {
        drawTank(r[match[1]])
        let { top, bottom, left } = widget.getBoundingClientRect()
        canvas.style.top = (bottom + 5 + 256 > innerHeight ? top - 5 - 256 : bottom + 5) + 'px'
        canvas.style.left = left + 'px'
        document.body.appendChild(canvas)
      })
    }
    let bookmark = instance.setBookmark({ line, ch }, { widget })
  }
}

let instance
let definitionsCheck = () => {
  if (onDefinitions()) {
    instance = document.getElementById('text-editor').firstChild.CodeMirror
    instance.eachLine(addToLine)
    instance.on('change', (_, { from: { line }, text: { length } }) => {
      if (onDefinitions())
        for (let i = 0; i < length; i++)
          addToLine(instance.getLineHandle(line + i))
    })
  } else {
    setTimeout(definitionsCheck, 500)
  }
}
definitionsCheck()
