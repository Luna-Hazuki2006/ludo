"use strict";
var tabla = document.getElementById('tabla');
var casillas = document.getElementsByTagName('td');
var centro = document.getElementById('centro');
var dado = document.getElementById('dado');
let piezas = {
    '🟨': 'amarillo',
    '🟥': 'rojo',
    '🟩': 'verde',
    '🟦': 'azul'
};
let caras = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣'];
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
    var _a, _b, _c, _d;
    if (!final)
        return;
    if (final.textContent == null)
        final.textContent = '';
    if (final.tagName == 'TH' && final.id == 'centro')
        final.textContent += inicio.textContent;
    else {
        if (final.textContent.includes(inicio.textContent) || final.textContent == '') {
            final.textContent += (_a = inicio.textContent) === null || _a === void 0 ? void 0 : _a.slice(inicio.textContent.length - 2, inicio.textContent.length);
            inicio.textContent = (_b = inicio.textContent) === null || _b === void 0 ? void 0 : _b.slice(0, inicio.textContent.length - 2);
        }
        else if (final.textContent.length == 2 && (final.textContent == '🟥' || final.textContent == '🟦'
            || final.textContent == '🟨' || final.textContent == '🟩')) {
            let casilla = document.getElementById(piezas[final.textContent]);
            if (!casilla)
                return;
            casilla.innerText += final.textContent;
            final.textContent = (_c = inicio.textContent) === null || _c === void 0 ? void 0 : _c.slice(inicio.textContent.length - 2, inicio.textContent.length);
            inicio.textContent = (_d = inicio.textContent) === null || _d === void 0 ? void 0 : _d.slice(0, inicio.textContent.length - 2);
        }
    }
}
function buscar(celda, color, veces) {
    if (veces == 0) {
        console.log('no lo seeeee');
        console.log(celda);
        return celda;
    }
    let lugar = celda.classList.item(celda.classList.length - 1);
    if (!lugar)
        return celda;
    switch (lugar.length) {
        case 2:
            var actual = movimiento(celda, lugar);
            break;
        case 4:
            if (lugar.substring(0, 2) != color)
                return celda;
            actual = movimiento(celda, lugar.substring(2, 4));
            break;
        case 6:
            if (lugar.substring(0, 2) == color)
                actual = movimiento(celda, lugar.substring(2, 4));
            else
                actual = movimiento(celda, lugar.substring(4));
            break;
        default:
            actual = celda;
            break;
    }
    if (!actual)
        return celda;
    return buscar(actual, color, veces - 1);
}
function lanzar() {
    dado === null || dado === void 0 ? void 0 : dado.addEventListener('click', (evento) => {
        if (!dado)
            return;
        dado.innerText = caras[Math.floor(Math.random() * caras.length)];
    });
}
function mover() {
    for (const esto of casillas[Symbol.iterator]()) {
        esto.addEventListener('click', (evento) => {
            if (!dado)
                return;
            if (esto.innerText == '' || dado.innerText == '🎲')
                return;
            let veces = Number(dado === null || dado === void 0 ? void 0 : dado.innerText.split('')[0]);
            console.log(veces);
            let final = buscar(esto, esto.innerText, veces);
            console.log(final);
            dado.innerText = '🎲';
            console.log('pasó');
            if (!final)
                return;
            console.log('perfecto');
            llegar(esto, final);
        });
    }
    for (const uno of document.getElementsByTagName('th')) {
        uno.addEventListener('click', (evento) => {
            var _a;
            if (uno.id == 'centro')
                return;
            if (!dado)
                return;
            if (uno.innerText == '' || dado.innerText == '🎲')
                return;
            if (dado.innerText != '6️⃣')
                return;
            let encontrado = document.getElementsByClassName(uno.id);
            for (const actual of encontrado[Symbol.iterator]()) {
                if (((_a = actual.classList.item(1)) === null || _a === void 0 ? void 0 : _a.length) == 2 && actual.classList.item(1) != '⏺️') {
                    // actual.textContent = uno.innerText.substring(0, 2)
                    // uno.innerText = uno.innerText.slice(2)
                    llegar(uno, actual);
                    dado.innerText = '🎲';
                    break;
                }
            }
        });
    }
}
colorear();
flechear();
lanzar();
mover();
