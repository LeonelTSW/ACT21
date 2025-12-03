Materia: Fundamentos de Álgebra
Alumno: Leonel Zapata Angulo
Grupo: 1-A
Proyecto: Implementación del Cifrado Hill
Descripción del Proyecto

Este proyecto implementa el algoritmo de cifrado Hill usando una interfaz web desarrollada con HTML, CSS y JavaScript.
Permite encriptar y desencriptar mensajes utilizando una matriz clave 2×2 y operaciones modulares basadas en el alfabeto A–Z.

El sistema convierte letras en números, forma vectores de tamaño 2 y aplica multiplicación matricial módulo 26 para realizar el proceso de cifrado y descifrado.

Descripción del Algoritmo (Cifrado Hill)

El Cifrado Hill es un método de criptografía por bloques que utiliza álgebra lineal.
Opera con una matriz clave y vectores provenientes del mensaje.

Los pasos generales son:

Convertir cada letra del mensaje a un valor numérico (A=0, B=1, … Z=25).

Agrupar el mensaje en pares de caracteres.

Multiplicar cada pareja por la matriz clave.

Aplicar el resultado módulo 26.

Convertir nuevamente los valores numéricos a letras para obtener el texto cifrado.

Instrucciones de Uso
Encriptar

Escribir un mensaje con letras A–Z (los demás caracteres se eliminan automáticamente).

Ingresar la matriz clave 2×2.

Presionar el botón Encriptar.

El resultado aparecerá en el cuadro inferior.

Desencriptar

Ingresar el texto cifrado.

Escribir la misma matriz clave empleada para cifrar.

Presionar Desencriptar.

Si la matriz no tiene inversa módulo 26, se mostrará un aviso de error.

Matemáticas Utilizadas
Representación del alfabeto

Cada letra se transforma en un número:

Letra	Valor
A	0
B	1
...	...
Z	25

Esto permite operar matemáticamente con matrices.

Matriz clave 2×2

El usuario ingresa una matriz:

𝐾
=
(
𝑎
	
𝑏


𝑐
	
𝑑
)
K=(
a
c
	​

b
d
	​

)

Para que la matriz pueda usarse para desencriptar, debe ser invertible módulo 26.

Encriptación

Cada par de letras del mensaje se convierte en un vector columna:

𝑃
=
(
𝑝
1


𝑝
2
)
P=(
p
1
	​

p
2
	​

	​

)

El proceso de cifrado consiste en:

𝐶
=
𝐾
⋅
𝑃
m
o
d
 
 
26
C=K⋅Pmod26
Determinante e inversa de la matriz

El determinante de la matriz clave es:

det
⁡
(
𝐾
)
=
𝑎
𝑑
−
𝑏
𝑐
det(K)=ad−bc

La matriz es válida solo si este determinante tiene inversa modular en modulo 26.

La inversa se calcula como:

𝐾
−
1
=
det
⁡
(
𝐾
)
−
1
(
𝑑
	
−
𝑏


−
𝑐
	
𝑎
)
m
o
d
 
 
26
K
−1
=det(K)
−1
(
d
−c
	​

−b
a
	​

)mod26
Desencriptación

Para recuperar el mensaje original:

𝑃
=
𝐾
−
1
⋅
𝐶
m
o
d
 
 
26
P=K
−1
⋅Cmod26

Si la matriz no tiene inversa módulo 26, el mensaje no puede ser desencriptado.

Personalización del Proyecto
Estilo visual implementado

Tema oscuro con fondo degradado en tonos negro y rojo.

Borde dorado para destacar secciones del programa.

Tipografía tipo "Courier New" para un estilo retro/criptográfico.

Sombras y detalles en rojo para complementar la temática.

Validaciones y mejoras

Contador de caracteres en tiempo real.

Conversión automática del texto a mayúsculas.

Eliminación de caracteres no válidos.

Generación automática de la matriz del mensaje.

Relleno automático con “X” (valor 23) si el mensaje tiene longitud impar.

Funciones adicionales

Cálculo de la matriz inversa módulo 26 directamente desde JavaScript.

Detalles visuales reactivos (errores, cambios de color, resaltados).

Interfaz adaptable y clara para el usuario.
