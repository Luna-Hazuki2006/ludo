"use strict";
var tabla = document.getElementById('tabla');
var casillas = document.getElementsByTagName('td');
var centro = document.getElementById('centro');
let piezas = {
    '🟨': 'amarillo',
    '🟥': 'rojo',
    '🟩': 'verde',
    '🟦': 'azul'
};
function colorear() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
    let lineas = tabla === null || tabla === void 0 ? void 0 : tabla.getElementsByTagName('tr');
    if (lineas == undefined)
        return;
    let datos = (_a = lineas === null || lineas === void 0 ? void 0 : lineas.item(7)) === null || _a === void 0 ? void 0 : _a.getElementsByTagName('td');
    if (datos == undefined)
        return;
    console.log(datos.length);
    for (let i = 0; i < datos.length; i++) {
        if (i == 0 || i == datos.length - 1)
            continue;
        if (i >= datos.length / 2)
            (_b = datos.item(i)) === null || _b === void 0 ? void 0 : _b.classList.add('azul');
        else
            (_c = datos.item(i)) === null || _c === void 0 ? void 0 : _c.classList.add('verde');
    }
    (_e = (_d = lineas === null || lineas === void 0 ? void 0 : lineas.item(6)) === null || _d === void 0 ? void 0 : _d.getElementsByTagName('td').item(1)) === null || _e === void 0 ? void 0 : _e.classList.add('verde');
    (_g = (_f = lineas === null || lineas === void 0 ? void 0 : lineas.item(8)) === null || _f === void 0 ? void 0 : _f.getElementsByTagName('td').item(datos.length - 2)) === null || _g === void 0 ? void 0 : _g.classList.add('azul');
    for (let i = 0; i < lineas.length; i++) {
        if (i == 0 || i == lineas.length - 1)
            continue;
        let celdas = (_h = lineas.item(i)) === null || _h === void 0 ? void 0 : _h.getElementsByTagName('td');
        if (celdas == undefined)
            continue;
        if (celdas.length % 2 == 0)
            continue;
        if (i > lineas.length / 2) {
            (_j = celdas === null || celdas === void 0 ? void 0 : celdas.item(1)) === null || _j === void 0 ? void 0 : _j.classList.add('amarillo');
            if (i == lineas.length - 2)
                (_k = celdas.item(0)) === null || _k === void 0 ? void 0 : _k.classList.add('amarillo');
        }
        else {
            (_l = celdas.item(1)) === null || _l === void 0 ? void 0 : _l.classList.add('rojo');
            if (i == 1)
                (_m = celdas.item(2)) === null || _m === void 0 ? void 0 : _m.classList.add('rojo');
        }
    }
}
function flechear() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    let lista = tabla === null || tabla === void 0 ? void 0 : tabla.getElementsByTagName('tr');
    if (!lista)
        return;
    for (const fila of lista === null || lista === void 0 ? void 0 : lista[Symbol.iterator]()) {
        let celdas = fila.getElementsByTagName('td');
        if (celdas.length == 3) {
            for (let i = 0; i < celdas.length; i++) {
                switch (i) {
                    case 0:
                        if (fila.rowIndex == 0)
                            (_a = celdas.item(i)) === null || _a === void 0 ? void 0 : _a.classList.add('➡️');
                        else if (fila.rowIndex == 9)
                            (_b = celdas.item(i)) === null || _b === void 0 ? void 0 : _b.classList.add('↖️');
                        else
                            (_c = celdas.item(i)) === null || _c === void 0 ? void 0 : _c.classList.add('⬆️');
                        break;
                    case 1:
                        if (fila.rowIndex == 0)
                            (_d = celdas.item(i)) === null || _d === void 0 ? void 0 : _d.classList.add('🟥⬇️➡️');
                        else if (fila.rowIndex == 5 || fila.rowIndex == 9)
                            (_e = celdas.item(i)) === null || _e === void 0 ? void 0 : _e.classList.add('⏺️');
                        else if (fila.rowIndex == lista.length - 1)
                            (_f = celdas.item(i)) === null || _f === void 0 ? void 0 : _f.classList.add('🟨⬆️⬅️');
                        else if (fila.rowIndex < 5)
                            (_g = celdas.item(i)) === null || _g === void 0 ? void 0 : _g.classList.add('🟥⬇️');
                        else if (fila.rowIndex > 9)
                            (_h = celdas.item(i)) === null || _h === void 0 ? void 0 : _h.classList.add('🟨⬆️');
                        break;
                    case 2:
                        if (fila.rowIndex == lista.length - 1)
                            (_j = celdas.item(i)) === null || _j === void 0 ? void 0 : _j.classList.add('⬅️');
                        else if (fila.rowIndex == 5)
                            (_k = celdas.item(i)) === null || _k === void 0 ? void 0 : _k.classList.add('↘️');
                        else
                            (_l = celdas.item(i)) === null || _l === void 0 ? void 0 : _l.classList.add('⬇️');
                        break;
                    default:
                        break;
                }
            }
        }
        else if (celdas.length == 12) {
            for (const celda of celdas[Symbol.iterator]()) {
                if (fila.getElementsByClassName(piezas['🟩']).length == 1) {
                    switch (celda.cellIndex) {
                        case (celdas.length / 2) - 1:
                            celda.classList.add('↗️');
                            break;
                        case celdas.length:
                            celda.classList.add('⬇️');
                            break;
                        default:
                            celda.classList.add('➡️');
                            break;
                    }
                }
                else if (fila.getElementsByClassName(piezas['🟦']).length == 1) {
                    switch (celda.cellIndex) {
                        case 0:
                            celda.classList.add('⬆️');
                            break;
                        case celdas.length / 2:
                            celda.classList.add('↙️');
                            break;
                        default:
                            celda.classList.add('⬅️');
                            break;
                    }
                }
                else {
                    if (celda.cellIndex == 0)
                        celda.classList.add('🟩➡️⬆️');
                    else if (celda.cellIndex == celdas.length - 1)
                        celda.classList.add('🟦⬅️⬇️');
                    else if (celda.cellIndex == (celdas.length / 2) - 1 || celda.cellIndex == celdas.length / 2)
                        celda.classList.add('⏺️');
                    else if (celda.cellIndex < (celdas.length / 2) - 1)
                        celda.classList.add('🟩➡️');
                    else if (celda.cellIndex > celdas.length / 2)
                        celda.classList.add('🟦⬅️');
                }
            }
        }
    }
}
function movimiento(celda, lugar) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    switch (lugar) {
        case '⬅️': return celda.previousElementSibling;
        case '➡️': return celda.nextElementSibling;
        case '⬇️': return (_b = (_a = celda.parentElement) === null || _a === void 0 ? void 0 : _a.nextElementSibling) === null || _b === void 0 ? void 0 : _b.getElementsByTagName('td').item(celda.cellIndex
            - (((_c = celda.parentElement.firstElementChild) === null || _c === void 0 ? void 0 : _c.tagName) == 'TH' ||
                ((_d = celda.parentElement.children.item(celda.parentElement.children.length / 2)) === null || _d === void 0 ? void 0 : _d.tagName) == 'TH'
                ? 1 : 0));
        case '⬆️': return (_f = (_e = celda.parentElement) === null || _e === void 0 ? void 0 : _e.previousElementSibling) === null || _f === void 0 ? void 0 : _f.getElementsByTagName('td').item(celda.cellIndex);
        case '↙️': return (_h = (_g = celda.parentElement) === null || _g === void 0 ? void 0 : _g.nextElementSibling) === null || _h === void 0 ? void 0 : _h.getElementsByTagName('td').item(2);
        case '↗️': return (_k = (_j = celda.parentElement) === null || _j === void 0 ? void 0 : _j.previousElementSibling) === null || _k === void 0 ? void 0 : _k.getElementsByTagName('td').item(0);
        case '↘️': return (_m = (_l = celda.parentElement) === null || _l === void 0 ? void 0 : _l.nextElementSibling) === null || _m === void 0 ? void 0 : _m.getElementsByTagName('td').item(6);
        case '↖️': return (_p = (_o = celda.parentElement) === null || _o === void 0 ? void 0 : _o.previousElementSibling) === null || _p === void 0 ? void 0 : _p.getElementsByTagName('td').item(5);
        case '⏺️': return centro;
        default: return centro;
    }
}
function llegar(inicio, final) {
    if (!final)
        return;
    if (final.tagName == 'TH')
        final.textContent += inicio.innerText;
    else
        final.textContent = inicio.innerText;
    inicio.innerText = '';
}
function mover() {
    for (const esto of casillas[Symbol.iterator]()) {
        esto.addEventListener('click', (evento) => {
            if (esto.innerText == '')
                return;
            console.log(esto);
            let lugar = esto.classList.item(esto.classList.length - 1);
            console.log(lugar);
            console.log(lugar === null || lugar === void 0 ? void 0 : lugar.length);
            switch (lugar === null || lugar === void 0 ? void 0 : lugar.length) {
                case 2:
                    var actual = movimiento(esto, lugar);
                    break;
                case 4:
                    if (lugar.substring(0, 2) != esto.innerText)
                        return;
                    actual = movimiento(esto, lugar.substring(2, 4));
                    break;
                case 6:
                    if (lugar.substring(0, 2) == esto.innerText) {
                        actual = movimiento(esto, lugar.substring(2, 4));
                    }
                    else {
                        actual = movimiento(esto, lugar.substring(4));
                    }
                    break;
                default:
                    break;
            }
            if (!actual)
                return;
            llegar(esto, actual);
        });
    }
}
colorear();
flechear();
mover();
