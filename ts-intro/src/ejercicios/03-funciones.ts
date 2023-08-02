

/*
===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFelacha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

// const resultado = multiplicar(5, 7);

// console.log(resultado);

/***************
 * SEGUNDA PARTE
 **************/

interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}
function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;

    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Oscar',
    pv: 50,
    mostrarHp() {
        console.log('Puntos de vida: ', this.pv)
    }
}

curar(nuevoPersonaje, 20);