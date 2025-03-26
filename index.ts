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

function mover() {
    for (const esto of casillas[Symbol.iterator]()) {
        esto.addEventListener('click', (evento : MouseEvent) => {
            console.log(esto.parentElement);
            if (!Object.keys(piezas).includes(esto.innerText)) return
            else {
                let numero = esto.cellIndex
                let cantidad = esto.parentElement?.childElementCount
                if (!cantidad) return
                if (cantidad == 13) {
                    if (numero == 5) {
                        let siguiente = esto.parentElement?.previousElementSibling
                        if (!siguiente) return
                        let nuevo = siguiente.children.item(0)
                        if (!nuevo) return
                        let pasado = nuevo.textContent
                        nuevo.textContent = esto.innerText
                        esto.innerText = '' + pasado
                    } else if (numero == 12) {
                        let siguiente = esto.parentElement?.nextElementSibling
                        if (!siguiente) return
                        let nuevo = siguiente.children.item(11)
                        if (!nuevo) return
                        let pasado = nuevo.textContent
                        nuevo.textContent = esto.innerText
                        esto.innerText = '' + pasado
                    } else {
                        let nuevo = esto.parentElement?.children.item(numero + 1)
                        if (!nuevo) return
                        let pasado = nuevo.textContent
                        nuevo.textContent = esto.innerText
                        esto.innerText = '' + pasado
                    }
                } else if (cantidad == 12) {
                    console.log('DOCEEEEEEEEEE');
                    
                    if (numero == 0) {
                        let siguiente = esto.parentElement?.children.item(1)
                        let prueba = siguiente?.parentElement?.getElementsByClassName(piezas['🟩']).length
                        if (!siguiente) return
                        if (prueba == undefined) return
                        console.log(prueba == 0);
                        console.log(prueba != 0);
                        console.log(esto.innerText != '🟩');
                        
                        if ((esto.innerText == '🟩' && siguiente.className == piezas[esto.innerText]) 
                            // || (prueba != 0 && esto.innerText != '🟩')
                        ) {
                            
                            let pasado = siguiente.textContent
                            siguiente.textContent = esto.innerText
                            esto.innerText = '' + pasado
                        } else if (prueba == 0 || (prueba > 0 && esto.innerText != '🟩')) {
                            let nuevo = esto.parentElement?.previousElementSibling?.children.item(0)
                            if (!nuevo) return
                            let pasado = nuevo.textContent
                            nuevo.textContent = esto.innerText
                            esto.innerText = '' + pasado
                        }
                    } else if (numero == 11) {
                        let siguiente = esto.parentElement?.children.item(10)
                        let prueba = siguiente?.parentElement?.getElementsByClassName(piezas['🟦']).length
                        if (!siguiente) return
                        if (!prueba) return
                        if ((esto.innerText == '🟦' && siguiente.className == piezas[esto.innerText]) 
                            || (prueba == 1)) {
                            let pasado = siguiente.textContent
                            siguiente.textContent = esto.innerText
                            esto.innerText = '' + pasado
                        } else {
                            let nuevo = esto.parentElement?.nextElementSibling?.children.item(11)
                            if (!nuevo) return
                            let pasado = nuevo.textContent
                            nuevo.textContent = esto.innerText
                            esto.innerText = '' + pasado
                        }
                    } else {
                        if ((numero == 5 || numero == 6) && esto.className != '') {
                            if (!centro) return
                            centro.innerText += esto.innerText
                            esto.innerText = ''
                        } else if (numero == 6 && esto.className == '') {
                            let siguiente = esto.parentElement?.nextElementSibling?.children.item(3)
                            if (!siguiente) return
                            let info = siguiente.textContent
                            siguiente.textContent = esto.innerText
                            esto.innerText = '' + info
                        } else if (numero <= 5 && piezas['🟩'] == esto.className) {
                            console.log('por aquí');
                            
                            let siguiente = esto.parentElement?.children.item(numero + 1)
                            if (!siguiente) return
                            let pasado = siguiente.textContent
                            siguiente.textContent = esto.innerText
                            esto.innerText = '' + pasado
                        } else 
                        // if ((numero >= 7 && piezas['🟦'] == esto.className) || numero >= 7) 
                            {
                            console.log('por acá');
                            
                            let siguiente = esto.parentElement?.children.item(numero - 1)
                            if (!siguiente) return
                            let pasado = siguiente.textContent
                            siguiente.textContent = esto.innerText
                            esto.innerText = '' + pasado
                        }
                    }
                } else if (cantidad == 3) {
                    console.log('los tresss');
                    
                    let actual = esto.parentElement
                    if (actual == undefined) return
                    if (numero == 0 || (numero == 1 && 
                        actual.getElementsByClassName(piezas['🟨']).length != 0 && esto.innerText == '🟨')) {
                        console.log('amarilllo');
                        
                        let siguiente = esto.parentElement?.previousElementSibling?.children.item(numero)
                        if (!siguiente) return
                        if (siguiente.tagName == 'TD' && siguiente) {
                            let info = siguiente.textContent
                            siguiente.textContent = esto.innerText
                            esto.innerText = '' + info
                        } else {
                            let nuevo = esto.parentElement?.previousElementSibling?.children.item(numero + 1)
                            if (!nuevo) return
                            let info = nuevo.textContent
                            nuevo.textContent = esto.innerText
                            esto.innerText = '' + info
                        }
                        
                    } else if ((numero == 2 && (actual.getElementsByClassName(piezas['🟥']).length != 0 || 
                        actual.getElementsByClassName(piezas['🟨']).length != 0)) || (numero == 1 && 
                        actual.getElementsByClassName(piezas['🟥']).length != 0 && esto.innerText == '🟥')) {
                        console.log('rojoooooooo');
                        
                        let siguiente = esto.parentElement?.nextElementSibling?.children.item(numero)
                        if (!siguiente) return
                        if (siguiente.tagName == 'TD' && siguiente) {
                            let info = siguiente.textContent
                            siguiente.textContent = esto.innerText
                            esto.innerText = '' + info
                        } else {
                            let nuevo = esto.parentElement?.nextElementSibling?.children.item(numero + 1)
                            if (!nuevo) return
                            let info = nuevo.textContent
                            nuevo.textContent = esto.innerText
                            esto.innerText = '' + info
                        }
                    } else if (actual.getElementsByClassName(piezas["🟨"]).length == 0 && 
                        (numero == 1 || numero == 2)) {
                        console.log('nadaaaaaaaaaa');
                        switch (numero) {
                            case 1:
                                if (esto.innerText == '🟨') {
                                    let siguiente = actual.previousElementSibling?.children.item(1)
                                    if (!siguiente) return
                                    let info = siguiente.textContent
                                    siguiente.textContent = esto.innerText
                                    esto.innerText = '' + info
                                } else {
                                    let siguiente = esto.previousElementSibling
                                    if (!siguiente) return
                                    let info = siguiente.textContent
                                    siguiente.textContent = esto.innerText
                                    esto.innerText = '' + info
                                }
                                break;
                            case 2:
                                let siguiente = esto.previousElementSibling
                                if (!siguiente) return
                                let info = siguiente.textContent
                                siguiente.textContent = esto.innerText
                                esto.innerText = '' + info
                                break
                            default:
                                break;
                        }
                    }
                } else if (cantidad == 5) {
                    switch (numero) {
                        case 1:
                            if (esto.parentElement?.getElementsByClassName(piezas["🟨"]).length != 0) {
                                let siguiente = esto.parentElement?.previousElementSibling?.children.item(5)
                                if (!siguiente) return
                                let info = siguiente.textContent
                                siguiente.textContent = esto.innerText
                                esto.innerText = '' + info
                            } else {
                                let siguiente = esto.nextElementSibling
                                if (!siguiente) return
                                let info = siguiente.textContent
                                siguiente.textContent = esto.innerText
                                esto.innerText = '' + info
                            }
                            break;
                        case 2: 
                            if (esto.parentElement?.getElementsByClassName(piezas["🟨"]).length != 0) {
                                if (!centro) return
                                centro.innerText = esto.innerText
                                esto.innerText = ''
                            } else {
                                let siguiente = esto.nextElementSibling
                                if (!siguiente) return
                                let info = siguiente.textContent
                                siguiente.textContent = esto.innerText
                                esto.innerText = '' + info
                            }
                            break
                        case 3: 
                            if (esto.parentElement?.getElementsByClassName(piezas["🟨"]).length != 0) {
                                let siguiente = esto.parentElement?.nextElementSibling?.children.item(5)
                                if (!siguiente) return
                                let info = siguiente.textContent
                                siguiente.textContent = esto.innerText
                                esto.innerText = '' + info
                            } else {
                                let siguiente = esto.parentElement.nextElementSibling?.children.item(2)
                                if (!siguiente) return
                                let info = siguiente.textContent
                                siguiente.textContent = esto.innerText
                                esto.innerText = '' + info
                            }
                            break
                        default:
                            break;
                    }
                }
            }
        })
    }
}

colorear();
mover()