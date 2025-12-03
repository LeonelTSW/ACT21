## Materia: **Fundamentos de Álgebra**  
## Alumno: **Leonel Zapata Angulo**  
## Grupo: **1-A**  
## Proyecto: **Implementación del Cifrado Hill**

---

# Descripción del Proyecto

Este proyecto implementa el algoritmo de Cifrado Hill usando una interfaz web desarrollada con HTML, CSS y JavaScript.  
Permite encriptar y desencriptar mensajes utilizando una matriz clave 2×2 y operaciones modulares basadas en el alfabeto A–Z.

El sistema convierte letras en números, forma vectores de tamaño 2 y aplica multiplicación matricial módulo 26 para realizar el proceso de cifrado y descifrado.

---

# Descripción del Algoritmo (Cifrado Hill)

El Cifrado Hill es un método de criptografía por bloques que utiliza álgebra lineal.  
Opera con una matriz clave y vectores provenientes del mensaje.

Los pasos generales son:

1. Convertir cada letra del mensaje a un valor numérico (A=0, B=1, … Z=25).  
2. Agrupar el mensaje en pares de caracteres.  
3. Multiplicar cada pareja por la matriz clave.  
4. Aplicar el resultado módulo 26.  
5. Convertir nuevamente los valores numéricos a letras para obtener el texto cifrado.

---

# Instrucciones de Uso

## Encriptar
1. Escribir un mensaje con letras A–Z (los demás caracteres se eliminan automáticamente).  
2. Ingresar la matriz clave 2×2.  
3. Presionar el botón **Encriptar**.  
4. El resultado aparecerá en el cuadro inferior.

## Desencriptar
1. Ingresar el texto cifrado.  
2. Escribir la misma matriz clave empleada para cifrar.  
3. Presionar **Desencriptar**.  
4. Si la matriz no tiene inversa módulo 26, se mostrará un aviso de error.

---

# Matemáticas Utilizadas

## Representación del alfabeto

Cada letra se transforma en un número:

| Letra | Valor |
|-------|--------|
| A | 0 |
| B | 1 |
| ... | ... |
| Z | 25 |

Esto permite operar matemáticamente con matrices.

---

## Matriz clave 2×2

El usuario ingresa una matriz:

$$
K =
\begin{pmatrix}
a & b \\
c & d \\
\end{pmatrix}
$$

Para que la matriz pueda usarse para desencriptar, debe ser invertible módulo 26.

---

## Encriptación

Cada par de letras del mensaje se convierte en un vector columna:

$$
P =
\begin{pmatrix}
p_1 \\
p_2 \\
\end{pmatrix}
$$

El proceso de cifrado consiste en:

$$
C = K \cdot P \mod 26
$$

---

## Determinante e inversa de la matriz

El determinante de la matriz clave es:

$$
\det(K) = ad - bc
$$

La matriz es válida solo si este determinante tiene inversa modular en modulo 26.

La inversa se calcula como:

$$
K^{-1} = \det(K)^{-1}
\begin{pmatrix}
d & -b \\
-c & a \\
\end{pmatrix}
\mod 26
$$

---

## Desencriptación

Para recuperar el mensaje original:

$$
P = K^{-1} \cdot C \mod 26
$$

Si la matriz no tiene inversa módulo 26, el mensaje no puede ser desencriptado.

---

# Personalización del Proyecto

## Estilo visual implementado
- Tema oscuro con fondo degradado en tonos negro y rojo.  
- Borde dorado para destacar secciones del programa.  
- Tipografía tipo "Courier New" para un estilo retro/criptográfico.  
- Sombras y detalles en rojo para complementar la temática.

## Validaciones y mejoras
- Contador de caracteres en tiempo real.  
- Conversión automática del texto a mayúsculas.  
- Eliminación de caracteres no válidos.  
- Generación automática de la matriz del mensaje.  
- Relleno automático con “X” (valor 23) si el mensaje tiene longitud impar.  

## Funciones adicionales
- Cálculo de la matriz inversa módulo 26 directamente desde JavaScript.  
- Detalles visuales reactivos (errores, cambios de color, resaltados).  
- Interfaz adaptable y clara para el usuario.

---

# Archivos Incluidos en el Proyecto

- **index.html** — interfaz y estructura del sistema  
- **style.css** — estilos y diseño personalizado  
- **script.js** — lógica completa del cifrado y descifrado  
- **README.md** — documentación completa del proyecto

---

