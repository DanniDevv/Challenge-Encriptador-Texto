# Encriptador de Texto

Este proyecto consiste en una aplicación web que permite encriptar y desencriptar texto siguiendo un conjunto específico de reglas de sustitución de caracteres. Es una herramienta útil para ocultar mensajes o aprender sobre técnicas básicas de cifrado.

## Reglas de Encriptación

Las reglas de encriptación/desencriptación son las siguientes:

- La letra "e" es convertida a "enter"
- La letra "i" es convertida a "imes"
- La letra "a" es convertida a "ai"
- La letra "o" es convertida a "ober"
- La letra "u" es convertida a "ufat"

## Funciones Principales

### Encriptar

La función `encriptar` toma el texto ingresado por el usuario y lo encripta siguiendo las reglas mencionadas.

```javascript
function encriptar() {
  const texto = document.getElementById('encriptado').value
  const textoEncriptado = texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat')

  mostrarTextoEncriptado(textoEncriptado)
}
```

### Desencriptar

La función desencriptar realiza el proceso inverso, convirtiendo el texto encriptado de vuelta a su forma original.

```javascript
function desencriptar() {
  const texto = document.getElementById('encriptado').value
  const textoDesencriptado = texto
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u')

  mostrarTextoEncriptado(textoDesencriptado)
}
```

### Copiar al Portapapeles

La función copiar permite copiar el texto encriptado/desencriptado al portapapeles.

```javascript
function copiar() {
  const textoEncriptado = document.getElementById('text-encriptado')
  textoEncriptado.select()
  document.execCommand('copy')
}
```
