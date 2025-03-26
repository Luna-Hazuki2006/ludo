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
function mover() {
    for (const esto of casillas[Symbol.iterator]()) {
        esto.addEventListener('click', (evento) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
            console.log(esto.parentElement);
            if (!Object.keys(piezas).includes(esto.innerText))
                return;
            else {
                let numero = esto.cellIndex;
                let cantidad = (_a = esto.parentElement) === null || _a === void 0 ? void 0 : _a.childElementCount;
                if (!cantidad)
                    return;
                if (cantidad == 13) {
                    if (numero == 5) {
                        let siguiente = (_b = esto.parentElement) === null || _b === void 0 ? void 0 : _b.previousElementSibling;
                        if (!siguiente)
                            return;
                        let nuevo = siguiente.children.item(0);
                        if (!nuevo)
                            return;
                        let pasado = nuevo.textContent;
                        nuevo.textContent = esto.innerText;
                        esto.innerText = '' + pasado;
                    }
                    else if (numero == 12) {
                        let siguiente = (_c = esto.parentElement) === null || _c === void 0 ? void 0 : _c.nextElementSibling;
                        if (!siguiente)
                            return;
                        let nuevo = siguiente.children.item(11);
                        if (!nuevo)
                            return;
                        let pasado = nuevo.textContent;
                        nuevo.textContent = esto.innerText;
                        esto.innerText = '' + pasado;
                    }
                    else {
                        let nuevo = (_d = esto.parentElement) === null || _d === void 0 ? void 0 : _d.children.item(numero + 1);
                        if (!nuevo)
                            return;
                        let pasado = nuevo.textContent;
                        nuevo.textContent = esto.innerText;
                        esto.innerText = '' + pasado;
                    }
                }
                else if (cantidad == 12) {
                    console.log('DOCEEEEEEEEEE');
                    if (numero == 0) {
                        let siguiente = (_e = esto.parentElement) === null || _e === void 0 ? void 0 : _e.children.item(1);
                        let prueba = (_f = siguiente === null || siguiente === void 0 ? void 0 : siguiente.parentElement) === null || _f === void 0 ? void 0 : _f.getElementsByClassName(piezas['🟩']).length;
                        if (!siguiente)
                            return;
                        if (prueba == undefined)
                            return;
                        console.log(prueba == 0);
                        console.log(prueba != 0);
                        console.log(esto.innerText != '🟩');
                        if ((esto.innerText == '🟩' && siguiente.className == piezas[esto.innerText])
                        // || (prueba != 0 && esto.innerText != '🟩')
                        ) {
                            let pasado = siguiente.textContent;
                            siguiente.textContent = esto.innerText;
                            esto.innerText = '' + pasado;
                        }
                        else if (prueba == 0 || (prueba > 0 && esto.innerText != '🟩')) {
                            let nuevo = (_h = (_g = esto.parentElement) === null || _g === void 0 ? void 0 : _g.previousElementSibling) === null || _h === void 0 ? void 0 : _h.children.item(0);
                            if (!nuevo)
                                return;
                            let pasado = nuevo.textContent;
                            nuevo.textContent = esto.innerText;
                            esto.innerText = '' + pasado;
                        }
                    }
                    else if (numero == 11) {
                        let siguiente = (_j = esto.parentElement) === null || _j === void 0 ? void 0 : _j.children.item(10);
                        let prueba = (_k = siguiente === null || siguiente === void 0 ? void 0 : siguiente.parentElement) === null || _k === void 0 ? void 0 : _k.getElementsByClassName(piezas['🟦']).length;
                        if (!siguiente)
                            return;
                        if (!prueba)
                            return;
                        if ((esto.innerText == '🟦' && siguiente.className == piezas[esto.innerText])
                            || (prueba == 1)) {
                            let pasado = siguiente.textContent;
                            siguiente.textContent = esto.innerText;
                            esto.innerText = '' + pasado;
                        }
                        else {
                            let nuevo = (_m = (_l = esto.parentElement) === null || _l === void 0 ? void 0 : _l.nextElementSibling) === null || _m === void 0 ? void 0 : _m.children.item(11);
                            if (!nuevo)
                                return;
                            let pasado = nuevo.textContent;
                            nuevo.textContent = esto.innerText;
                            esto.innerText = '' + pasado;
                        }
                    }
                    else {
                        if ((numero == 5 || numero == 6) && esto.className != '') {
                            if (!centro)
                                return;
                            centro.innerText += esto.innerText;
                            esto.innerText = '';
                        }
                        else if (numero == 6 && esto.className == '') {
                            let siguiente = (_p = (_o = esto.parentElement) === null || _o === void 0 ? void 0 : _o.nextElementSibling) === null || _p === void 0 ? void 0 : _p.children.item(3);
                            if (!siguiente)
                                return;
                            let info = siguiente.textContent;
                            siguiente.textContent = esto.innerText;
                            esto.innerText = '' + info;
                        }
                        else if (numero <= 5 && piezas['🟩'] == esto.className) {
                            console.log('por aquí');
                            let siguiente = (_q = esto.parentElement) === null || _q === void 0 ? void 0 : _q.children.item(numero + 1);
                            if (!siguiente)
                                return;
                            let pasado = siguiente.textContent;
                            siguiente.textContent = esto.innerText;
                            esto.innerText = '' + pasado;
                        }
                        else 
                        // if ((numero >= 7 && piezas['🟦'] == esto.className) || numero >= 7) 
                        {
                            console.log('por acá');
                            let siguiente = (_r = esto.parentElement) === null || _r === void 0 ? void 0 : _r.children.item(numero - 1);
                            if (!siguiente)
                                return;
                            let pasado = siguiente.textContent;
                            siguiente.textContent = esto.innerText;
                            esto.innerText = '' + pasado;
                        }
                    }
                }
                else if (cantidad == 3) {
                    console.log('los tresss');
                    let actual = esto.parentElement;
                    if (actual == undefined)
                        return;
                    if (numero == 0 || (numero == 1 &&
                        actual.getElementsByClassName(piezas['🟨']).length != 0 && esto.innerText == '🟨')) {
                        console.log('amarilllo');
                        let siguiente = (_t = (_s = esto.parentElement) === null || _s === void 0 ? void 0 : _s.previousElementSibling) === null || _t === void 0 ? void 0 : _t.children.item(numero);
                        if (!siguiente)
                            return;
                        if (siguiente.tagName == 'TD' && siguiente) {
                            let info = siguiente.textContent;
                            siguiente.textContent = esto.innerText;
                            esto.innerText = '' + info;
                        }
                        else {
                            let nuevo = (_v = (_u = esto.parentElement) === null || _u === void 0 ? void 0 : _u.previousElementSibling) === null || _v === void 0 ? void 0 : _v.children.item(numero + 1);
                            if (!nuevo)
                                return;
                            let info = nuevo.textContent;
                            nuevo.textContent = esto.innerText;
                            esto.innerText = '' + info;
                        }
                    }
                    else if ((numero == 2 && (actual.getElementsByClassName(piezas['🟥']).length != 0 ||
                        actual.getElementsByClassName(piezas['🟨']).length != 0)) || (numero == 1 &&
                        actual.getElementsByClassName(piezas['🟥']).length != 0 && esto.innerText == '🟥')) {
                        console.log('rojoooooooo');
                        let siguiente = (_x = (_w = esto.parentElement) === null || _w === void 0 ? void 0 : _w.nextElementSibling) === null || _x === void 0 ? void 0 : _x.children.item(numero);
                        if (!siguiente)
                            return;
                        if (siguiente.tagName == 'TD' && siguiente) {
                            let info = siguiente.textContent;
                            siguiente.textContent = esto.innerText;
                            esto.innerText = '' + info;
                        }
                        else {
                            let nuevo = (_z = (_y = esto.parentElement) === null || _y === void 0 ? void 0 : _y.nextElementSibling) === null || _z === void 0 ? void 0 : _z.children.item(numero + 1);
                            if (!nuevo)
                                return;
                            let info = nuevo.textContent;
                            nuevo.textContent = esto.innerText;
                            esto.innerText = '' + info;
                        }
                    }
                    else if (actual.getElementsByClassName(piezas["🟨"]).length == 0 &&
                        (numero == 1 || numero == 2)) {
                        console.log('nadaaaaaaaaaa');
                        switch (numero) {
                            case 1:
                                if (esto.innerText == '🟨') {
                                    let siguiente = (_0 = actual.previousElementSibling) === null || _0 === void 0 ? void 0 : _0.children.item(1);
                                    if (!siguiente)
                                        return;
                                    let info = siguiente.textContent;
                                    siguiente.textContent = esto.innerText;
                                    esto.innerText = '' + info;
                                }
                                else {
                                    let siguiente = esto.previousElementSibling;
                                    if (!siguiente)
                                        return;
                                    let info = siguiente.textContent;
                                    siguiente.textContent = esto.innerText;
                                    esto.innerText = '' + info;
                                }
                                break;
                            case 2:
                                let siguiente = esto.previousElementSibling;
                                if (!siguiente)
                                    return;
                                let info = siguiente.textContent;
                                siguiente.textContent = esto.innerText;
                                esto.innerText = '' + info;
                                break;
                            default:
                                break;
                        }
                    }
                }
                else if (cantidad == 5) {
                    switch (numero) {
                        case 1:
                            if (((_1 = esto.parentElement) === null || _1 === void 0 ? void 0 : _1.getElementsByClassName(piezas["🟨"]).length) != 0) {
                                let siguiente = (_3 = (_2 = esto.parentElement) === null || _2 === void 0 ? void 0 : _2.previousElementSibling) === null || _3 === void 0 ? void 0 : _3.children.item(5);
                                if (!siguiente)
                                    return;
                                let info = siguiente.textContent;
                                siguiente.textContent = esto.innerText;
                                esto.innerText = '' + info;
                            }
                            else {
                                let siguiente = esto.nextElementSibling;
                                if (!siguiente)
                                    return;
                                let info = siguiente.textContent;
                                siguiente.textContent = esto.innerText;
                                esto.innerText = '' + info;
                            }
                            break;
                        case 2:
                            if (((_4 = esto.parentElement) === null || _4 === void 0 ? void 0 : _4.getElementsByClassName(piezas["🟨"]).length) != 0) {
                                if (!centro)
                                    return;
                                centro.innerText = esto.innerText;
                                esto.innerText = '';
                            }
                            else {
                                let siguiente = esto.nextElementSibling;
                                if (!siguiente)
                                    return;
                                let info = siguiente.textContent;
                                siguiente.textContent = esto.innerText;
                                esto.innerText = '' + info;
                            }
                            break;
                        case 3:
                            if (((_5 = esto.parentElement) === null || _5 === void 0 ? void 0 : _5.getElementsByClassName(piezas["🟨"]).length) != 0) {
                                let siguiente = (_7 = (_6 = esto.parentElement) === null || _6 === void 0 ? void 0 : _6.nextElementSibling) === null || _7 === void 0 ? void 0 : _7.children.item(5);
                                if (!siguiente)
                                    return;
                                let info = siguiente.textContent;
                                siguiente.textContent = esto.innerText;
                                esto.innerText = '' + info;
                            }
                            else {
                                let siguiente = (_8 = esto.parentElement.nextElementSibling) === null || _8 === void 0 ? void 0 : _8.children.item(2);
                                if (!siguiente)
                                    return;
                                let info = siguiente.textContent;
                                siguiente.textContent = esto.innerText;
                                esto.innerText = '' + info;
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
        });
    }
}
colorear();
mover();
