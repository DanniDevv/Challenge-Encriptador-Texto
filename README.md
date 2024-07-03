# Encriptador de Texto

Este proyecto consiste en una aplicación web que permite encriptar y desencriptar texto siguiendo un conjunto específico de reglas de sustitución de caracteres. Es una herramienta útil para ocultar mensajes o aprender sobre técnicas básicas de cifrado.

## Características

- **Encriptación de Texto:** Permite al usuario ingresar texto en minúsculas y sin acentos para luego encriptarlo siguiendo reglas predefinidas.
- **Desencriptación de Texto:** Permite al usuario ingresar texto encriptado siguiendo las mismas reglas para obtener el texto original.
- **Interfaz Sencilla:** Cuenta con una interfaz amigable y fácil de usar, dividida en secciones para encriptar, desencriptar y mostrar el resultado.
- **Copiado al Portapapeles:** Ofrece la opción de copiar el texto encriptado/desencriptado al portapapeles para su uso en otro lugar.

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
