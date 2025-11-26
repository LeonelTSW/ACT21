const mensaje = document.getElementById('mensaje');
const charCount = document.querySelector('.char-count');
const matrizMensaje = document.getElementById('matrizMensaje');
const k11 = document.getElementById('k11');
const k12 = document.getElementById('k12');
const k21 = document.getElementById('k21');
const k22 = document.getElementById('k22');
const btnEncriptar = document.getElementById('encriptar');
const btnDesencriptar = document.getElementById('desencriptar');
const resultado = document.getElementById('resultado');

// Actualizar contador
mensaje.addEventListener('input', () => {
    const len = mensaje.value.length;
    charCount.textContent = `${len}/30`;
    mostrarMatrizMensaje();
});

// Mostrar matriz del mensaje
function mostrarMatrizMensaje() {
    const texto = mensaje.value.toUpperCase().replace(/[^A-Z]/g, '');
    
    if (texto.length === 0) {
        matrizMensaje.textContent = 'Escribe un mensaje primero...';
        return;
    }
    
    const valores = texto.split('').map(char => char.charCodeAt(0) - 65);
    
    let matriz = '[';
    for (let i = 0; i < valores.length; i += 2) {
        matriz += `[${valores[i]}, ${valores[i+1] !== undefined ? valores[i+1] : 23}] `;
    }
    matriz += ']';
    
    matrizMensaje.textContent = matriz;
}

// =========== FUNCIONES DE APOYO PARA HILL ==========

// Modulo positivo
function mod(n, m) {
    return ((n % m) + m) % m;
}

// Inversa modular
function inversaMod(a, m) {
    for (let x = 1; x < m; x++) {
        if (mod(a * x, m) === 1) return x;
    }
    return null;
}

// Obtener matriz inversa (mod 26)
function matrizInversa2x2(key) {
    const det = mod(key[0][0] * key[1][1] - key[0][1] * key[1][0], 26);
    const detInv = inversaMod(det, 26);

    if (!detInv) return null;

    // adjunta
    let inv = [
        [ key[1][1], -key[0][1] ],
        [ -key[1][0], key[0][0] ]
    ];

    // aplicar modulo 26
    for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 2; j++) {
            inv[i][j] = mod(inv[i][j] * detInv, 26);
        }
    }

    return inv;
}

// =============== ENCRIPTAR ===============
btnEncriptar.addEventListener('click', () => {
    resultado.classList.remove('error');

    const key = [
        [parseInt(k11.value), parseInt(k12.value)],
        [parseInt(k21.value), parseInt(k22.value)]
    ];

    const texto = mensaje.value.toUpperCase().replace(/[^A-Z]/g, '');

    if (texto.length === 0) {
        resultado.textContent = 'Error: Ingresa un mensaje';
        resultado.classList.add('error');
        return;
    }

    let nums = texto.split('').map(x => x.charCodeAt(0) - 65);
    if (nums.length % 2 !== 0) nums.push(23);

    let encriptado = "";

    for (let i = 0; i < nums.length; i += 2) {
        const v1 = nums[i];
        const v2 = nums[i+1];

        const c1 = mod(key[0][0] * v1 + key[0][1] * v2, 26);
        const c2 = mod(key[1][0] * v1 + key[1][1] * v2, 26);

        encriptado += String.fromCharCode(c1 + 65);
        encriptado += String.fromCharCode(c2 + 65);
    }

    resultado.textContent = encriptado;
});

// =============== DESENCRIPTAR ===============
btnDesencriptar.addEventListener('click', () => {
    resultado.classList.remove('error');

    const key = [
        [parseInt(k11.value), parseInt(k12.value)],
        [parseInt(k21.value), parseInt(k22.value)]
    ];

    const texto = mensaje.value.toUpperCase().replace(/[^A-Z]/g, '');

    if (texto.length === 0) {
        resultado.textContent = 'Error: Ingresa un mensaje encriptado';
        resultado.classList.add('error');
        return;
    }

    let inv = matrizInversa2x2(key);

    if (!inv) {
        resultado.textContent = 'Error: La matriz no tiene inversa (no es válida para desencriptar)';
        resultado.classList.add('error');
        return;
    }

    let nums = texto.split('').map(x => x.charCodeAt(0) - 65);
    if (nums.length % 2 !== 0) nums.push(23);

    let desencriptado = "";

    for (let i = 0; i < nums.length; i += 2) {
        const v1 = nums[i];
        const v2 = nums[i+1];

        const c1 = mod(inv[0][0] * v1 + inv[0][1] * v2, 26);
        const c2 = mod(inv[1][0] * v1 + inv[1][1] * v2, 26);

        desencriptado += String.fromCharCode(c1 + 65);
        desencriptado += String.fromCharCode(c2 + 65);
    }

    resultado.textContent = desencriptado;
});
