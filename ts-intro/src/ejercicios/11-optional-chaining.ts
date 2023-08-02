/*
===== Código de TypeScript =====
*/
interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Oscar',
}

const pasajero2: Pasajero = {
    nombre: 'Martha',
    hijos: ['Ximena', 'Santi']
}

function imprimeHijos(pasajero: Pasajero): void {
    const cuantisHijos = pasajero.hijos?.length || 0;

    console.log(cuantisHijos)
}

imprimeHijos(pasajero1);
