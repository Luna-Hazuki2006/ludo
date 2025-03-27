var tabla = document.getElementById('tabla');
var casillas = document.getElementsByTagName('td')
var centro = document.getElementById('centro')

let piezas = {
    '🟨': 'amarillo', 
    '🟥': 'rojo', 
    '🟩': 'verde', 
    '🟦': 'azul'}

function colorear() {
    let lineas = tabla?.getElementsByTagName('tr');
    if (lineas == undefined) return
    let datos = lineas?.item(7)?.getElementsByTagName('td');
    if (datos == undefined) return
    console.log(datos.length);
    for (let i = 0; i < datos.length; i++) {
        if (i == 0 || i == datos.length - 1) continue
        if (i >= datos.length / 2) datos.item(i)?.classList.add('azul')
        else datos.item(i)?.classList.add('verde')
    }
    lineas?.item(6)?.getElementsByTagName('td').item(1)?.classList.add('verde')
    lineas?.item(8)?.getElementsByTagName('td').item(datos.length - 2)?.classList.add('azul')
    for (let i = 0; i < lineas.length; i++) {
        if (i == 0 || i == lineas.length - 1) continue
        let celdas = lineas.item(i)?.getElementsByTagName('td')
        if (celdas == undefined) continue
        if (celdas.length % 2 == 0) continue
        if (i > lineas.length / 2) {
            celdas?.item(1)?.classList.add('amarillo')
            if (i == lineas.length - 2) celdas.item(0)?.classList.add('amarillo')
        }
        else {
            celdas.item(1)?.classList.add('rojo')
            if (i == 1) celdas.item(2)?.classList.add('rojo')
        }
    }
}

function flechear() {
    let lista = tabla?.getElementsByTagName('tr')
    if (!lista) return
    for (const fila of lista?.[Symbol.iterator]()) {
        let celdas = fila.getElementsByTagName('td')
        if (celdas.length == 3) {
            for (let i = 0; i < celdas.length; i++) {
                switch (i) {
                    case 0: 
                        if (fila.rowIndex == 0) celdas.item(i)?.classList.add('➡️')
                        else if (fila.rowIndex == 9) celdas.item(i)?.classList.add('↖️')
                        else celdas.item(i)?.classList.add('⬆️')
                        break;
                    case 1: 
                        if (fila.rowIndex == 0) celdas.item(i)?.classList.add('🟥⬇️➡️')
                        else if (fila.rowIndex == 5 || fila.rowIndex == 9) celdas.item(i)?.classList.add('⏺️')
                        else if (fila.rowIndex == lista.length - 1) celdas.item(i)?.classList.add('🟨⬆️⬅️')
                        else if (fila.rowIndex < 5) celdas.item(i)?.classList.add('🟥⬇️')
                        else if (fila.rowIndex > 9) celdas.item(i)?.classList.add('🟨⬆️')
                        break
                    case 2: 
                        if (fila.rowIndex == lista.length - 1) celdas.item(i)?.classList.add('⬅️')
                        else if (fila.rowIndex == 5) celdas.item(i)?.classList.add('↘️')
                        else celdas.item(i)?.classList.add('⬇️')
                        break
                    default:
                        break;
                }
            }
        } else if (celdas.length == 12) {
            for (const celda of celdas[Symbol.iterator]()) {
                if (fila.getElementsByClassName(piezas['🟩']).length == 1) {
                    switch (celda.cellIndex) {
                        case (celdas.length / 2) - 1: celda.classList.add('↗️'); break
                        case celdas.length: celda.classList.add('⬇️'); break
                        default: celda.classList.add('➡️'); break;
                    }
                } else if (fila.getElementsByClassName(piezas['🟦']).length == 1) {
                    switch (celda.cellIndex) {
                        case 0: celda.classList.add('⬆️'); break;
                        case celdas.length / 2: celda.classList.add('↙️'); break
                        default: celda.classList.add('⬅️'); break;
                    }
                } else {
                    if (celda.cellIndex == 0) celda.classList.add('🟩➡️⬆️')
                    else if (celda.cellIndex == celdas.length - 1) celda.classList.add('🟦⬅️⬇️')
                    else if (celda.cellIndex == (celdas.length / 2) - 1 || celda.cellIndex == celdas.length / 2) celda.classList.add('⏺️')
                    else if (celda.cellIndex < (celdas.length / 2) - 1) celda.classList.add('🟩➡️')
                    else if (celda.cellIndex > celdas.length / 2) celda.classList.add('🟦⬅️')
                }
            }
        }
    }
}

function movimiento(celda : HTMLTableCellElement, lugar : string) {
    switch (lugar) {
        case '⬅️': return celda.previousElementSibling
        case '➡️': return celda.nextElementSibling
        case '⬇️': return celda.parentElement?.nextElementSibling?.getElementsByTagName('td').item(celda.cellIndex 
            - (celda.parentElement.firstElementChild?.tagName == 'TH' || 
                celda.parentElement.children.item(celda.parentElement.children.length / 2)?.tagName == 'TH' 
                ? 1 : 0))
        case '⬆️': return celda.parentElement?.previousElementSibling?.getElementsByTagName('td').item(celda.cellIndex)
        case '↙️': return celda.parentElement?.nextElementSibling?.getElementsByTagName('td').item(2)
        case '↗️': return celda.parentElement?.previousElementSibling?.getElementsByTagName('td').item(0)
        case '↘️': return celda.parentElement?.nextElementSibling?.getElementsByTagName('td').item(6)
        case '↖️': return celda.parentElement?.previousElementSibling?.getElementsByTagName('td').item(5)
        case '⏺️': return centro
        default: return centro
    }
}

function llegar(inicio : HTMLTableCellElement, final : Element) {
    if (!final) return
    if (final.tagName == 'TH') final.textContent += inicio.innerText
    else final.textContent = inicio.innerText
    inicio.innerText = ''
}

function mover() {
    for (const esto of casillas[Symbol.iterator]()) {
        esto.addEventListener('click', (evento : MouseEvent) => {
            if (esto.innerText == '') return
            console.log(esto);
            let lugar = esto.classList.item(esto.classList.length - 1)
            console.log(lugar);
            console.log(lugar?.length);
            switch (lugar?.length) {
                case 2:
                    var actual = movimiento(esto, lugar)
                    break;
                case 4: 
                    if (lugar.substring(0, 2) != esto.innerText) return
                    actual = movimiento(esto, lugar.substring(2, 4))
                    break
                case 6: 
                    if (lugar.substring(0, 2) == esto.innerText) {
                        actual = movimiento(esto, lugar.substring(2, 4))
                    } else {
                        actual = movimiento(esto, lugar.substring(4))
                    }
                    break
                default:
                    break;
            }
            if (!actual) return
            llegar(esto, actual)
        })
    }
}

colorear();
flechear()
mover()