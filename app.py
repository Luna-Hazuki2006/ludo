# def lengthOfLastWord(s: str) -> int:
#     lista = s.strip().split(' ')
#     print(lista)
#     print(len(lista[-1]))

# lengthOfLastWord("luffy is still joyboy")

# def plusOne(digits: list[int]) -> list[int]:
#     print(str(digits).join())

# plusOne([1,2,3])

import math

def permutar(numero : int): 
    total = 1
    for i in range(2, numero + 1): 
        total *= i
    return total

def combinacion(m : int, n : int): 
    return permutar(m) / (permutar(n) * permutar(m - n))

def variacion(m : int, n : int): 
    return permutar(m) / permutar(m - n)

def encontrar(primero : list[int], segundo : list[int]): 
    pass

print(2 * permutar(3) - 4 * combinacion(5, 2) + 3 * variacion(4, 2))

def final(s: str) -> int:
    return len(s.strip().split(' ')[-1])

print(final("Una frase muy extraña"))

def valido(s: str) -> bool:
    parejas = {')': '(', 
               '}': '{', 
               ']': '['}
    iniciales = ['(', '{', '[']
    finales = [')', '}', ']']
    incompletos = []
    if len(s) % 2 != 0: return False
    for letra in s: 
        if letra in iniciales: 
            incompletos.append(letra)
        elif letra in finales and len(incompletos) != 0: 
            if incompletos[-1] != parejas[letra]: 
                return False
            else: incompletos.pop(-1)
        else: return False
    return len(incompletos) == 0

def suma(digitos: list[int]) -> list[int]:
    return [int(y) for y in str(int(''.join([str(x) for x in digitos])) + 1)]

def buscar(lista: list[int], buscado: int) -> int:
    if max(lista) < buscado: return len(lista)
    for i, numero in enumerate(lista): 
        if numero == buscado or numero > buscado: return i

print(suma([9]))
print(buscar([1,3,5,6], 4))

def cuadrada(x: int) -> int:
    numero = 0
    resultado = 0
    print('inicio de pasos')
    while resultado < x: 
        numero += 1
        resultado = numero * numero
    return numero if resultado == x else numero - 1

def mejorada(x : int) -> int:
    return math.floor(math.sqrt(x))

print(cuadrada(8))
print(mejorada(0))

def binarios(a: str, b: str) -> str:
    return f"{int(a, 2) + int(b, 2):b}"

print(binarios("1010", "1011"))

def partes(s: str):
    pedazos = []
    lista = {}
    for dato in s: 
        if dato not in list(lista.keys()): 
            lista[dato] = (s.find(dato), s.rfind(dato))
    inicio = 0
    final = list(lista.values())[0][1]
    for esto in lista.items(): 
        print(esto)
        if esto[1][0] < final and esto[1][1] > final: 
            final = esto[1][1]
        elif esto[1][0] > final: 
            pedazos.append(final - inicio + 1)
            inicio = esto[1][0]
            final = esto[1][1]
    pedazos.append(final - inicio + 1)
    return pedazos

print(partes('eccbbbbdec'))